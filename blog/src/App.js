import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title,titleUpdate] = useState(['食べログのおすすめ', '写真おすすめ']);
  let [title2, titleUpdate2] = useState(['Shoping street', 'Shoping cart'])
  function hey(){
    return 100;
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: 'blue', fontSize: '30px'}}>開発ブログ</div>
      </div>
      <div className="list">
        <h3>{ title[0] }</h3>
        <p>ソウルの料理のおすすめ</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title2[0] }</h3>
        <p>shopingしたいところ</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
