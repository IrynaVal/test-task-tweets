import { StyledButton } from './LoadButton.styled';

export const LoadButton = ({ onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      Load more
    </StyledButton>
  );
};
