import styled from 'styled-components';
import Logo from '../../img/Logo.png';
import Picture from '../../img/Picture.png';
import Ellipse from '../../img/Ellipse.png';

export const Card = styled.li`
  width: 380px;
  height: 460px;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  position: relative;
  list-style: none;

  background-image: ${`url(${Logo})`}, ${`url(${Picture})`},
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-size: 76px 22px, 308px 168px, 100%;
  background-position: top 20px left 20px, top 28px left 36px, 100%;

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

export const ImgEllipse = styled.div`
  width: 80px;
  height: 80px;
  background-image: linear-gradient(
      114.99deg,
      #471ca9 -0.99%,
      #5736a3 54.28%,
      #4b2a99 78.99%
    ),
    ${`url(${Ellipse})`};
  border-radius: 50%;
  position: absolute;
  left: 150px;
  top: 178px;
  z-index: 100;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const ImgBox = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62px;
  height: 62px;
  overflow: hidden;
  background: #5736a3;
  border-radius: 50%;
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
