import logo from './logo.svg';
import './App.css';
import Home from './components/home' ;
import Header from './components/header'
import Table from './components/table'
import List from './components/list'
import image0001 from './assets/image00001.jpeg'



function App() {
  return(
     
     <div className="App">
      <img src={require('./assets/image00001.jpeg')} height ={250} width={200} />
      <Home />
      <Header/>
      <List/>
  
      
      

      </div>

);
}

export default App;
