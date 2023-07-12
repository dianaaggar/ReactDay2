
import './App.css';
import Menu from './Components/Menu';
import menu from './models/menu';

const state = {
  menu
}

function App() {
  return (
    <div className="App">

      <Menu receiptInfo= { state.menu[0]} />
      <Menu receiptInfo= { state.menu[1]} />
      <Menu receiptInfo= { state.menu[2]} />
      <Menu receiptInfo= { state.menu[3]} />
  
  
    </div>
  );
}

export default App;
