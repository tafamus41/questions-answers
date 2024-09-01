import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { arrowdown } from "../helpers/icons";
import { arrowup } from "../helpers/icons";
import React, { useState } from "react";

const InterviewAccord = ({ item }) => {
  console.log(item);
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);

  return (
    <Row className="questionRow border border-3 my-3">
      <Col sm={8}>{item.question}</Col>
      {visible && <Col className="text-primary" sm={8}>{item.answer}</Col>}
      <Col className="text-end" onClick={toggle} sm={4}>
        {visible ? arrowup : arrowdown}
      </Col>
    </Row>
  );
};

export default InterviewAccord;
