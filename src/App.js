import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lottie from 'react-lottie';
import like from './like.json'
import walk from './walk.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lottie options={{loop: true, animationData: like, autoplay: true}} style={{width: 200}}></Lottie>
        <p>
          Walk to React Lottie
        </p>
        <Lottie options={{loop: true, animationData: walk, autoplay: true}} style={{width: 500, position: 'fixed', right: 350, bottom: 0}}></Lottie>
        <Lottie options={{loop: true, animationData: walk, autoplay: true}} style={{width: 500, position: 'fixed', left: 350, bottom: 0}}></Lottie>

      </header>
    </div>
  );
}

export default App;
