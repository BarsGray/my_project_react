import logo from './logo.svg';
import './App.css';
import ComponentLink from './ComponentLink';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ComponentLink />
      </header>
    </div>
  );
}

export default App;
