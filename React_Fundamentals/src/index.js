import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

const rootElement = document.getElementById("root");
ReactDOM.render(<AppContainer><App/></AppContainer>, rootElement);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', () => {
      const NextApp = require('./components/App').default;
      ReactDOM.render(
        <AppContainer>
          <NextApp/>
        </AppContainer>
        ,
        document.getElementById('root')
      );
    });
  }