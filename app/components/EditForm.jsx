import React from "react";
import { Col, Form, Input, Row } from "antd";
import "../globals.css";

export const EditForm = ({ name, email, phone, website }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <hr style={{ border: "1px #e8e8e8 solid" }} />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          name: name,
          email: email,
          phone: phone,
          website: website,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
      <br />
        <Row>
        <Col  xs={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 1 }}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          </Col>

          <Col  xs={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 1 }}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          </Col>

          <Col  xs={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 1 }}>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          </Col>

          <Col  xs={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 1 }}>
          <Form.Item
            label="Website"
            name="website"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
