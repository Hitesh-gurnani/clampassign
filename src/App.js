import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import image from '../src/assets/DAI.svg'
import Cards from './Cards';
import Explore from './Explore';
import ConnectWallet from './ConnectWallet';
import store from './store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <Navbar/>
    <Explore/>
    </Provider>
  );
}

export default App;
