import Image from './Image';
import React from 'react';


function App() {
  const URL = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
  return (
    <div className="App">
      <Image source = {URL} alternativeText = 'Cute cat staring'/>
    </div>
  );
}

export default App;
