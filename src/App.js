import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import PostDetails from './PostDetails';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/posts/:postId">
              <PostDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
