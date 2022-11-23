import styled from "styled-components";

const WrapperCards = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 100%;
  padding: 10px 0;
`;

export const CardArea = ({ children }) => {
  return <WrapperCards>{children}</WrapperCards>;
};
