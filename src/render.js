import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {addTask, updateTaskText} from 'redux/state';


export let renderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App updateTaskText={updateTaskText} addTask={addTask} state={state}/>
    </BrowserRouter>,
    document.getElementById('root')
  )
}
