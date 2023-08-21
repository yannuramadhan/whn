import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button, Modal, Form, Input, message, Upload } from "antd";
import { UploadChangeParam, UploadFile } from "antd/lib/upload/interface";
import { UploadOutlined } from "@ant-design/icons";
import { Slide } from "react-awesome-reveal";
import { useHistory } from "react-router-dom";
import {
  ArtikelSection,
  ContentWrapper,
} from "./styles"; 

interface Artikel {
  id: number;
  judul: string;
  deskripsi: string;
  foto: any;
  info: any;
}

const Artikel: React.FC = () => {
  const history = useHistory();
  const [artikel, setArtikel] = useState<Artikel[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Artikel | null>(null);
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      history.push('/login');
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  //GET Artikel
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/artikel', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${accessToken}`, // Jika Anda memiliki mekanisme autentikasi
        },
      });
      const data = await response.json();
      setArtikel(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditModalVisible(false);
    setSelectedArticle(null);
    form.resetFields();
    editForm.resetFields();
  };

  const onFinishPost = async (values: Artikel) => {
    try {
      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("deskripsi", values.deskripsi);
      formData.append("foto", values.foto.file);

      await fetch('http://localhost:4000/artikel', {
        method: 'POST',
        body: formData,
      });

      message.success("Data Berhasil Ditambah");
      fetchData();
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error adding artikel:', error);
    }
  };

  //UPDATE ARTIKEL
  const handleEdit = (row: Artikel) => {
    setSelectedArticle(row);
    setEditModalVisible(true);
    editForm.setFieldsValue({
      judul: row.judul,
      deskripsi: row.deskripsi,
    });
  };

  const onFinishEdit = async (values: any) => {
    try {
      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("deskripsi", values.deskripsi);
      formData.append("foto", values.foto.file);

      await fetch(`http://localhost:4000/artikel/${selectedArticle?.id}`, {
        method: 'PUT',
        body: formData,
      });

      message.success("Data Berhasil Diubah");
      fetchData();
      setEditModalVisible(false);
      setSelectedArticle(null);
    } catch (error) {
      console.error('Error editing artikel:', error);
    }
  };
  //DELETE ARTIKEL
  const handleDelete = async (row: Artikel) => {
    try {
      await fetch(`http://localhost:4000/artikel/${row.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${accessToken}`, // Jika Anda memiliki mekanisme autentikasi
        },
      });

      message.success("Data Berhasil Dihapus");
      fetchData();
    } catch (error) {
      console.error('Error deleting artikel:', error);
    }
  };

  const actionColumn = {
    title: 'Aksi',
    key: 'aksi',
    render: (row: Artikel) => (
      <div>
        <Button onClick={() => handleEdit(row)}>Edit</Button>
        <Button onClick={() => handleDelete(row)}>Hapus</Button>
      </div>
    ),
  };

  const columns = [
    { title: "Judul", dataIndex: "judul", key: "judul" },
    { title: "Deskripsi", dataIndex: "deskripsi", key: "deskripsi" },
    { title: "Foto", dataIndex: "foto", key: "foto" },
  ];

  const columnsWithAction = [...columns, actionColumn];

  return (
    <> 
      <ArtikelSection>
        <Slide direction="right">
          <Row justify="center" align="middle">
            <ContentWrapper>
              <Col lg={24} md={24} sm={24} xs={24}>
                <p style={{textAlign: 'center', marginBottom: '16px' }}>Daftar Artikel</p>
                <Button onClick={showModal} style={{marginBottom: '10px' }}>Tambah</Button>
                <Table dataSource={artikel} columns={columnsWithAction}  />
                <Modal
                  title="Tambah Artikel"
                  visible={isModalVisible}
                  onCancel={handleCancel}
                  footer={null}
                >
                  <Form
                    form={form}
                    onFinish={onFinishPost}
                    initialValues={{
                      judul: "",
                      deskripsi: "",
                      foto: "",
                    }}
                  >
                    <Form.Item label="Judul" name="judul">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Deskripsi" name="deskripsi">
                      <Input.TextArea />
                    </Form.Item>
                    <Form.Item label="Foto" name="foto">
                      <Upload
                        name="foto"
                        action="http://localhost:4000/images"
                        listType="picture"
                        maxCount={1}
                        beforeUpload={(file) => {
                          const fileName = file.name;
                          form.setFieldsValue({ foto: fileName });
                          return false;
                        }}
                      >
                        <Button icon={<UploadOutlined />}>Pilih Gambar</Button>
                      </Upload>
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                      Simpan
                    </Button>
                  </Form>
                </Modal>
                <Modal
                  title="Edit Artikel"
                  visible={editModalVisible}
                  onCancel={handleCancel}
                  footer={null}
                >
                  <Form
                    form={editForm}
                    onFinish={onFinishEdit}
                    initialValues={{
                      judul: selectedArticle?.judul,
                      deskripsi: selectedArticle?.deskripsi,
                      foto: selectedArticle?.foto,
                    }}
                  >
                    <Form.Item label="Judul" name="judul">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Deskripsi" name="deskripsi">
                      <Input.TextArea />
                    </Form.Item>
                    <Form.Item label="Foto" name="foto">
                      <Upload
                        name="foto"
                        action="http://localhost:4000/images"
                        listType="picture"
                        maxCount={1}
                        beforeUpload={(file) => {
                          const fileName = file.name;
                          form.setFieldsValue({ foto: fileName });
                          return false;
                        }}
                      >
                        <Button icon={<UploadOutlined />}>Pilih Gambar</Button>
                      </Upload>
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                      Simpan
                    </Button>
                  </Form>
                </Modal>
              </Col>
            </ContentWrapper>
          </Row>
        </Slide>
      </ArtikelSection>
    </>
  );
};

export default Artikel;