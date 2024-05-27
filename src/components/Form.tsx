import React from 'react';
import { Form, Input, Button, Checkbox, Typography, Row, Col } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const { Title } = Typography;

const ContactForm = () => {
  const onFinish = (values:any) => {
    console.log('Form values:', values);
  };

  const validateMessages = {
    required: '${label} este obligatoriu!',
    types: {
      email: '${label} nu este un email valid!',
    },
    pattern: {
      mismatch: '${label} trebuie să conțină exact 10 cifre!',
    },
  };

  return (
    <Row justify="center" style={{ marginTop: '50px' }}>
      <Col span={12}>
        <Title level={2} style={{ textAlign: 'center' }}>
          Contactează-ne
        </Title>
        <Form
          name="contact"
          onFinish={onFinish}
          validateMessages={validateMessages}
          layout="vertical"
        >
          <Form.Item
            name="nume"
            label="Nume"
            rules={[{ required: true }]}
          >
            <Input placeholder="Introdu numele" />
          </Form.Item>
          <Form.Item
            name="prenume"
            label="Prenume"
            rules={[{ required: true }]}
          >
            <Input placeholder="Introdu prenumele" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, type: 'email' }]}
          >
            <Input placeholder="Introdu emailul" />
          </Form.Item>
          <Form.Item
            name="telefon"
            label="Telefon"
            rules={[
              { required: true },
              { pattern: /^[0-9]{10}$/, message: 'Telefonul trebuie să conțină exact 10 cifre!' },
            ]}
          >
            <Input placeholder="Introdu numărul de telefon" />
          </Form.Item>
          <Form.Item
            name="mesaj"
            label="Mesaj"
            rules={[{ required: true }]}
          >
            <Input.TextArea rows={4} placeholder="Introdu mesajul" />
          </Form.Item>
          <Form.Item
            name="tip_site"
            label="Tip site dorit"
          >
            <Checkbox.Group>
              <Checkbox value="landing_page" style={{ lineHeight: '32px' }}>
                Landing Page
              </Checkbox>
              <Checkbox value="internet_magazin" style={{ lineHeight: '32px' }}>
                Internet Magazin
              </Checkbox>
              <Checkbox value="site_complex" style={{ lineHeight: '32px' }}>
                Site Complex
              </Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" icon={<MailOutlined />}>
              Trimite
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default ContactForm;
