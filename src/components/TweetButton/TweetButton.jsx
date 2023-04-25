import { StyledButton } from './TweetButton.styled';

export const TweetButton = ({ onClick, text, isActive = false }) => {
  return (
    <StyledButton type="button" onClick={onClick} isActive={isActive}>
      {text.toUpperCase()}
    </StyledButton>
  );
};
