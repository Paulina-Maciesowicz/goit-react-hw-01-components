import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.profile__container}>
        <img className={css.profile__picture} src={avatar} alt="User avatar" />
        <div className={css.information}>
          <p className={css.information__username}> {username}</p>
          <p className={css.information__tag}>@{tag}</p>
          <p className={css.information__location}> {location}</p>
        </div>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.stats__label}>followers {stats.followers}</span>
          <span className={css.stats__quantity}></span>
        </li>
        <li>
          <span className={css.stats__label}>views {stats.views}</span>
          <span className={css.stats__quantity}></span>
        </li>
        <li>
          <span className={css.stats__label}>likes {stats.likes}</span>
          <span className={css.stats__quantity}></span>
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
