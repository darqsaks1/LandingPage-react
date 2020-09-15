import React, {useRef} from 'react';
import Header from '../header/header'
import './App.scss';
import Main from '../main/main'
import Work from '../main/work/work'
import Form from '../form/form'
const App = () => {
  const myRef = useRef(null)
  return (
    <div className="App">
      <Header  innerRef={myRef}/>
      <Main  innerRef={myRef}/>
      <Work />
      <Form innerRef={myRef}/>
    </div>
  );
}

export default App;
