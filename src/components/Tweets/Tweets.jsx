// import { useState } from 'react';
// import { useEffect } from 'react';
import { Tweet } from 'components/Tweet/Tweet';
// import PropTypes from 'prop-types';
import { TweetsList } from './Tweets.styled';

export const Tweets = ({ tweets }) => {
  //   const [isFollowed, setIsFollowed] = useState(false);
  // const [followersNumber, setFollowersNumber] = useState(followers);
  //   const [followersNumber, setFollowersNumber] = useState(() => {
  //     const parsedData = JSON.parse(window.localStorage.getItem('followersData'));
  //     return parsedData.followers ?? [];
  //   });
  // const [isFollowed, setIsFollowed] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('isFollowed') ?? 'false');
  // });
  // useEffect(() => {
  //   window.localStorage.setItem('isFollowed', JSON.stringify(isFollowed));
  // }, [isFollowed]);
  // })

  // useEffect(() => {
  //   const tweetsArray = tweets.map(({ id, isFollowed }) => {
  //     let followersData = {
  //       id: id,
  //       isFollowed: isFollowed,
  //     };
  //     let localStorageArray = [];
  //     // if (localStorageArray.includes(followersData.id)) {
  //     //   return;
  //     // }
  //     localStorageArray.push(followersData);
  //     return localStorageArray;
  //   });
  //   window.localStorage.setItem('isFollowed', JSON.stringify(tweetsArray));
  //   // window.localStorage.setItem('followersData', JSON.stringify(followersData));
  // }, [tweets]);

  return (
    <TweetsList>
      {tweets.length !== 0 &&
        tweets.map(tweet => {
          return <Tweet item={tweet} key={tweet.id} />;
        })}
    </TweetsList>
  );
};

// MoviesList.propTypes = {
//   films: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
