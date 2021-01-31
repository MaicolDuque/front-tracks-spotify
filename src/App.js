import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css'
import Header from './components/Header';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container maxWidth="lg">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/track/:id" exact component={Detail} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
