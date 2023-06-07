import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css"
import meGods from "../../assets/meRem.png"


function Header() {
  return (
    <div className="nav_hxn">
      <Navbar className="main_nav" collapseOnSelect expand="lg" bg="" variant="">
        <Container>
          <Navbar.Brand href="#home">
           <img src={meGods} width={100} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav nav_k_pages_main">
            <Nav className="me-auto  ms-auto">
              <Nav.Link href="#About" className="nav_k_pages ps-5">About Us</Nav.Link>
              <Nav.Link href="#Token Info" className="nav_k_pages ps-5">Token Info</Nav.Link>
              <Nav.Link href="#features" className="nav_k_pages ps-5">Features</Nav.Link>
              <Nav.Link href="#Roadmap" className="nav_k_pages ps-5">Roadmap</Nav.Link>
              <Nav.Link href="#FAQ" className="nav_k_pages ps-5">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
