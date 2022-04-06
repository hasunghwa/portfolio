import React, { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const pathname = useLocation().pathname;
  const targets = useRef([]);

  useEffect(() => {
    if (pathname == "/") {
      targets.current[0].classList.add("navbar-active");
      targets.current[1].className = "nav-item";
      targets.current[2].className = "nav-item";
    } else if (pathname == "/about") {
      targets.current[1].classList.add("navbar-active");
      targets.current[0].className = "nav-item";
      targets.current[2].className = "nav-item";
    } else if (pathname == "/project") {
      targets.current[2].classList.add("navbar-active");
      targets.current[0].className = "nav-item";
      targets.current[1].className = "nav-item";
    }
  }, [pathname]);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  function mouseOver(index) {
    if (index == 0) {
      targets.current[0].classList.add("navbar-active");
      targets.current[1].className = "nav-item";
      targets.current[2].className = "nav-item";
    } else if (index == 1) {
      targets.current[1].classList.add("navbar-active");
      targets.current[0].className = "nav-item";
      targets.current[2].className = "nav-item";
    } else if (index == 2) {
      targets.current[2].classList.add("navbar-active");
      targets.current[0].className = "nav-item";
      targets.current[1].className = "nav-item";
    }
  }

  function mouseLeave() {
    if (pathname == "/") {
      targets.current[0].classList.add("navbar-active");
      targets.current[1].className = "nav-item";
      targets.current[2].className = "nav-item";
    } else if (pathname == "/about") {
      targets.current[1].classList.add("navbar-active");
      targets.current[0].className = "nav-item";
      targets.current[2].className = "nav-item";
    } else if (pathname == "/project") {
      targets.current[2].classList.add("navbar-active");
      targets.current[0].className = "nav-item";
      targets.current[1].className = "nav-item";
    }
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item
              ref={(el) => (targets.current[0] = el)}
              onMouseOver={() => mouseOver(0)}
              onMouseLeave={() => mouseLeave()}
            >
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              ref={(el) => (targets.current[1] = el)}
              onMouseOver={() => mouseOver(1)}
              onMouseLeave={() => mouseLeave()}
            >
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item
              ref={(el) => (targets.current[2] = el)}
              onMouseOver={() => mouseOver(2)}
              onMouseLeave={() => mouseLeave()}
            >
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item>
              <Nav.Link
                href="https://blogs.soumya-jit.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> */}

            {/* <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
