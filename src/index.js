import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Assets
import 'antd/dist/antd.css';
import 'Src/assets/style/styles.less';

import * as userService from 'Src/services/service';

function refreshToken() {
    console.log('a');
}

refreshToken();

ReactDOM.render(
    
    <App />,
    document.getElementById('root')
);
