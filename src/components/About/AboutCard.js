import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p
            style={{
              textAlign: "center",
              lineHeight: "30px",
              fontSize: "1.2rem",
            }}
          >
            어릴 때부터 수학 문제를 풀고 해결했을 때의{" "}
            <span className="green">성취감</span>을 좋아해서 수학 문제를 푸는
            것을 좋아했었습니다. <br />
            프로그래밍을 통해 문제를 해결하는 부분이 수학의 문제 풀이와 많이
            닮아 있었고, 해결했을 때의 희열도 동일하게 느낄 수 있어 프로그래밍에
            흥미가 생겼습니다.
            <br />
            <br />
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
