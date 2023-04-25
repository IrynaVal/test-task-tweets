// import PropTypes from 'prop-types';
import { StyledButton } from './LoadButton.styled';

export const LoadButton = ({ onClick }) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      Load more
    </StyledButton>
  );
};

// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

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
    <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={this.countTotalFeedback()}
      positivePercentage={this.countPositiveFeedbackPercentage()}
    />
  ) : (
    <Notification message="There is no feedback"></Notification>
  )}
</Section>; */
}
