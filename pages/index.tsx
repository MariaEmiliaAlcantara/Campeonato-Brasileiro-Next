import { useEffect, useState } from "react";
import Table from "../components/Table/Table";
import { CardArea } from "../components/CardArea/CardArea";
import { Filter } from "../components/Filter/Filter";
import { Header } from "../components/Header/Header";
import { IDataYear, IPartida } from "../interfaces/interfaces";

export default function Home() {
  const [filterYear, setFilterYear] = useState(2003);
  const [data, setData] = useState<IDataYear>();

  useEffect(() => {
    fetch(`http://localhost:3001/${filterYear}`).then((resp) =>
      resp
        .json()
        .then((data: IDataYear[]) => data[data.length - 1])
        .then((data) => setData(data))
    );
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/${filterYear}`).then((resp) =>
      resp
        .json()
        .then((data: IDataYear[]) => data[data.length - 1])
        .then((data) => setData(data))
    );
  }, [filterYear]);

  function dataProcessing(data: IDataYear) {
    if (data) {
      const partidas: IPartida[] = data.partidas;

      let array = [];

      for (const partida of partidas) {
        let dataObjectVisitante = {};
        let dataObjectMandante = {};
        dataObjectMandante["time"] = partida.mandante;
        dataObjectMandante["pontuacao"] = partida.pontuacao_geral_mandante;
        dataObjectVisitante["time"] = partida.visitante;
        dataObjectVisitante["pontuacao"] = partida.pontuacao_geral_visitante;

        array.push(dataObjectVisitante);
        array.push(dataObjectMandante);
      }
      return array;
    }
  }

  const dataProcessed = dataProcessing(data);

  const handleFilter = (filter: number) => {
    setFilterYear(filter);
  };

  return (
    <div>
      <Header />
      <Filter handleFilter={handleFilter} />
      <CardArea>
        <Table data={dataProcessed} />
      </CardArea>
    </div>
  );
}
