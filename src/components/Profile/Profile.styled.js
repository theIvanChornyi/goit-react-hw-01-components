import styled from 'styled-components';

export const UserProfile = styled.div`
  width: 250px;
  margin: 0 auto;
  padding-top: 25px;
  margin-bottom: 25px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  background-color: white;
  color: #757575;

  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: ${19 / 16};
`;
export const UserDescription = styled.div``;
export const UserAvatar = styled.img`
  background-color: rgb(183, 250, 228);

  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 25px;
`;
export const UserName = styled.p`
  color: #9a91c7;
  font-weight: 500;
  font-size: 19px;
  margin-bottom: 10px;
`;
export const UserTag = styled.p`
  margin-bottom: 10px;
`;
export const UserLocation = styled.p`
  margin-bottom: 10px;
`;
export const UserStats = styled.ul`
  display: flex;
  background-color: rgb(183, 250, 228);
  border-top: 2px solid #9a91c7;
`;

export const StatsItem = styled.li`
  padding: 25px 0;
  :not(:first-child) {
    border-left: 2px solid #9a91c7;
  }
  width: 33%;
`;

export const UserLabel = styled.span`
  display: block;
  margin-bottom: 5px;
`;
export const UserQuantity = styled.span`
  display: block;
  color: #9a91c7;
  font-weight: 500;
`;
