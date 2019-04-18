import React, { Component } from 'react';
import TodoContainer from './TodoContainer';
import MainWrapper from './components/MainWrapper';
import FootWrapper from './components/FootWrapper';

class App extends Component {
  render() {
    return (
      <div className="d-flex h-100 p-3 mx-auto flex-column">
        <MainWrapper>
          <TodoContainer />
        </MainWrapper>
        <FootWrapper>
          <p>
            Feito com ❤ por <a href="mailto://brunohcastro@gmail.com">Bruno Castro</a>,{' '}
            <a href="https://twitter.com/brunohcastro">@brunohcastro</a>.
          </p>
        </FootWrapper>
      </div>
    );
  }
}

export default App;
