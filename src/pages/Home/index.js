import React from "react";
import './styles.css'
import Lottie from 'react-lottie';
import * as animation from '../../Animation/animation.json'
import {
  Body,
  Box1,
  Container,
  Header,
  IconLink,
  Icons,
  IconsList,
  ImageLateral,
  Menu,
  MenuFather,
  MenuLink,
  MenuList,
  MenuText,
  ImageLateral2,
} from "./styles";
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
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
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
        <Container className="containerMain" >
          <ImageLateral className="conteudoMain" >
         
          </ImageLateral>
          <ImageLateral2>
                <div className="apresentacao" >
                  <h1>Welcome</h1>
                  <p>No meio de tanta informação e da quantidade de</p>
                  <p>ferramentas que surgem todos os dias, você precisa de</p>
                  <p>alguém que te leve na direção certa.</p>
                  <div className="containerButton" >
                    <button type="submit">EMBARCAR NESSE FOGUETE</button>
                  </div>
                </div>
          </ImageLateral2>
        </Container>
      </Box1>
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
