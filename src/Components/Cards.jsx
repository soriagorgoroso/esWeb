import React from "react";
import Card from "react-bootstrap/Card";
import "./Cards.css";
export default function Cards({ title, subTitle, styles }) {
  return (
    <div
      id="cardContainer"
      style={{
        ...styles,
      }}
      className="mt-3"
    >
      <Card
        border="info"
        bg={"light"}
        style={{
          width: "18rem",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
        className="shadow border-2"
      >
        <Card.Body>
          <Card.Title style={{ fontSize: "1rem" }}>{title}</Card.Title>
          <Card.Text style={{ fontSize: "2rem" }}>{subTitle}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
