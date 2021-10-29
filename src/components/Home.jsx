import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);

  const [city, setCity] = useState("");

  useEffect(() => {
    dispatch(getWeatherData("poznan"));
  }, []);

  const handleInput = (e) => {
    setCity({
      city: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getWeatherData(city));
  };

  return (
    <Container>
      <Row className="my-3">
        <Col xs={12}>
          <Form onSubmit={handleSubmit}>
            <FormControl
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form>
        </Col>
      </Row>
      <Row className="my-3">
        <Col xs={12}>
          {isLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
            <div>
              <h2>{data.name}</h2>

              <h6>{data.weather ? data.weather[0].description : "1"}</h6>
              {data.weather ? (
                <img
                  src={
                    "https://openweathermap.org/img/wn/" +
                    data.weather[0].icon +
                    "@2x.png"
                  }
                />
              ) : (
                "none"
              )}
              <h4>{data.main ? data.main.temp + "°C" : "?????"}</h4>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
