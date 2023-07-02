"use client";
import "./globals.css";
import ItemCard from "./components/ItemCard";
import { useEffect, useState } from "react";
import { Col, Row } from 'antd';


export default function Home() {
  const axios = require("axios");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://plum-top-hat.cyclic.app/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, []);

  return (
    <div className="">
     <Row  gutter={[8, 8]}>
   
      {users.map((user) => {
     
        return (
          <Col xs={24} sm={24} md={8} lg={8} xl={6}>
          <ItemCard
            name={user.name}
            img={user.img}
            phone={user.phone}
            email={user.email}
            website={user.website}
          />
          </Col>
        );
      })}
      </Row>
    </div>
  );
}
