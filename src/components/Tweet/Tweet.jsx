import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Card, ImgBox, TextBox, Text } from './Tweet.styled';
import { TweetButton } from 'components/TweetButton/TweetButton';
import { updateUser } from 'services/getUsers';

export const Tweet = ({ item: { id, user, avatar, followers, tweets } }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const [followersNumber, setFollowersNumber] = useState(followers);
  //   const [followersNumber, setFollowersNumber] = useState(() => {
  //     const parsedData = JSON.parse(window.localStorage.getItem('followersData'));
  //     return parsedData.followers ?? [];
  //   });
  //   const [isFollowed, setIsFollowed] = useState(() => {
  //     return JSON.parse(window.localStorage.getItem('isFollowed') ?? 'false');
  //   });
  //   useEffect(() => {
  //     window.localStorage.setItem('isFollowed', JSON.stringify(isFollowed));
  //   }, [isFollowed]);
  // })

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

  // const saveToLocalStorage = item => {
  //   let localStorageArray = [];
  // const followersData = {
  //   id: id,
  //   isFollowed,
  // };
  // if (localStorageArray.includes(followersData.id)) {
  //   return;
  // }
  //   localStorageArray.push(item);

  //   window.localStorage.setItem(
  //     'isFollowed',
  //     JSON.stringify(localStorageArray)
  //   );
  // };

  const toggleIsFollowed = id => {
    if (!isFollowed) {
      setIsFollowed(true);
      setFollowersNumber(prevState => prevState + 1);
      updateUser(id, followersNumber + 1)
        .then(data => {
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
          console.log(data);
        })
        .catch(error => {
          toast.error('Sorry, error happened.');
        });
    }
  };

  return (
    <Card key={id}>
      <ImgBox>
        <img src={avatar} alt={user} />
      </ImgBox>
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
