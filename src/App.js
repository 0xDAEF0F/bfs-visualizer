import './App.css';
import Header from './components/Header'
import Toolbar from './components/Toolbar'
import Grid from './components/Grid'
import Footer from './components/Footer'

function App() {
    return (
        <div className='app'>
            <Header />
            <Toolbar />
            <Grid />
            <Footer />
        </div>
    );
}

export default App;