import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Col, Container, Navbar, Row, Card } from "react-bootstrap";

import Wrapper from "../../components/Wrapper";
import Main from "../../components/Main";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";

import {
  SIDEBAR_POSITION,
  SIDEBAR_BEHAVIOR,
  LAYOUT,
  THEME,
} from "../../constants";

import useTheme from "../../hooks/useTheme";
import useSidebar from "../../hooks/useSidebar";
import useLayout from "../../hooks/useLayout";

import portara from "../../assets/img/naxos_portara.jpg";
import logo from "../../assets/img/TIMIKAT.png";

const Navigation = () => (
  <Navbar expand="md" className="landing-navbar">
    <Container>
      <Navbar.Brand className="landing-brand" style={{ fontSize: "30px" }} href="/">
        TIMIKAT
      </Navbar.Brand>
      {/* <a className="sidebar-brand" href="/dashboard/default">
        <img src={logo} className="bi me-2" height="65px" role="img" style={{backgroundColor: "transparent"}} />
      </a> */}
    </Container>
  </Navbar>
);

const MainLayout = () => {
  const { t } = useTranslation();

  return (
    <section className="py-6 bg-white" height="100%">
      <Container className="position-relative z-3">
        <Row>
          <Col md="12" className="mx-auto text-center">
            <img
              src={portara}
              className="img-fluid rounded-lg landing-img"
              alt="Bootstrap 5 Dashboard Theme"
            />

            <Row>
              <div className="col-lg-10 col-xl-9 mx-auto mt-5">
                <div className="mb-4">
                  <h1 className="h1 mb-3">{t("CompanyHeader")}</h1>
                  <p className="text-muted fs-lg mt-4">
                    {t("FirstPara")}
                  </p>
                  <p className="text-muted fs-lg">
                    {t("SecondPara")}
                  </p>
                </div>
              </div>
            </Row>

            <Row>
              <div className="col-lg-10 col-xl-9 mx-auto mt-5">
                <div className="mb-4">
                  <h1 className="h1 mb-3">{t("Contact")}</h1>
                  <p className="text-muted fs-lg mt-4">
                    {t("ContactText")}
                  </p>

                  <Card className="mb-3">
                    <hr className="my-0" />

                    <Card.Body className="text-center">
                      <ul className="list-unstyled mb-1">
                        <li className="mb-1">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            fixedWidth
                            className="me-1"
                          />
                          <span>timikatike@gmail.com</span>
                        </li>
                        <li className="mb-1 mt-3">
                          <FontAwesomeIcon
                            icon={faPhoneAlt}
                            fixedWidth
                            className="me-1"
                          />
                          <span>+30 6979861969</span>
                        </li>
                        <li className="mb-1 mt-3">
                          <FontAwesomeIcon
                            icon={faMap}
                            fixedWidth
                            className="me-1"
                          />
                          <span>{t("AddressTxt")}</span>
                        </li>
                      </ul>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      className="footer"
      style={{
        marginTop: "1rem",
        padding: "1rem",
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
      }}
    >
      <Container fluid>
        <Row className="text-muted">
          <Col xs="6" className="text-start">
            <ul className="list-inline">
              <li className="list-inline-item">
                <span className="text-muted" href="#">
                  <b>{t("TelephoneTitle")}:</b> 6979861969
                </span>
              </li>
              <li className="list-inline-item">
                <span className="text-muted" href="#"></span>
              </li>
              <li className="list-inline-item">
                <span className="text-muted" href="#">
                  <b>{t("AddressTitle")}:</b> {t("AddressTxt")}
                </span>
              </li>
            </ul>
          </Col>
          <Col xs="6" className="text-end">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} -{" "}
              <span href="/" className="text-muted">
                TIMIKAT
              </span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

const Landing = () => {
  const { setTheme } = useTheme();
  const { setPosition, setBehavior } = useSidebar();
  const { setLayout } = useLayout();

  useEffect(() => {
    setTheme(THEME.DEFAULT);
    setPosition(SIDEBAR_POSITION.LEFT);
    setBehavior(SIDEBAR_BEHAVIOR.STICKY);
    setLayout(LAYOUT.FLUID);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Wrapper>
        <Main>
          <Navigation />
          <MainLayout />
          <Footer />
        </Main>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
