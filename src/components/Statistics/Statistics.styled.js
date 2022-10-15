import styled from 'styled-components';

export const SectionStatistics = styled.section`
  margin: 0 auto ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.background};
  width: ${p => p.theme.space[8]}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.card};

  color: ${p => p.theme.colors.white};

  text-align: center;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};

  overflow: hidden;
`;
export const Title = styled.h2`
  padding-top: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.accent};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  grid-auto-flow: row;
`;
export const ListItem = styled.li`
  padding: ${p => p.theme.space[3]}px 0;
  background-color: ${({ backgroundColor }) => backgroundColor()};
`;
export const Label = styled.span`
  margin-bottom: ${p => p.theme.space[2]}px;
  display: block;
`;
export const Percentage = styled.span`
  display: block;
`;
