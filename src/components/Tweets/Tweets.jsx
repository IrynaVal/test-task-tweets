// import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { MovieTitle } from './MoviesList.styled';

export const Tweets = ({ tweets }) => {
  // const location = useLocation();

  return (
    <ul>
      {tweets.length !== 0 &&
        tweets.map(({ id, user, avatar }) => {
          return (
            <li key={id}>
              <img src={avatar} alt={user} />
              <p>{user}</p>
              {/* <MovieTitle to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </MovieTitle> */}
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
