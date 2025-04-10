import { useState } from 'react';
import './App.css';
import Login from './scenes/Auth/Login';
import Signup from './scenes/Auth/Signup';
import Dashboard from './scenes/Dashboard/Dashboard';
function App() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    
    <div className="App">
    

    <Dashboard />
      
    </div>


  );
}

export default App;