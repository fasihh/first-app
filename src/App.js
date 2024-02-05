import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import SignIn from './SignIn';
import PostDetails from './PostDetails';
import CreatePost from './CreatePost';
import NotFound from './NotFound';

function App() {
  const HandleCreate = () => {
    const history = useHistory();
    history.push('/signin');
  }

  return (
    <Router>
      <div className="app">
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Home />
            </Route>
            <Route exact path="/signin">
              <Navbar />
              <SignIn />
            </Route>
            <Route exact path="/posts/:postId">
              <Navbar />
              <PostDetails />
            </Route>
            <Route exact path="/create">
              <Navbar />
              { !localStorage.getItem('token')  ? <HandleCreate /> : <CreatePost /> }
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
