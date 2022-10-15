import styled from 'styled-components';

export const ItemFriend = styled.li`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  box-shadow: ${p => p.theme.shadows.card};
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
export const FriendStatus = styled.span`
  width: ${p => p.theme.space[4]}px;
  height: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${({ isOnline }) => (isOnline ? 'red' : 'green')};
`;
export const FriendAvatar = styled.img`
  background-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.space[2]}px;
`;
