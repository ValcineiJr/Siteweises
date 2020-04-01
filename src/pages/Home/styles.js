import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  min-width: 100%;
  height: 100%;
  font-family: "Open Sans", sans-serif;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  background: ${props => props.color};
  margin: 0 auto;
  font-family: "Open Sans", sans-serif;
`;
export const Menu = styled.div`
  display: flex;
  flex: 1;
  text-align: center;
`;
export const Header = styled.div`
  width: 100%;
  min-height: 80px;
  background: ${props => props.bgColor};
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1;
`;
export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  max-width: 980px;
`;
export const MenuLink = styled.a`
  padding: 10px;
  transition: 0.6s;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: #fff;
  }

  .active {
    color: #fff;
    border-bottom: 3px solid #fff;
  }
  @media (max-width: 695px) {
    display: none;
  }
`;
export const MenuText = styled.span`
  font-weight: bold;
  padding-bottom: 5px;
  font-size: 14px;
  &:hover {
    color: #fff;
    border-bottom: 3px solid #fff;
  }
`;
export const Icons = styled.div``;
export const IconsList = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 980px) {
    padding: 10px;
  }
`;
export const IconLink = styled.a`
  margin: 8px;
  padding: 2px;
  i {
    font-size: 22px;
    color: #fff;
  }
`;
export const Icon = styled.img``;
export const MenuFather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Box1 = styled.div`
  margin-top: 80px;
  background: ${props => props.bgColor};
  padding: 70px 0;
`;
export const Box1Container = styled.div`
  display: flex;
`;
export const Box1Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 12px;
  height: 300px;

  @media (max-width: 980px) {
    align-items: center;
  }
`;
export const Box1Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 300px;
  z-index: 0;

  @media (max-width: 700px) {
    display: none;
  }
`;
export const ApresentationTitle = styled.h1`
  text-transform: uppercase;
  font-size: 30px;
  color: ${props => props.color};

  @media (max-width: 980px) {
    text-align: center;
  }
`;
export const ApresentationDescription = styled.p`
  color: ${props => props.color};
  width: 320px;
  margin-top: 10px;
  font-size: 16px;

  @media (max-width: 980px) {
    text-align: center;
  }
`;
export const MoreInfoBtn = styled.a`
  cursor: pointer;
  background: ${props => props.bgColor};
  border-radius: 3px;
  width: 170px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 10px;
  margin-top: 50px;
  transition: all 0.6s;
  text-decoration: none !important;

  &:hover {
    color: #eee;
    background: ${props => props.hoverColor};
  }
`;
export const Box1Image = styled.img`
  height: 300px;
  width: 350px;
`;
export const Box2 = styled.div`
  background: ${props => props.bgColor};
`;

export const Box2Title = styled.h2`
  color: #253138;
  font-size: 34px;
`;
export const Services = styled.div`
  display: flex;

  @media (max-width: 840px) {
    flex-direction: column;
  }
`;
export const Box2Description = styled.p`
  color: #222;
  font-weight: bold;
  width: 200px;
  margin: 10px 0;
  text-align: center;
`;
export const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 5px 40px;
  border-radius: 5px;
  margin: 20px;

  background: ${props => props.bgColor};
  i {
    font-size: 30px;
    color: #407aff;
  }
`;
export const ServiceName = styled.span`
  color: #fff;
  font-size: 20px;
  margin: 8px 0;
  font-weight: bold;
`;
export const ServiceDescription = styled.p`
  color: #eee;
  font-size: 14px;
  width: 150px;
  padding-bottom: 8px;
  text-align: center;
`;
export const Box3 = styled.div`
  background: ${props => props.bgColor};
`;
export const Box3Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  align-items: center;
`;
export const Box3Title = styled.h2`
  color: #fff;
  font-size: 34px;
`;
export const Box3Description = styled.p`
  color: #eee;
  margin: 10px 0;
  text-align: center;

  @media (max-width: 414px) {
    font-size: 14px;
  }
`;
export const Services2 = styled.div`
  display: flex;
  @media (max-width: 840px) {
    flex-direction: column;
  }
`;
export const Service2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 20px 40px;
  border-radius: 5px;
  margin: 20px;
  background: #fafafa;

  i {
    font-size: 30px;
    color: #03cd76;
  }
`;
export const ServiceName2 = styled.span`
  color: #171941;
  font-size: 20px;
  margin: 8px 0;
  font-weight: bold;
`;
export const ServiceDescription2 = styled.p`
  color: #171941;
  font-size: 14px;
  width: 150px;
  padding-bottom: 8px;
  text-align: center;
`;
export const Box4 = styled.div`
  background: ${props => props.bgColor};
`;

export const Box4Title = styled.h2`
  color: #171941;
  font-size: 34px;
`;
export const Box4Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  align-items: center;
`;
export const Box4Description = styled.p`
  color: #171941;
  width: 200px;
  margin: 10px 0;
  text-align: center;
`;
export const MoreInfoBtn2 = styled.a`
  cursor: pointer;
  background: ${props => props.bgColor};
  border-radius: 3px;
  width: 170px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff !important;
  padding: 10px;
  margin-top: 50px;
  transition: all 0.6s;
  text-decoration: none;

  &:hover {
    color: #eee;
    background: ${props => props.hoverColor};
  }
`;
export const Box5 = styled.div`
  background: ${props => props.bgColor};
`;

export const BtnMoreInfoService = styled.a`
  background: #171941;
  border: 0;
  text-decoration: none !important;
  outline: none;
  font-size: 14px;
  padding: 10px;
  margin-top: 10px;
  font-weight: bold;
  width: 170px;
  border-radius: 3px;
  color: #fff !important;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;
export const Logo = styled.img`
  width: 100px;
  height: 50px;
  @media (max-width: 695px) {
    display: none;
  }
`;

export const Box5Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  align-items: center;
  font-family: "Open Sans", sans-serif;
`;
export const Box2Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 0;
  align-items: center;
  font-family: "Open Sans", sans-serif;
`;

export const Box5Description = styled.p`
  color: #ffff;
  width: 200px;
  margin: 10px 0;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
`;

export const menuToggle = styled.div`
  width: 100px;
  height: 50px;
  background-color: #fff;
  margin-left: 50px;
`;
