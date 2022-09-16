import styled from "styled-components";
import { IDataYear } from "../../interfaces/interfaces";

const CardStyle = styled.div`
  background-color: #c0ac67;
  height: auto;
  width: 90%;
  padding: 20px;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const Table: React.FC<{ data: IDataYear[] }> = ({ data }) => {
  return <CardStyle>teste</CardStyle>;
};

export default Table;
