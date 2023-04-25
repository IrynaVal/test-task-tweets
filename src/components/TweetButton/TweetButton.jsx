import { StyledButton } from './TweetButton.styled';

const getBgColor = variant => {
  switch (variant) {
    case 'follow':
      return 'ebd8ff';
    case 'following':
      return '5CD3A8';
    default:
      throw new Error(`Unsupported variant prop value - ${variant}`);
  }
};

export const TweetButton = ({ onClick, text }) => {
  return (
    <StyledButton
      type="button"
      // style={{ backgroundColor: getBgColor(variant) }}
      onClick={onClick}
    >
      {text.toUpperCase()}
    </StyledButton>
  );
};

// import PropTypes from 'prop-types';

// export const Section = ({ title, children }) => (
//   <section>
//     <h2>{title}</h2>
//     {children}
//   </section>
// );

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };

{
  /* <Section title="Statistics">
  {this.countTotalFeedback() ? (
    <Statistics    />
  ) : (
    <Notification message="There is no feedback"></Notification>
  )}
</Section>; */
}
