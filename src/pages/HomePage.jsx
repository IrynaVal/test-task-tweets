// import { useState, useEffect } from 'react';
// import { ColorRing } from 'react-loader-spinner';
// import { MoviesList } from 'components/MoviesList/MoviesList';
// import { getFilms } from '../services/getFilms';

const Home = () => {
  //   const [tweets, setTweets] = useState([]);
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     setLoading(true);
  //     getFilms()
  //       .then(data => {
  //         // console.log(data);
  //         // console.log(data.results);
  //         if (data.results.length === 0) {
  //           return Promise.reject(new Error());
  //         }
  //         setFilms(data.results);
  //       })
  //       .catch(error => {
  //         console.log('error');
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }, []);

  return (
    <>
      <h2>Welcome!</h2>
      {/* {films.length !== 0 && <MoviesList films={films} />}
      {loading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )} */}
    </>
  );
};

export default Home;
