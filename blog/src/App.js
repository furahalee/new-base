/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title,titleUpdate] = useState(['食べログのおすすめ', '写真おすすめ']);
  let [thumb, thumbChange] =useState(0);
  function changeTitle(){
    var newArray = [...title];
    newArray[0] = 'shopping street';
    titleUpdate(newArray);
  }
  function hey(){
    return 100;
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: 'blue', fontSize: '30px'}}>開発ブログ</div>
      </div>
      <button onClick={ changeTitle }>button</button>
      <div className="list">
        <h3>{ title[0] }<span onClick={ ()=>{ thumbChange(thumb +1) } }>👍</span> { thumb } </h3>
        <p>ソウルの料理のおすすめ</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[1] }</h3>
        <p>shopingしたいところ</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
