import React, { useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { animateScroll as scroll, Element, Events, Link } from "react-scroll";
import {
  ApresentationDescription,
  ApresentationTitle,
  Body,
  Box1,
  Box1Container,
  Box1Left,
  Box1Right,
  Box2,
  Box2Container,
  Box2Description,
  Box2Title,
  Box3,
  Box3Container,
  Box3Description,
  Box3Title,
  Box4,
  Box4Container,
  Box4Description,
  Box4Title,
  Box5,
  Box5Container,
  Box5Description,
  BtnMoreInfoService,
  Container,
  Header,
  IconLink,
  Icons,
  IconsList,
  Logo,
  Menu,
  MenuFather,
  MoreInfoBtn,
  MoreInfoBtn2,
  Service,
  Service2,
  ServiceDescription,
  ServiceDescription2,
  ServiceName,
  ServiceName2,
  Services,
  Services2
} from "./styles";

export default function Home() {
  useEffect(() => {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const services = [
    {
      icon: "fas fa-globe-europe",
      name: "Dev. Web",
      description:
        "Desenvolvemos seu site, em uma das melhores Stacks do mercado!"
    },
    {
      icon: "fas fa-mobile-alt",
      name: "Dev. Mobile",
      description:
        "Desenvolvimento de app mobile profissionais em React Native!"
    },
    {
      icon: "fas fa-desktop",
      name: "Softwares",
      description:
        "Soluções próprias para ajudar no crescimento do seu negócio!"
    }
  ];

  const services2 = [
    {
      icon: "fas fa-network-wired",
      name: "Node.js",
      description: "Lorem ipsum dolor sit amet consectetur."
    }
  ];
  const menuItens = [
    { id: 1, active: "active", name: "início" },
    { id: 2, active: "disable", name: "sobre" },
    { id: 3, active: "disable", name: "projetos" },
    { id: 4, active: "disable", name: "contato" }
  ];
  const iconsList = [
    {
      name: "fab fa-facebook-square",
      slug: "https://www.facebook.com/Weises-Of-Tecnology-110973727209355/"
    },
    {
      name: "fab fa-instagram",
      slug: "https://www.instagram.com/weises_of_technology/"
    }
  ];

  const colors = {
    "purple-dark": "#171941",
    "light-pink": "#ff79c6",
    "light-green": "#50fa7b",
    "dark-pink": "#e14eca",
    "light-blue": "#407aff",
    "other-white": "#f1efff",
    "dark-green": "#87cb06",
    white: "#fafafa",
    "white-blue": "#7ba1f7",
    "light-black": "#111116"
  };
  const bgColor = colors["white"];
  const menuColor = colors["light-blue"];

  return (
    <Body>
      <Header bgColor={menuColor}>
        <Container color={menuColor}>
          <MenuFather>
            <Menu>
              <Logo src={require("../../Animation/logo.png")} />
              <Navbar
                style={{
                  color: "#fff",
                  background: colors["light-blue"],
                  width: "100%"
                }}
                expand="lg"
              >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    {menuItens.map(item => (
                      <Nav.Link
                        style={{
                          color: "#fff",
                          transition: "all .6s",
                          textTransform: "uppercase",
                          fontSize: 14,
                          fontWeight: "bold"
                        }}
                        key={item.id}
                        onClick={() => scroll.scrollTo("800")}
                        className={item.active + " " + item.name}
                        href="#"
                      >
                        <Link
                          activeClass="active"
                          className={item.name}
                          to={item.name}
                          spy={true}
                          smooth={true}
                          offset={-120}
                          duration={500}
                        >
                          {item.name}
                        </Link>
                      </Nav.Link>
                    ))}
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Menu>
            <Icons>
              <IconsList>
                {iconsList.map(icon => (
                  <IconLink href={icon.slug}>
                    <li>
                      <i class={icon.name}></i>
                    </li>
                  </IconLink>
                ))}
              </IconsList>
            </Icons>
          </MenuFather>
        </Container>
      </Header>
      <Element name="início" className="início">
        <Box1 bgColor={colors["purple-dark"]}>
          <Container>
            <Box1Container>
              <Box1Left>
                <ApresentationTitle color={colors["white"]}>
                  as melhores soluções <br /> para o seu negócio !
                </ApresentationTitle>
                <ApresentationDescription color={colors["other-white"]}>
                  No meio de tanta informação e da quantidade de ferramentas que
                  surgem todos os dias, você precisa de alguém que te leve na
                  direção certa.
                </ApresentationDescription>
                <MoreInfoBtn
                  href="#"
                  hoverColor={colors["white-blue"]}
                  bgColor={colors["light-blue"]}
                >
                  Saiba Mais
                </MoreInfoBtn>
              </Box1Left>
              <Box1Right>
                <lottie-player
                  src="https://assets7.lottiefiles.com/packages/lf20_QUXmIu.json"
                  background="#171941"
                  speed="1"
                  style={{ width: 350, height: 300 }}
                  loop
                  autoplay
                ></lottie-player>
              </Box1Right>
            </Box1Container>
          </Container>
        </Box1>
      </Element>
      <Element name="sobre" className="sobre">
        <Box2 bgColor={bgColor}>
          <Container>
            <Box2Container>
              <Box2Title>Nossos Serviços</Box2Title>
              <Box2Description>
                Conheça um pouco dos serviços oferecidos pela Weise's Team!
              </Box2Description>
              <Services>
                {services.map(service => (
                  <Service bgColor={colors["purple-dark"]}>
                    <i class={service.icon}></i>
                    <ServiceName>{service.name}</ServiceName>
                    <ServiceDescription>
                      {service.description}
                    </ServiceDescription>
                  </Service>
                ))}
              </Services>
            </Box2Container>
          </Container>
        </Box2>
      </Element>
      <Box3 bgColor={colors["purple-dark"]}>
        <Element name="projetos" className="projetos">
          <Container>
            <Box3Container>
              <Box3Title> Softwares </Box3Title>
              <Box3Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Box3Description>
              <Services2>
                <lottie-player
                  src="https://assets6.lottiefiles.com/packages/lf20_ETrXRU.json"
                  background="#171941"
                  speed="1"
                  style={{ width: 350, height: 300 }}
                  loop
                  autoplay
                ></lottie-player>
                {services2.map(service2 => (
                  <Service2>
                    <i class={service2.icon}></i>
                    <ServiceName2>HORIZON</ServiceName2>
                    <ServiceDescription2>
                      Software para gestão de restaurantes.
                    </ServiceDescription2>
                    <BtnMoreInfoService>Login</BtnMoreInfoService>
                    <BtnMoreInfoService>Saiba Mais</BtnMoreInfoService>
                  </Service2>
                ))}
              </Services2>
            </Box3Container>
          </Container>
        </Element>
      </Box3>
      <Element name="contato" className="contato">
        <Box4 bgColor={colors["white"]}>
          <Box4Container>
            <Box4Title> Contato </Box4Title>
            <Box4Description>
              Lorem ipsum dolor sit amet consectetur.
            </Box4Description>
            <MoreInfoBtn2
              hoverColor={colors["light-blue"]}
              bgColor={colors["purple-dark"]}
            >
              Contato
            </MoreInfoBtn2>
          </Box4Container>
        </Box4>
      </Element>
      <Box5 bgColor={menuColor}>
        <Box5Container>
          <Box5Description>
            {" "}
            Weise's Team © 2020 - Todos os direitos reservados{" "}
          </Box5Description>
        </Box5Container>
      </Box5>
    </Body>
  );
}
