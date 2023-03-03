import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import myImg from "../../Assets/tteok.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="green"> ABOUT </span> ME
            </h1>
            <p className="home-about-body">
              <i>
                <b className="green"> "백발코더를 꿈꿉니다." </b>
              </i> <br />
              <br />
              지속성을 가진 개발자가 되기 위해서 해야 할 것들이 무엇인지 고민하고, 
              <br /> 고민에서 실천으로 옮기자!
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
