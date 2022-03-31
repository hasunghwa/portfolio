import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLinux, SiVisualstudiocode } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p style={{ textAlign: "center", color: "#5E5E61", fontSize: "1rem" }}>
          <span className="green">Linux</span>
          <br />
          <br />
          간단한 명령어들을 사용할 줄 알고, 리눅스 환경에서 개발할 수 있습니다.
        </p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />{" "}
        <p style={{ textAlign: "center", color: "#5E5E61", fontSize: "1rem" }}>
          <span className="green">VsCode</span>
          <br />
          <br />
          코드 편집기로서 활용할 수 있습니다.
        </p>
      </Col>
    </Row>
  );
}

export default Toolstack;
