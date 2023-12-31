import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button, Modal, Form, Input, message, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Slide } from "react-awesome-reveal";
import {
  ProductSection,
  ContentWrapper,
} from "./styles"; 

interface Produk {
  id: number;
  judul: string;
  deskripsi: string;
  foto: any;
  status: string;
  info: any;
}

const urlProduk = "https://api.whnmandiri.co.id/products"

const Produk: React.FC = () => {
  const [product, setProduct] = useState<Produk[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Produk | null>(null);
  const [form] = Form.useForm();
  const [editForm] = Form.useForm();
  const storedLoggedInStatus = localStorage.getItem('isLoggedIn');  
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!storedLoggedInStatus && !accessToken) {
      window.location.href = "/login";
    }
    fetchData();
  }, []);

  //GET Product
  const fetchData = async () => {
    try {
      const response = await fetch(urlProduk, {
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
    setSelectedProduct(null);
    form.resetFields();
    editForm.resetFields();
  };

  const onFinishPost = async (values: Produk) => {
    try {
      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("deskripsi", values.deskripsi);
      formData.append("foto", values.foto.file);

      await fetch(urlProduk, {
        method: 'POST',
        body: formData,
      });

      message.success("Data Berhasil Ditambah");
      fetchData();
      form.resetFields();
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  //UPDATE Product
  const handleEdit = (row: Produk) => {
    setSelectedProduct(row);
    setEditModalVisible(true);
    editForm.setFieldsValue({
      judul: row.judul,
      deskripsi: row.deskripsi,
      foto: row.foto,
      status: row.status,
    });
  };

  const onFinishEdit = async (values: any) => {
    try {
      const formData = new FormData();
      formData.append("judul", values.judul);
      formData.append("deskripsi", values.deskripsi);
      formData.append("foto", values.foto.file);
      formData.append("status", values.status);

      await fetch(urlProduk+`/${selectedProduct?.id}`, {
        method: 'PUT',
        body: formData,
      });

      message.success("Data Berhasil Diubah");
      fetchData();
      editForm.resetFields();
      setEditModalVisible(false);
      setSelectedProduct(null);
    } catch (error) {
      console.error('Error editing product:', error);
    }
  };
  //DELETE Product
  const handleDelete = async (row: Produk) => {
    try {
      await fetch(urlProduk+`/${row.id}`, {
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
    render: (row: Produk) => (
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
    { title: "Status", dataIndex: "status", key: "status" },
  ];

  const columnsWithAction = [...columns, actionColumn];

  return (
    <> 
      <ProductSection>
          <Row justify="center">
              <Col lg={24} md={24} sm={24} xs={24}>
              <p style={{textAlign: 'center', marginBottom: '16px' }}>Daftar Product</p>
              <Button onClick={showModal} style={{marginBottom: '10px' }}>Tambah</Button>
              <ContentWrapper>
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
                        action="https://api.whnmandiri.co.id/images"
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
                      judul: selectedProduct?.judul,
                      deskripsi: selectedProduct?.deskripsi,
                      foto: selectedProduct?.foto,
                      status: selectedProduct?.status,
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
                        action="https://api.whnmandiri.co.id/images"
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
                    <Form.Item label="Status" name="status">
                      <Select>
                        <Select.Option value="Y">Y</Select.Option>
                        <Select.Option value="N">N</Select.Option>
                      </Select>
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                      Simpan
                    </Button>
                  </Form>
                </Modal>
              </ContentWrapper>
              </Col>
          </Row>
      </ProductSection>
    </>
  );
};

export default Produk;

