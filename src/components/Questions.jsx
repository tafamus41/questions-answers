import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import questions from "../helpers/data";
import {arrowdown} from "../helpers/icons";
import {arrowup} from "../helpers/icons";


const Questions = () => {
  // console.log(questions);
  console.log(arrowdown);
  return (
    <Container>
      <Row>
        {questions.map((item) => (
          <>
            <Col sm={8}>{item.question}</Col>
            <Col sm={4}>{arrowdown}</Col>
          </>
        ))}
      

        {/* <Col sm={8}>{item.answer}</Col> */}
      </Row>
    </Container>
  );
};

export default Questions;
