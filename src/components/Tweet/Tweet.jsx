import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Card, ImgBox, TextBox, Text, ImgEllipse } from './Tweet.styled';
import { TweetButton } from 'components/TweetButton/TweetButton';
import { updateUser } from 'services/getUsers';

export const Tweet = ({ item: { id, user, avatar, followers, tweets } }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [followersNumber, setFollowersNumber] = useState(followers);
  const [followingTweets, setFollowingTweets] = useState(() => {
    return JSON.parse(window.localStorage.getItem('following')) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('following', JSON.stringify(followingTweets));
  }, [followingTweets]);

  const toggleIsFollowed = id => {
    if (!isFollowed) {
      setIsFollowed(true);

      setFollowersNumber(prevState => prevState + 1);
      updateUser(id, followersNumber + 1)
        .then(data => {
          setFollowingTweets(prevState => [...prevState, data]);
          // setFollowingTweets([data]);
          console.log(followingTweets);
        })
        .catch(error => {
          toast.error('Sorry, error happened.');
        });
    } else {
      setIsFollowed(false);
      setFollowersNumber(prevState => prevState - 1);
      updateUser(id, followersNumber - 1)
        .then(data => {
          setFollowingTweets(
            followingTweets.filter(tweet => tweet.id !== data.id)
          );
          // followingTweets = newArray;

          console.log(data);
        })
        .catch(error => {
          toast.error('Sorry, error happened.');
        });
    }
  };

  return (
    <Card key={id} isFollowed={isFollowed}>
      <ImgEllipse>
        <ImgBox>
          <img src={avatar} alt={user} />
        </ImgBox>
      </ImgEllipse>
      <TextBox>
        <Text>{tweets.toLocaleString('en-IN')} tweets</Text>
        <Text>{followersNumber.toLocaleString('en-IN')} followers</Text>
      </TextBox>

      <TweetButton
        text={isFollowed ? 'following' : 'follow'}
        isActive={isFollowed}
        onClick={() => toggleIsFollowed(id)}
      />
    </Card>
  );
};
