import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown} from "react-bootstrap";
import "./SectionNavbarMenu.css"
import Image from "next/image";

export default function SectionNavbarMenu() {
    return (
        <header className="header-section border-one index">

            <Navbar sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand className="navbar-brand" href="/">
                        <Image
                            src="./assets/images/icon/fadak2.svg"
                            alt="Slide 1"
                            className="d-inline-block align-top"
                            width={180}
                            height={80}/>
                    </Navbar.Brand>
                    <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse  className="collapse navbar-collapse ms-auto " id="basic-navbar-nav">
                        <Nav className="me-auto  mb-lg-0 navbar-nav">
                            <NavDropdown title="سامانه‌ها">
                                <NavDropdown.Item className="custom-nav-item" href="#">آنلاین سهام</NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="#">آنلاین مشتقه </NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="">آفلاین سهام </NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="">بورس کالا</NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="">مرکز تماس</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="nav-item" href="/Services">بورس کالا و انرژی</Nav.Link>
                            <Nav.Link className="nav-item" href="/Services">مشتقه</Nav.Link>
                            <Nav.Link className="nav-item" href="/Services">اعتبار</Nav.Link>
                            <NavDropdown title="درباره فدک">
                                <NavDropdown.Item className="custom-nav-item" href="/Brokerage-branch">شعب و دفاتر</NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="/bank-accounts">شماره حساب‌ها</NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="/principles">اصول و اعتقادات حرفه‌ای</NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="/about">درباره ما </NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="">کمیته‌های تخصصی با رزومه</NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="">مدیران کلیدی با رزومه</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="nav-item" href="/learning">آموزش</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    );
}
