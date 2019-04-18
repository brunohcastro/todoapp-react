import { Button } from 'reactstrap';
import styled from 'styled-components';

const FlatButton = styled(Button)`
  border-radius: 0 !important;
  border: none !important;
  height: 70px;
  width: 40px;
  transition: all 0.2s;
  padding: 0 !important;
  &:focus {
    box-shadow: none !important;
  }
`;

export default FlatButton;
