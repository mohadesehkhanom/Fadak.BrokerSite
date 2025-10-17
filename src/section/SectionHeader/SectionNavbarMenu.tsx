'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown} from "react-bootstrap";
import "./SectionNavbarMenu.css"

export default function SectionNavbarMenu() {
    return (
        <header className="header-section border-one index">

            <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand className="navbar-brand" href="#home">
                        <img
                            src="/assets/images/icon/fadak2.svg"
                            width="180"
                            height="80"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse  className="collapse navbar-collapse ms-auto " id="basic-navbar-nav">
                        <Nav className="me-auto  mb-lg-0 navbar-nav">
                            <Nav.Link className="nav-item" href="/">صفحه اصلی</Nav.Link>
                            <Nav.Link className="nav-item" href="/Services">خدمات</Nav.Link>
                            <NavDropdown title="صندوق ها">
                                <NavDropdown.Item href="#">صندوق طلا</NavDropdown.Item>
                                <NavDropdown.Item href="#">صندوق سهامی</NavDropdown.Item>
                                <NavDropdown.Item href="">صندوق مسکن</NavDropdown.Item>
                            </NavDropdown>
                            {/*<NavDropdown title="خدمات">*/}
                            {/*    <NavDropdown.Item href="#action/3.1">بورس اوراق بهادر</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.2">معاملات آتی و سکه</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.2">بورس کالا</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.2">بورس انرژِی</NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                            <Nav.Link className="nav-item" href="">سامانه ها</Nav.Link>
                            <Nav.Link className="nav-item" href="/principles">اصول و اعتقادات حرفه ای </Nav.Link>
                            <Nav.Link className="nav-item" href="/bank-accounts">شماره حساب ها</Nav.Link>
                            <Nav.Link className="nav-item" href="/Brokerage-branch">شعب و دفاتر</Nav.Link>
                            <Nav.Link className="nav-item" href="/learning">آموزش</Nav.Link>
                            <Nav.Link className="nav-item" href="/about">درباره ما</Nav.Link>

                            {/*<Nav.Link className="nav-item" href="#home">سامانه های معاملاتی</Nav.Link>*/}
                            {/*<Nav.Link className="nav-item" href="#link">اطلاعات بازار</Nav.Link>*/}
                            {/*<Nav.Link className="nav-item" href="#link">پایگاه اطلاع رسانی</Nav.Link>*/}
                            {/*<Nav.Link className="nav-item" href="#link">آموزش</Nav.Link>*/}
                            {/*<NavDropdown className="nav-item dropdown" title="Dropdown" id="basic-nav-dropdown">*/}
                            {/*    <NavDropdown.Item  className="nav-item" href="#action/3.1">Action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item className="nav-item" href="#action/3.2">Another action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item className="nav-item" href="#action/3.3">Something</NavDropdown.Item><NavDropdown.Divider/>*/}
                            {/*    <NavDropdown.Item className="nav-item" href="#action/3.4">Separated link</NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    );
}
