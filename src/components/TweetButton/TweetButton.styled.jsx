import styled from 'styled-components';

export const StyledButton = styled.button`
  margin-left: 92px;
  margin-right: 92px;
  margin-top: 26px;
  width: 196px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  justify-content: center;
  align-items: center;
  padding: 14px;
  color: #373737;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

    background-color: ${props => {
      return props.isActive ? '#5cd3a8' : '#ebd8ff';
    }}
  
  }
`;
