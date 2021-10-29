import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  const weather = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getWeatherData());
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col>Hello</Col>
      </Row>
    </Container>
  );
};

export default Home;
