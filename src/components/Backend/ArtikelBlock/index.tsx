import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button, Modal, Form, Input, message } from "antd";
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
  foto: string;
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

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/artikel', {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*'
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
      await fetch('http://localhost:4000/artikel', {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*'
        },
        body: JSON.stringify(values),
      });
      message.success("Data Berhasil Ditambah");
      fetchData(); // Ambil data baru setelah menambah artikel
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error adding artikel:', error);
    }
  };

  const handleEdit = async (row: Artikel) => {
    setSelectedArticle(row);
    editForm.setFieldsValue({
      judul: row.judul,
      deskripsi: row.deskripsi,
      foto: row.foto,
    });
    setEditModalVisible(true);
  };

  const onFinishEdit = async (row: Artikel) => {
    if (selectedArticle) {
      try {
        await fetch(`http://localhost:4000/artikel/${selectedArticle.id}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*'
        },
          body: JSON.stringify(row),
        });
        message.success("Data Berhasil Dirubah");
        fetchData();
        setEditModalVisible(false);
      } catch (error) {
        console.error('Error editing artikel:', error);
      }
    }
  };

  const handleDelete = async (row: Artikel) => {
    try {
      await fetch(`http://localhost:4000/artikel/${row.id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*'
        },
      });
      message.success("Data Berhasil Dihapus");
      fetchData(); // Ambil data baru setelah menghapus artikel
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
                      judul: "", // Atur nilai awal judul menjadi string kosong
                      deskripsi: "", // Atur nilai awal deskripsi menjadi string kosong
                      foto: "", // Atur nilai awal foto menjadi string kosong
                    }}
                  >
                    <Form.Item label="Judul" name="judul">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Deskripsi" name="deskripsi">
                      <Input.TextArea />
                    </Form.Item>
                    <Form.Item label="Foto" name="foto">
                      <Input.TextArea />
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
                    <Input.TextArea />
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
