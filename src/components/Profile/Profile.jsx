import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <img className={css.profile__picture} src={avatar} alt="User avatar" />
      <div className={css.information}>
        <p className={css.information__username}> {username}</p>
        <p className={css.information__tag}>@{tag}</p>
        <p className={css.information__location}> {location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats__elem}>
          <span className={css.quantity}>followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.stats__elem}>
          <span className={css.quantity}>views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.stats__elem}>
          <span className={css.quantity}>likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
