import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leftover from "../../Assets/Projects/leftover.png";
import netflix from "../../Assets/Projects/netflix.JPG";
import water from "../../Assets/Projects/water.png";
import marketmain from "../../Assets/Projects/marketmain.png";
import hlo from "../../Assets/Projects/hlo.JPG";
import reserch from "../../Assets/Projects/reserch.JPG";
import pdf from "../../Assets/../Assets/Small Polyp Detection.pdf";
import pdf2 from "../../Assets/../Assets/Yolo팀_최종_PT.pdf";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marketmain}
              isBlog={false}
              title="정통시장"
              description="편리한 배달 서비스의 발달과 코로나19 여파로 인한 경기침체로 상대적으로 경쟁력과 접근성이 떨어져 전통시장에 대한 사람들의 관심과 발길이 줄어들고 있다. 이를 해결하고자 상인이 직접 작성한 가게 상품 소개 글을 통해 가게 및 상품을 홍보하고 댓글을 통해 고객과 소통할 수 있는 서비스를 제작하였다."
              link="https://github.com/SeungHyeokJeon/Chocopie"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leftover}
              isBlog={true}
              title="잔반량 측정 시스템"
              description="급식환경에서의 식사 전과 식사 후의 식판 이미지들을  촬영 및 수집하여 
                            딥러닝 기반의 음식물 잔반 측정 시스템을 개발하였다. 측정된 데이터를 DB에 올리고 웹상에서 DB의 데이터를 시각화 하는 작업을 맡아 진행하였다."
              link={pdf2}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reserch}
              isBlog={true}
              title="Small Polyp Detection"
              description="대장 내시경 영상에서 작은 용종의 검출율을 높이기 위한 연구를 진행 하였다. 대장 내시경 이미지의 크기를 축소하여
              학습하는 방법과 작은 객체가 포함된 데이터의 양을 늘려 학습하는 오버 샘플링, 이미지 내
              에 작은 객체 부분을 복사하여 다른 이미지에 붙여 넣는 copy-pasting을 적용하였다."
              link={pdf}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hlo}
              isBlog={false}
              title="HLO"
              description="이벤트 공부를 위해 FLO 사이트를 클론코딩 하였다. 순수바닐라 자바스크립트와 CSS를 통해 이벤트를 구현 하였다. "
              link="https://github.com/hasunghwa/HLO"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Hetflix"
              description="React를 배우기 위해 넷플릭스 클론코딩을 진행 하였습니다. React와 더불어 TypeScript 및 framer-motion 라이브러리의 사용법을 익힐 수 있었습니다."
              link="https://github.com/hasunghwa/hetflex"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={water}
              isBlog={false}
              title="Water"
              description="평소 미네랄워터를 사먹으면서 이 물이 먹어도 되는 물인지, 어떤 영양성분을 가지고 있는지 궁금했었고, 미네랄워터의 성분을 알려주는 어플리케이션을 제작하였다. "
              link="https://github.com/hasunghwa/water/tree/master"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
