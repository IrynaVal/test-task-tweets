import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
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

  // const saveToLocalStorage = (id, isFollowed) => {
  //   let localStorageArray = [];
  //   const followersData = {
  //     id: id,
  //     isFollowed,
  //   };
  //   if (localStorageArray.includes(followersData.id)) {
  //     return;
  //   }
  //   localStorageArray.push(followersData);

  //   window.localStorage.setItem(
  //     'isFollowed',
  //     JSON.stringify(localStorageArray)
  //   );
  // };

  const toggleIsFollowed = id => {
    if (!isFollowed) {
      setIsFollowed(true);
      // saveToLocalStorage(id, !isFollowed);
      setFollowersNumber(prevState => prevState + 1);
      updateUser(id, followersNumber + 1)
        .then(data => {
          console.log(data);
          // setFollowersNumber(data.followers);
        })
        .catch(error => {
          console.log('error');
        });
    } else {
      setIsFollowed(false);
      // saveToLocalStorage(id, !isFollowed);
      setFollowersNumber(prevState => prevState - 1);
      updateUser(id, followersNumber - 1)
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log('error');
        });
    }
  };

  const tweetsText = 'tweets';
  const followersText = 'followers';

  return (
    <Card key={id}>
      <ImgBox>
        <img src={avatar} alt={user} />
      </ImgBox>
      <TextBox>
        <Text>
          {tweets} {tweetsText.toUpperCase()}
        </Text>
        <Text>
          {followersNumber} {followersText.toUpperCase()}
        </Text>
      </TextBox>

      {isFollowed ? (
        <TweetButton
          text="following"
          isActive={isFollowed}
          // variant="following"
          onClick={() => toggleIsFollowed(id)}
        />
      ) : (
        <TweetButton
          text="follow"
          // variant="follow"
          // style={{ backgroundColor: getBgColor(variant) }}
          onClick={() => toggleIsFollowed(id)}
        />
      )}
    </Card>
  );
};

//ImageGalleryItem.propTypes = {
//   item: PropTypes.shape({
//     webformatURL: PropTypes.string.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//   }).isRequired,
// };
