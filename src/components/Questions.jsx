import Container from "react-bootstrap/Container";
import questions from "../helpers/data";
import InterviewAccord from "./InterviewAccord";

const Questions = () => {
  return (
    <Container>
      {questions.map((item) => (
        <InterviewAccord
          key={item.id}
          className=" border border-3"
          item={item}
        />
      ))}
    </Container>
  );
};
export default Questions;