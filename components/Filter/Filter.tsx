import styled from "styled-components";

const years = [
  2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
];

const WrapperFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

export const Filter = ({ handleFilter }) => {
  return (
    <WrapperFilter>
      <label>
        <select
          name="filterYear"
          id="filterYear"
          onChange={(e) => handleFilter(e.target.value)}
        >
          {years.map((year, index) => (
            <option key={index}>{year}</option>
          ))}
        </select>
      </label>
    </WrapperFilter>
  );
};
