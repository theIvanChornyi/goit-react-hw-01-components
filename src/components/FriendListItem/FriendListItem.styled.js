import styled from 'styled-components';

export const ItemFriend = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.12), 0px 0px 2px rgba(0, 0, 0, 0.14),
    0px 0px 2px rgba(0, 0, 0, 0.2);
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const FriendStatus = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'red' : 'green')};
`;
export const FriendAvatar = styled.img`
  background-color: rgb(183, 250, 228);
  border-radius: 10px;
  padding: 5px;
`;
export const FriendName = styled.p``;
