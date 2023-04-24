// import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { MovieTitle } from './MoviesList.styled';

export const Tweets = ({ tweets }) => {
  // const location = useLocation();

  return (
    <ul>
      {tweets.length !== 0 &&
        tweets.map(({ id, user, avatar, followers, tweets }) => {
          const tweetsText = 'tweets';
          const followersText = 'followers';
          const buttonText = 'follow';
          return (
            <li key={id}>
              <img src={avatar} alt={user} />
              <p>
                {tweets} {tweetsText.toUpperCase()}
              </p>
              <p>
                {followers} {followersText.toUpperCase()}
              </p>
              <button type="button">{buttonText.toUpperCase()}</button>
              {/* <Link to={`${product.id}`} state={{ from: location }}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <ProductName>{product.name}</ProductName>
          </Link> */}
            </li>
          );
        })}
    </ul>
  );
};

// MoviesList.propTypes = {
//   films: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
