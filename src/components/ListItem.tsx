import styled from 'styled-components';
import { ListGroupItem } from 'reactstrap';

const ListItem = styled(ListGroupItem)`
  display: flex !important;
  align-items: center;
  border-radius: 0 !important;
  text-align: left;
  padding: 0 !important;
  margin: 0 !important;
  position: relative;
  border-right: none;
  border-left: none;
`;

export default ListItem;