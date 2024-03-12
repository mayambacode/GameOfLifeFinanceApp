import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import FAQ from './components/FAQ';

function App() {
  return (
   <div className="FinanceApp">
      <header>
        <h1>Game of Life</h1>
      </header>
      <main>
        {/* Add your finance-related components and content here */}
      </main>
            <Router>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/about" component={About} />
              <Route path="/chat" component={Chat} />
              <Route path="/faq" component={FAQ} />
            </Router>
      <footer>
        <p>&copy; 2024 Finance Manager</p>
      </footer>
    </div>
  );
}

export default App;
