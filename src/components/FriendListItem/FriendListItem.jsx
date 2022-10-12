import PropTypes from 'prop-types';

import {ItemFriend,FriendStatus,FriendAvatar,FriendName } from './FriendListItem.styled';

export const FriendListItem = ({avatar, name, isOnline}) => (
  <ItemFriend >
    <FriendStatus isOnline={isOnline}></FriendStatus>
    <FriendAvatar src={avatar} alt={ name + " avatar"} width="48" />
    <FriendName>{ name }</FriendName>
  </ItemFriend>
);

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}