import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../Animation/17899-hand-sanitizer.json";
import {
  ApresentationDescription,
  ApresentationTitle,
  Body,
  Box1,
  Box1Left,
  Box1Right,
  Container,
  Header,
  IconLink,
  Icons,
  IconsList,
  Menu,
  MenuFather,
  MenuLink,
  MenuList,
  MenuText,
  MoreInfoBtn
} from "./styles";
import "./styles.css";
export default function Home() {
  const menuItens = [
    { id: 0, active: "active", name: "início" },
    { id: 1, active: "disable", name: "sobre" },
    { id: 2, active: "disable", name: "projetos" },
    { id: 3, active: "disable", name: "contato" }
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
    "light-blue": "#525f7f"
  };

  function activeItem(id) {
    menuItens.map(item => {
      document.getElementById(item.name).classList.remove("active");
      document.getElementById(id).classList.add("active");
    });
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Body>
      <Header>
        <Container color={colors["dark-pink"]}>
          <MenuFather>
            <Menu>
              <MenuList>
                {menuItens.map(item => (
                  <MenuLink key={item.id} href="#">
                    <li>
                      <MenuText
                        id={item.name}
                        onClick={() => activeItem(item.name)}
                        className={item.active}
                      >
                        {item.name}
                      </MenuText>
                    </li>
                  </MenuLink>
                ))}
              </MenuList>
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
      <Box1 color={colors["purple-dark"]}>
        <Container className="containerMain">
          <Box1Left className="conteudoMain">
            <ApresentationTitle>as melhores soluções</ApresentationTitle>
            <ApresentationDescription>
              No meio de tanta informação e da quantidade de ferramentas que
              surgem todos os dias, você precisa de alguém que te leve na
              direção certa.
            </ApresentationDescription>
            <MoreInfoBtn
              href="#"
              hoverColor={colors["light-pink"]}
              bgColor={colors["dark-pink"]}
            >
              Saiba Mais
            </MoreInfoBtn>
          </Box1Left>
          <Box1Right>
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_xRmNN8.json"
              background="#171941"
              speed="1"
              style={{ width: 350, height: 300 }}
              loop
              autoplay
            ></lottie-player>
          </Box1Right>
        </Container>
      </Box1>
      <Lottie
        options={defaultOptions}
        height={300}
        width={400}
        isStopped={false}
        isPaused={false}
      />
    </Body>
  );
}

const styles = {
  body: {
    display: "flex",
    background: "#171941",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 11,
    width: "100%",
    height: "100%"
  },
  container: {
    width: "100%",
    maxWidth: 1000,
    background: "green",
    margin: "0 auto"
  },
  menu: {},
  icons: {},
  header: {
    height: 80,
    flex: 1,
    background: "red"
  },
  mainBackground: {},
  mainParagrafo: {},
  menuList: { display: "flex", listStyle: "none" },
  menuLink: { padding: 10, color: "blue" }
};
