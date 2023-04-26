import { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';
import { getUsers } from '../services/getUsers';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { BackLink } from 'components/BackLink/BackLink';
import { Tweets } from 'components/Tweets/Tweets';
import { LoadButton } from 'components/LoadButton/LoadButton';

const TweetsPage = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [tweetsPerPage] = useState(3);
  const [followingTweets, setFollowingTweets] = useState(() => {
    return JSON.parse(window.localStorage.getItem('following')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('following', JSON.stringify(followingTweets));
  }, [followingTweets]);

  useEffect(() => {
    setLoading(true);
    getUsers(page, tweetsPerPage)
      .then(data => {
        if (data.length === 0) {
          return Promise.reject(new Error());
        }

        setTweets(prevState => {
          return [...prevState, ...data];
        });
      })
      .catch(error => {
        toast.error('Sorry, error happened.');
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
      {tweets.length !== 0 && (
        <Tweets
          tweets={tweets}
          setFollowingTweets={setFollowingTweets}
          followingTweets={followingTweets}
        />
      )}
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
      )}
      {tweets.length !== 0 && !loading && <LoadButton onClick={handleLoad} />}
      <Toaster />
    </>
  );
};
export default TweetsPage;
