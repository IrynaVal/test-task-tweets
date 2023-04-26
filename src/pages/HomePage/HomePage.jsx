import { Container, TextBox, Title, Text } from './HomePage.styled';

const Home = () => {
  return (
    <>
      <Container>
        <TextBox>
          <Title align="center">Welcome!</Title>
          <Text align="center">Let's watch tweets!</Text>
        </TextBox>
      </Container>
    </>
  );
};

export default Home;
