import styled from "styled-components";

const years = [
  2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
];

const WrapperFilter = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #242f37;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Button = styled.button`
  font-size: 16px;
  color: #94be1f;
  background-color: transparent;
  border: none;
  width: 80%;
  height: 35px;
  border-top: 1px solid rgb(112, 112, 112);
  cursor: pointer;
  transition: all 0.3s;

  &:last-child {
    border-bottom: 1px solid rgb(112, 112, 112);
  }

  &:hover {
    font-size: 20px;
  }
`;

const SelectedYear = styled.div`
  font-size: 16px;
  color: white;
  margin-bottom: 1rem;
`;

export const Filter = ({ handleFilter, filterYear }) => {
  return (
    <WrapperFilter>
      <ButtonsDiv>
        <SelectedYear>Campeonato de {filterYear}</SelectedYear>
        {years.map((year) => (
          <Button
            key={year}
            onClick={() => {
              handleFilter(year);
            }}
          >
            {year}
          </Button>
        ))}
      </ButtonsDiv>
    </WrapperFilter>
  );
};
