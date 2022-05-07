import React from 'react';
import About from 'components/About/About';
import Canban from 'components/Canban/Canban';
import Header from 'components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header title="Title for Header"/>
      <Routes>
        <Route path="/*" element={
          <Canban 
            canbanPage={props.state.canbanPage}
            dispatch={props.dispatch}
          />
        }/>
        <Route path="about/*" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
