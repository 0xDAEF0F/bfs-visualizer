import './sass/App.css';
import Header from './components/Header'
import Grid from './components/Grid'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'
import ComingSoon from './components/ComingSoon'

function App() {
    return (
        <div className='app'>
            <Switch>
                <Route exact path="/">
                    <Header location={1} />
                    <Grid />
                </Route>
                <Route path="/sorting">
                    <Header location={2} />
                    <ComingSoon />
                </Route>
                <Route path='/recursion'>
                    <Header location={3} />
                    <ComingSoon />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;