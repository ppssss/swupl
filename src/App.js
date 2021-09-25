import './App.css';
import Head from './components/head'
import Content from './router'
import Foot from './components/foot'
import {BackTop}from "antd"
import {BrowserRouter as Router} from "react-router-dom"

 
function App() {
  return (
    
    <div className="App">
      <Router>
        <Head/>
      <Content/>
      <Foot/>
      </Router>
      
      <BackTop />
    </div>
  );
}

export default App;
