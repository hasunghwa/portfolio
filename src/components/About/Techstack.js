import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { AiFillHtml5 } from "react-icons/ai";
import { DiJavascript1, DiReact, DiMongodb, DiPython } from "react-icons/di";
import { FaCss3Alt, FaJava } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          c
          <p
            style={{ textAlign: "center", color: "#5E5E61", fontSize: "1rem" }}
          >
            <span className="green">C</span>
            <br />
            <br />C 언어의 기본적인 문법에 대해 알고 있으며, 자료구조 및
            알고리즘을 C 언어로 공부하였습니다.
          </p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaJava />
          <p
            style={{ textAlign: "center", color: "#5E5E61", fontSize: "1rem" }}
          >
            <span className="green">Java</span>
            <br />
            <br />
            객체지향 언어의 특징을 알고 코드로 적용할 수 있습니다. JavaFx를 통해
            간단한 자바 어플리케이션을 개발하였습니다.
          </p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
          <p
            style={{ textAlign: "center", color: "#5E5E61", fontSize: "1rem" }}
          >
            <span className="green">JavaScript</span>
            <br />
            <br />
            javascript의 기본 문법을 사용할 줄 알고, 이벤트 처리 및 비동기
            작업을 할 수 있습니다.
          </p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <AiFillHtml5 />
          <p
            style={{ textAlign: "center", color: "#5E5E61", fontSize: "1rem" }}
          >
            <span className="green">HTML5</span>
            <br />
            <br />
            Html의 태그들을 알고 상황에 따라 알맞게 사용할 수 있습니다.
          </p>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <FaCss3Alt />
          <p
            style={{ textAlign: "center", color: "#5E5E61", fontSize: "1rem" }}
          >
            <span className="green">CSS3</span>
            <br />
            <br />
            css 기본 문법을 사용할 줄 알고, 간단한 애니메이션을 구현할 수
            있습니다.
          </p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
          <p
            style={{ textAlign: "center", color: "#5E5E61", fontSize: "1rem" }}
          >
            <span className="green">React</span>
            <br />
            <br />
            컴포넌트를 만들고 사용할 줄 알고, redux를 통한 상태관리를 할 수
            있습니다.
          </p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTensorflow />
          <p
            style={{ textAlign: "center", color: "#5E5E61", fontSize: "1rem" }}
          >
            <span className="green">Tensorflow</span>
            <br />
            <br />
            딥러닝에 관심이 있어 학부 연구생으로 프로젝트 진행 및 논문
            작성하였습니다.
          </p>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
          <p
            style={{ textAlign: "center", color: "#5E5E61", fontSize: "1rem" }}
          >
            <span className="green">Python</span>
            <br />
            <br />
            파이썬 기본 문법을 사용할 줄 알고, opencv를 통한 간단한 이미지
            처리를 할 수 있습니다.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
