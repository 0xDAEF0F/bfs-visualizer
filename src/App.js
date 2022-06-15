import './sass/App.css';
import Header from './components/Header'
import Grid from './components/Grid'
import Footer from './components/Footer'

function App() {
    return (
        <div className='app'>
            <Header/>
            <Grid/>
            <Footer />
        </div>
    );
}

export default App;