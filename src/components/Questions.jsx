import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import questions from "../helpers/data";
import { arrowdown } from "../helpers/icons";
import { arrowup } from "../helpers/icons";
import React, { useState } from "react";

const Questions = () => {
  const [visible, setVisible] = useState(true);
  const toggle = (index) => {
    setVisible(visible === index ? true:index);
  };
  return (
    <Container>
      {questions.map((item, index) => (
        <Row key={item.id}>
          <Col sm={8}>{item.question}</Col>
          <Col onClick={() => toggle(index)} sm={4}>
            {visible === index ? arrowup : arrowdown}
          </Col>
          {visible === index && <Col sm={12}>{item.answer}</Col>}
        </Row>
      ))}
    </Container>
  );
};

export default Questions;
