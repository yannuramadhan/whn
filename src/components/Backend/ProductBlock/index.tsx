import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button, Modal, Form, Input, message, Upload } from "antd";
import { UploadChangeParam, UploadFile } from "antd/lib/upload/interface";
import { UploadOutlined } from "@ant-design/icons";
import { Slide } from "react-awesome-reveal";
import { useHistory } from "react-router-dom";
import {
  ProductSection,
  ContentWrapper,
} from "./styles"; 

interface Product {
  id: number;
  judul: string;
  deskripsi: string;
  foto: any;
  info: any;
}

const Product: React.FC = () => {
  const history = useHistory();
  const [product, setProduct] = useState<Product[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Product | null>(null);
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

  //GET Product
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/product', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${accessToken}`, // Jika Anda memiliki mekanisme autentikasi
        },
      });
      const data = await response.json();
      setProduct(data);
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

  const onFinishPost = async (values: Product) => {
    try {
      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("deskripsi", values.deskripsi);
      formData.append("foto", values.foto.file);

      await fetch('http://localhost:4000/product', {
        method: 'POST',
        body: formData,
      });

      message.success("Data Berhasil Ditambah");
      fetchData();
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  //UPDATE Product
  const handleEdit = (row: Product) => {
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

      await fetch(`http://localhost:4000/product/${selectedArticle?.id}`, {
        method: 'PUT',
        body: formData,
      });

      message.success("Data Berhasil Diubah");
      fetchData();
      setEditModalVisible(false);
      setSelectedArticle(null);
    } catch (error) {
      console.error('Error editing product:', error);
    }
  };
  //DELETE Product
  const handleDelete = async (row: Product) => {
    try {
      await fetch(`http://localhost:4000/product/${row.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${accessToken}`, // Jika Anda memiliki mekanisme autentikasi
        },
      });

      message.success("Data Berhasil Dihapus");
      fetchData();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const actionColumn = {
    title: 'Aksi',
    key: 'aksi',
    render: (row: Product) => (
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
      <ProductSection>
        <Slide direction="right">
          <Row justify="center" align="middle">
            <ContentWrapper>
              <Col lg={24} md={24} sm={24} xs={24}>
                <p style={{textAlign: 'center', marginBottom: '16px' }}>Daftar Product</p>
                <Button onClick={showModal} style={{marginBottom: '10px' }}>Tambah</Button>
                <Table dataSource={product} columns={columnsWithAction}  />
                <Modal
                  title="Tambah Product"
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
                  title="Edit Product"
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
      </ProductSection>
    </>
  );
};

export default Product;

