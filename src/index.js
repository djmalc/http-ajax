import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.cypress.io';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    // Could Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use();

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker(response => {
    console.log(response);
    // Could Edit request config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
