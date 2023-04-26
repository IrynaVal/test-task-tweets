import { useState } from 'react';
import { Tweet } from 'components/Tweet/Tweet';
import { TweetsList } from './Tweets.styled';

export const Tweets = ({ tweets }) => {
  const [followingTweets, setFollowingTweets] = useState(() => {
    return JSON.parse(window.localStorage.getItem('following')) ?? [];
  });

  console.log(tweets);

  return (
    <TweetsList>
      {tweets.length !== 0 &&
        tweets.map(tweet => {
          return <Tweet item={tweet} key={tweet.id} />;
        })}
    </TweetsList>
  );
};
