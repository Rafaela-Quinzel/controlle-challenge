import React from 'react';
import './theme/global.css';
import Filter from './components/Filter/filter';
import MySelect from './components/Filter/mySelect'
import  MultiSelect  from './components/Filter/select';


function App() {

  return (
    <div>
      <Filter />
      <div className="select">
        <MySelect />
      </div>
      {/* <MultiSelect /> */}
    </div>
  );
}

export default App;
