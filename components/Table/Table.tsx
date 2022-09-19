import styled from "styled-components";
import { IDataProcessed } from "../../interfaces/interfaces";

const TableWrapper = styled.table`
  width: 50vw;
  text-align: center;
`;

const Table: React.FC<{ data: IDataProcessed[] }> = ({ data }) => {
  return (
    <TableWrapper>
      <thead>
        <tr>
          <th>Colocação</th>
          <th>Time</th>
          <th>P</th>
          <th>V</th>
          <th>E</th>
          <th>D</th>
          <th>GP</th>
          <th>GC</th>
          <th>S</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data
            .sort((a, b) => b.pontuacao.total_pontos - a.pontuacao.total_pontos)
            .map((time, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{time.time}</td>
                  <td>{time.pontuacao.total_pontos}</td>
                  <td>{time.pontuacao.total_vitorias}</td>
                  <td>{time.pontuacao.total_empates}</td>
                  <td>{time.pontuacao.total_derrotas}</td>
                  <td>{time.pontuacao.total_gols_marcados}</td>
                  <td>{time.pontuacao.total_gols_sofridos}</td>
                  <td>
                    {time.pontuacao.total_gols_marcados -
                      time.pontuacao.total_gols_sofridos}
                  </td>
                </tr>
              );
            })}
      </tbody>
    </TableWrapper>
  );
};

export default Table;
