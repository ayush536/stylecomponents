// import logo from './logo.svg';
import './App.css';
// import {useSate} from 'react'
import {Button} from './components/Button'

function App() {
  return (
    <div className="App">
      <Button primary>Primary Button</Button>
      <Button default>Default Button</Button>
      <Button dashed>Dashed Button</Button>
      <br/>
      <Button button>Text Button</Button>
      <Button link>Link Button</Button>
    </div>
  );
}

export default App;
