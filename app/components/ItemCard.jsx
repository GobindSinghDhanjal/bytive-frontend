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
import EditModal from "./EditModal";
const { Meta } = Card;

function ItemCard({ id, name, img, email, phone, website, deleteUser }) {
  const [open, setOpen] = useState(false);
  const [heart, setHeart] = useState(false);

  function delUser() {
    deleteUser(id);
  }

  const openModal = () => {
    setOpen(true);
  };

  const heartClick = () => {
    if(heart){
      setHeart(false);
    }else{
      setHeart(true);
    }
  };

  return (
    <div>
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
          heart?
          <HeartFilled
            onClick={heartClick}
            style={{ fontSize: "1.4em", color: "red" }}
            key="heart"
          />:
          <HeartOutlined
            onClick={heartClick}
            style={{ fontSize: "1.4em", color: "red" }}
            key="heart"
          />
          ,
          <EditOutlined
            onClick={openModal}
            style={{ fontSize: "1.4em" }}
            key="edit"
          />,
          <DeleteFilled
            onClick={delUser}
            style={{ fontSize: "1.4em" }}
            key="delete"
          />,
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
      <EditModal
        open={open}
        setOpen={setOpen}
        name={name}
        email={email}
        phone={phone}
        website={website}
      />
    </div>
  );
}

export default ItemCard;
