import { Tweet } from 'components/Tweet/Tweet';
import { TweetsList } from './Tweets.styled';
// import { useEffect } from 'react';

export const Tweets = ({ tweets }) => {
  console.log(tweets);

  // useEffect(() => {
  //     JSON.parse(window.localStorage.getItem('following')) ?? [];
  //   tweets.map(tweet => (isFollowed = true));
  // }, []);

  return (
    <TweetsList>
      {tweets.length !== 0 &&
        tweets.map(tweet => {
          return <Tweet item={tweet} key={tweet.id} />;
        })}
    </TweetsList>
  );
};
