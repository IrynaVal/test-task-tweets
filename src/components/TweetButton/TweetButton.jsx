import { StyledButton } from './TweetButton.styled';

export const TweetButton = ({ onClick, text }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {text.toUpperCase()}
    </StyledButton>
  );
};
