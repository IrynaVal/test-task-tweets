import { useState, useEffect } from 'react';
// import { Toaster, toast } from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';
// import { Searchbar } from '../components/Searchbar/Searchbar';
import { getUsers } from '../services/getUsers';
// import { MoviesList } from 'components/MoviesList/MoviesList';
// import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { BackLink } from 'components/BackLink/BackLink';
import { Tweets } from 'components/Tweets/Tweets';
import { Button } from 'components/Button/Button';

const TweetsPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [tweetsPerPage] = useState(3);

  useEffect(() => {
    setLoading(true);
    getUsers(page, tweetsPerPage)
      .then(data => {
        // console.log(data);
        if (data.length === 0) {
          return Promise.reject(new Error());
        }

        setTweets(prevState => {
          console.log(prevState);
          console.log(data);
          return [...prevState, ...data];
        });

        // setTweets(data);
      })
      .catch(error => {
        // toast.error(
        //   'Sorry, there are no movies matching your search query. Please try again.'
        // );
        console.log('error');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, tweetsPerPage]);

  const handleLoad = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <BackLink to={backLinkLocationRef.current}>Back</BackLink>
      {tweets.length !== 0 && <Tweets tweets={tweets} />}
      {loading && (
        // <p>Loading...</p>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{ marginLeft: 'auto', marginRight: 'auto' }}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
      {tweets.length !== 0 && !loading && <Button onClick={handleLoad} />}
    </>
  );
};
export default TweetsPage;
