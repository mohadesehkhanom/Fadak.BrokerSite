'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown} from "react-bootstrap";
import "./SectionNavbarMenu.css"
import Image from "next/image";

export default function SectionNavbarMenu() {
    return (
        <header className="header-section border-one index shadow-sm">

            <Navbar sticky="top" expand="lg">
                <Container>
                    <Navbar.Brand className="navbar-brand" href="/">
                        <Image
                            src="/assets/images/icon/fadak2.svg"
                            alt="Slide 1"
                            className="d-inline-block align-top"
                            width={180}
                            height={80}/>
                    </Navbar.Brand>
                    <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse  className="collapse navbar-collapse ms-auto " id="basic-navbar-nav">
                        <Nav className="me-auto  mb-lg-0 navbar-nav">
                            <NavDropdown title="بورس ها">
                                <NavDropdown.Item className="custom-nav-item" href="/bourse">بورس</NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="/fara-bourse">فرابورس</NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="/kala">بورس کالا</NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="/energy">بورس انرژی</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="سامانه‌ها">
                                <NavDropdown.Item className="custom-nav-item" href="https://fadak.exirbroker.com/exir/">آنلاین سهام</NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="https://fadak.tsetab.ir/">آنلاین مشتقه </NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="https://fadak.irbrokersite.ir/">آفلاین سهام </NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="https://fadak.ebgo.ir/Login">بورس کالا</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="nav-item" href="/derivative">مشتقه</Nav.Link>
                            <Nav.Link className="nav-item" href="/trading-credit">اعتبار</Nav.Link>
                            <NavDropdown title="درباره فدک">
                                <NavDropdown.Item className="custom-nav-item" href="/branches">شعب و دفاتر</NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="/bank-accounts">شماره حساب‌ها</NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="/principles">اصول و اعتقادات حرفه‌ای</NavDropdown.Item>
                                <NavDropdown.Item className="custom-nav-item" href="/about">درباره ما </NavDropdown.Item>
                            </NavDropdown>
                            {/*<Nav.Link className="nav-item" href="/learning">آموزش</Nav.Link>*/}
                        </Nav>
                        <div className="d-flex align-items-center gap-3 ms-auto header-actions">
                            <a href="tel:+982163479000">
                                <span dir={'ltr'} className="number-farsi">021 63479000</span>
                                <i className="bi bi-telephone-fill fs-6"></i>
                            </a>

                            <a href="https://fadakregister.irbrokersite.ir/" className="btn fadak-button open-account-btn">
                                افتتاح حساب
                            </a>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    );
}
