import 'bootstrap/dist/css/bootstrap.css';
import reactDom from 'react-dom';
import './App.css';
import BodyComponent from './blakewebsite/BodyComponent';
import HeaderComponent from './blakewebsite/HeaderComponent';

function App() {
  return (
    <div className="App">
        <HeaderComponent/>    
        <BodyComponent/>
    </div>
  );
}

export default App;
