import './sass/App.css';
import Header from './components/Header'
import Grid from './components/Grid'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'

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
                    <h1>Nothing yet...</h1>
                </Route>
                <Route path='/recursion'>
                    <Header location={3} />
                    <h1>jeje</h1>
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;