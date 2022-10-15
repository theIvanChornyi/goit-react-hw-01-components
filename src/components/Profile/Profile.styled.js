import styled from 'styled-components';

export const UserProfile = styled.div`
  width: ${p => p.theme.space[8]}px;
  margin: 0 auto;
  padding-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.card};

  background-color: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.text};

  text-align: center;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.body};
  overflow: hidden;
`;
export const UserAvatar = styled.img`
  background-color: ${p => p.theme.colors.primary};

  width: ${p => p.theme.space[7]}px;
  height: ${p => p.theme.space[7]}px;
  border-radius: ${p => p.theme.radii.round};
  margin: 0 auto ${p => p.theme.space[4]}px; ;
`;
export const UserName = styled.p`
  color: ${p => p.theme.colors.accent};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.regular};
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const UserTag = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const UserLocation = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const UserStats = styled.ul`
  display: flex;
  background-color: ${p => p.theme.colors.primary};
  border-top: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
`;

export const StatsItem = styled.li`
  padding: ${p => p.theme.space[4]}px 0;
  :not(:first-child) {
    border-left: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  }
  width: 33%;
`;

export const UserLabel = styled.span`
  display: block;
  margin-bottom: 5px;
`;
export const UserQuantity = styled.span`
  display: block;
  color: ${p => p.theme.colors.accent};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
