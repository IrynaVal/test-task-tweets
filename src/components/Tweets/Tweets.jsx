// import { useState } from 'react';
import { Tweet } from 'components/Tweet/Tweet';
import { TweetsList } from './Tweets.styled';

export const Tweets = ({ tweets }) => {
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

/* {list.map(user => {
          const followed = followedId.includes(user.id) ? true : false;

          return (
            <TweetCard
              key={user.id}
              userObj={user}
              setFollowedUsers={setFollowedUsers}
              followed={followed}
            /> */
