import styled from 'styled-components';

export const FriendListStyled = styled.ul`
  width: ${p => p.theme.space[8]}px;
  margin: 0 auto ${p => p.theme.space[4]}px;
  background-color: transparent;
  color: ${p => p.theme.colors.accent};

  text-align: center;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
`;
