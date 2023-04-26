import styled from 'styled-components';

export const Container = styled.div`
  width: 1000px;
  height: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding-top: 200px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  text-align: center;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  //   margin-top: 200px;
`;

export const Title = styled.h2`
  font-size: 80px;
  font-weight: 700px;
`;

export const Text = styled.p`
  font-size: 60px;
  font-weight: 700px;
`;
