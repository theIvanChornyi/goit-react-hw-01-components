import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem';
import { FriendListStyled } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <FriendListStyled>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </FriendListStyled>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
