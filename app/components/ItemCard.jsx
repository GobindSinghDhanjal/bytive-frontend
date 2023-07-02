import {
  EditOutlined,
  MailOutlined,
  DeleteFilled,
  GlobalOutlined,
  PhoneOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Card } from "antd";
import { useState } from "react";
const { Meta } = Card;

const ItemCard = ({ name, img, email, phone, website }) => (
  <Card
    className="card"
    style={{
      margin: "10px",
    }}
    cover={
      <img
        alt="example"
        src={img}
        style={{ background: "#f5f5f5" }}
        height={200}
      />
    }
    actions={[
      <HeartOutlined style={{ fontSize: "1.4em", color: "red" }} key="heart" />,
      <EditOutlined style={{ fontSize: "1.4em" }} key="edit" />,
      <DeleteFilled style={{ fontSize: "1.4em" }} key="delete" />,
    ]}
  >
    <Meta title={name} />
    <br />
    <MailOutlined /> {email}
    <br />
    <PhoneOutlined /> {phone}
    <br />
    <GlobalOutlined /> {website}
  </Card>
);

export default ItemCard;
