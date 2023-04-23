// import { useState, useEffect } from 'react';
// import { Toaster, toast } from 'react-hot-toast';
// import { ColorRing } from 'react-loader-spinner';
// import { Searchbar } from '../components/Searchbar/Searchbar';
// import { getFilmByQuery } from '../services/getFilms';
// import { MoviesList } from 'components/MoviesList/MoviesList';
// import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { BackLink } from 'components/BackLink/BackLink';
import { Tweets } from 'components/Tweets/Tweets';

const Movies = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/tweets');
  //   const [searchParams] = useSearchParams();
  //   const [searchQuery, setSearchQuery] = useState(
  //     searchParams.get('query') ?? ''
  //   );
  //   const [films, setFilms] = useState([]);
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     if (!searchQuery) {
  //       return;
  //     }

  //     setLoading(true);
  //     getFilmByQuery(searchQuery)
  //       .then(data => {
  //         // console.log(data.results);
  //         if (data.results.length === 0) {
  //           return Promise.reject(new Error());
  //         }
  //         setFilms(data.results);
  //       })
  //       .catch(error => {
  //         toast.error(
  //           'Sorry, there are no movies matching your search query. Please try again.'
  //         );
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   }, [searchQuery]);

  //   const formSubmitHandler = searchQuery => {
  //     setSearchQuery(searchQuery.trim());
  //     setFilms([]);
  //   };

  return (
    <>
      <BackLink to={backLinkLocationRef.current}>Back</BackLink>
      <Tweets />
      {/* <p>Tweet</p> */}
      {/* <Toaster position="top-right" />
      <Searchbar onSubmit={formSubmitHandler} />
      {films.length !== 0 && <MoviesList films={films} />}
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
export default Movies;
