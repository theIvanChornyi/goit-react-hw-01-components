import styled from 'styled-components';

export const SectionStatistics = styled.section`
  margin: 0 auto 25px;
  background-color: white;
  width: 250px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  color: white;

  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: ${19 / 16};

  overflow: hidden;
`;
export const Title = styled.h2`
  padding-top: 25px;

  color: #9a91c7;
  font-weight: 500;
  margin-bottom: 25px;
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  grid-auto-flow: row;
`;
export const ListItem = styled.li`
  padding: 10px 0;
  background-color: ${({ backgroundColor }) => backgroundColor()};
`;
export const Label = styled.span`
  margin-bottom: 5px;
  display: block;
`;
export const Percentage = styled.span`
  display: block;
`;
