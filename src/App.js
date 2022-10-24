import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AuthProvider from './components/Context/AuthProvider';
import Login from './components/Login/Login';
import ChatRoom from './components/ChatRoom/ChatRoom';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route component={Login} path='/login' />
          <Route component={ChatRoom} path='/' />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
