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
`;
export const Menu = styled.div``;
export const Header = styled.div`
  width: 100%;
  height: 80px;
  background: #e14eca;
  display: flex;
  align-items: center;
`;
export const MenuList = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 500px) {
    display: none;
  }
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
  background: ${props => props.bgColor};
  padding: 50px 0;
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

  @media (max-width: 700px) {
    align-items: center;
  }
`;
export const Box1Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 300px;

  @media (max-width: 700px) {
    display: none;
  }
`;
export const ApresentationTitle = styled.h1`
  text-transform: uppercase;
  font-size: 30px;
  color: #fff;
`;
export const ApresentationDescription = styled.p`
  color: #eee;
  width: 320px;
  margin-top: 10px;
  font-size: 16px;
`;
export const MoreInfoBtn = styled.a`
  cursor: pointer;
  background: ${props => props.bgColor};
  border-radius: 15px;
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-top: 50px;
  transition: all 0.6s;
  text-decoration: none;

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
export const Box2Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  align-items: center;
`;
export const Box2Title = styled.h2`
  color: #fff;
`;
export const Services = styled.div`
  display: flex;

  @media (max-width: 840px) {
    flex-direction: column;
  }
`;
export const Box2Description = styled.p`
  color: #eee;
  width: 200px;
  margin: 10px 0;
  text-align: center;
`;
export const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 20px 40px;
  border-radius: 5px;
  margin: 20px;
  background: #171941;

  i {
    font-size: 30px;
    color: #fff;
  }
`;
export const ServiceName = styled.span`
  color: #fff;
  font-size: 20px;
  margin: 8px 0;
  font-weight: bold;
`;
export const ServiceDescription = styled.p`
  color: #fff;
  width: 150px;
  padding-bottom: 8px;
  text-align: center;
`;
