import styled from 'styled-components';

export const Card = styled.li`
  width: 380px;
  height: 460px;
  background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    ),
    url(../../../img/Picture.jpg), url(../../../img/Logo.jpg);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  position: relative;
  list-style: none;

  &::after {
    position: absolute;
    top: 214px;
    left: 0;
    content: '';
    display: inline-block;
    width: 100%;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const ImgBox = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    ),
    url(../../../img/Ellipse.jpg);
  border-radius: 50%;
  position: absolute;
  left: 150px;
  top: 178px;
  z-index: 100;
  overflow: hidden;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 284px;
  text-align: center;
`;

export const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ebd8ff;
  text-transform: uppercase;
`;
