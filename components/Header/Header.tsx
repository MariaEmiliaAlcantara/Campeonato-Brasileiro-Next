import styled from "styled-components";
import { SoccerBall } from "phosphor-react";

const HeaderMain = styled.div`
  background-color: #94be1f;
  color: white;
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 0;
  padding-left: 50px;
`;

const TitleLogo = styled.h1`
  font-size: 28px;
  font-weight: bolder;
`;

export const Header = () => {
  return (
    <HeaderMain>
      <SoccerBall size={40} />
      <TitleLogo>Campeonato Brasileiro</TitleLogo>
    </HeaderMain>
  );
};
