import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Card, ImgBox, TextBox, Text, ImgEllipse } from './Tweet.styled';
import { TweetButton } from 'components/TweetButton/TweetButton';
import { updateUser } from 'services/getUsers';

export const Tweet = ({ item: { id, user, avatar, followers, tweets } }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [followersNumber, setFollowersNumber] = useState(followers);

  // useEffect(() => {
  //   window.localStorage.setItem('following', JSON.stringify(isFollowed));
  // }, [isFollowed]);

  // useEffect(() => {
  //   const followersData = {
  //     id: id,
  //     isFollowed,
  //   };
  //   return followersData;
  //   let array = [];
  //   array.push(followersData);
  //   window.localStorage.setItem('isFollowed', JSON.stringify(array));
  // }, [id, isFollowed]);
  let localStorageArray = [];
  const saveToLocalStorage = user => {
    if (localStorageArray.includes(user)) {
      return;
    }
    localStorageArray.push(user);

    window.localStorage.setItem('following', JSON.stringify(localStorageArray));
  };

  const toggleIsFollowed = id => {
    if (!isFollowed) {
      setIsFollowed(true);

      setFollowersNumber(prevState => prevState + 1);
      updateUser(id, followersNumber + 1)
        .then(data => {
          // window.localStorage.setItem('following', JSON.stringify(data));
          saveToLocalStorage(data);
          console.log(data);
        })
        .catch(error => {
          toast.error('Sorry, error happened.');
        });
    } else {
      setIsFollowed(false);
      setFollowersNumber(prevState => prevState - 1);
      updateUser(id, followersNumber - 1)
        .then(data => {
          window.localStorage.removeItem('following');
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
