import { StyledLink } from './BackLink.styled';
import { BsArrowLeftShort } from 'react-icons/bs';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <BsArrowLeftShort />
      {children}
    </StyledLink>
  );
};
