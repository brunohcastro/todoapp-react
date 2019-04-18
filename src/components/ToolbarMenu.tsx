import styled from 'styled-components';
import { DropdownToggle } from 'reactstrap';

const MenuDropdown = styled(DropdownToggle)`
  height: 30px;
  background: #777777;
  width: 60px;
  border-radius: 0 !important;
  color: #fff;

  :focus {
    box-shadow: none !important;
  }
`;

export default MenuDropdown;
