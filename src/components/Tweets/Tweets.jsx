import { Tweet } from 'components/Tweet/Tweet';
import { TweetsList } from './Tweets.styled';

export const Tweets = ({ tweets, setFollowingTweets, followingTweets }) => {
  const idArray = followingTweets.map(({ id }) => {
    let array = [];
    array.push(id);
    return array;
  });

  return (
    <TweetsList>
      {tweets.length !== 0 &&
        tweets.map(tweet => {
          const followed = idArray.includes(tweet.id) ? true : false;

          return (
            <Tweet
              item={tweet}
              key={tweet.id}
              setFollowingTweets={setFollowingTweets}
              followed={followed}
            />
          );
        })}
    </TweetsList>
  );
};
