import PropTypes from 'prop-types';

import {
  UserProfile,
  UserDescription,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserLabel,
  UserQuantity,
  StatsItem
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <UserProfile>
    <UserDescription>

      <UserAvatar src={avatar} alt={username + 'avatar'} />
      <UserName>{username}</UserName>
      <UserTag> {'@' + tag}</UserTag>
      <UserLocation>{location}</UserLocation>

    </UserDescription>
    <UserStats>

      <StatsItem key={followers}>
        <UserLabel>Followers</UserLabel>
        <UserQuantity>{followers}</UserQuantity>
      </StatsItem>

      <StatsItem key={views}>
        <UserLabel>Views</UserLabel>
        <UserQuantity>{views}</UserQuantity>
      </StatsItem>

      <StatsItem key={likes}>
        <UserLabel>Likes</UserLabel>
        <UserQuantity>{likes}</UserQuantity>
      </StatsItem>

    </UserStats>
  </UserProfile>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
