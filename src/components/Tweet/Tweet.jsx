import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Card, ImgBox, TextBox, Text, ImgEllipse } from './Tweet.styled';
import { TweetButton } from 'components/TweetButton/TweetButton';
import { updateUser } from 'services/getUsers';

export const Tweet = ({ item, setFollowingTweets, followed }) => {
  const [isFollowed, setIsFollowed] = useState(followed);
  const [followersNumber, setFollowersNumber] = useState(item.followers);

  // useEffect(() => {
  //    idArray.map(tweet => {
  //   if (idArray.includes([item.id])) {
  //     setIsFollowed(true);
  //   }
  //  return;
  // }, [idArray, item.id]);

  const toggleIsFollowed = id => {
    if (!isFollowed) {
      setIsFollowed(true);
      setFollowersNumber(prevState => prevState + 1);
      updateUser(id, followersNumber + 1)
        .then(data => {
          setFollowingTweets(prevState => [...prevState, data]);
        })
        .catch(error => {
          toast.error('Sorry, error happened.');
        });
    } else {
      setIsFollowed(false);
      setFollowersNumber(prevState => prevState - 1);
      updateUser(id, followersNumber - 1)
        .then(data => {
          setFollowingTweets(prevState =>
            prevState.filter(tweet => tweet.id !== data.id)
          );
        })
        .catch(error => {
          toast.error('Sorry, error happened.');
        });
    }
  };

  return (
    <Card key={item.id} isFollowed={isFollowed}>
      <ImgEllipse>
        <ImgBox>
          <img src={item.avatar} alt={item.user} />
        </ImgBox>
      </ImgEllipse>
      <TextBox>
        <Text>{item.tweets.toLocaleString('en-IN')} tweets</Text>
        <Text>{followersNumber.toLocaleString('en-IN')} followers</Text>
      </TextBox>

      <TweetButton
        text={isFollowed ? 'following' : 'follow'}
        isActive={isFollowed}
        onClick={() => toggleIsFollowed(item.id)}
      />
    </Card>
  );
};
