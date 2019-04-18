import React from 'react';
import styled from 'styled-components';

const EmptyListWrapper = styled.div`
  background: #fff;
  color: rgba(0, 0, 0, 0.55);

  .material-icons {
    font-size: 70px;
    padding-top: 20px;
  }
`;

const EmptyMessage = styled.span`
  padding: 15px 15px 15px 15px;
  display: block;
  line-height: 40px;
`;

const EmptyList = () => (
  <EmptyListWrapper>
    <span className="material-icons">inbox</span>
    <EmptyMessage>Nenhuma tarefa para o filtro especificado</EmptyMessage>
  </EmptyListWrapper>
);

export default EmptyList;
