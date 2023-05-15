export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <p class="name"> {username}</p>
        <p class="tag"> {tag}</p>
        <p class="location"> {location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">followers {stats.followers}</span>
          <span class="quantity"></span>
        </li>
        <li>
          <span class="label">views {stats.views}</span>
          <span class="quantity"></span>
        </li>
        <li>
          <span class="label">likes {stats.likes}</span>
          <span class="quantity"></span>
        </li>
      </ul>
    </div>
  );
};
