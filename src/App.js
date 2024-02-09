import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import SignIn from './SignIn';
import PostDetails from './PostDetails';
import CreatePost from './CreatePost';
import NotFound from './NotFound';
import EditHandler from './EditHandler';
// import SignUp from './SignUp';

function App() {
  const HandleNoUser = ({ location }) => {
    const history = useHistory();
    history.push(location);
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
            {/* <Route exact path="/signup">
              <Navbar />
              { localStorage.getItem('token')  ? <HandleNoUser location={'/'}/> : <SignUp /> }
            </Route> */}
            <Route exact path="/posts/:postId">
              <Navbar />
              <PostDetails />
            </Route>
            <Route exact path="/posts/:postId/edit">
              <Navbar />
              <EditHandler />
            </Route>
            <Route exact path="/create">
              <Navbar />
              { localStorage.getItem('token') && <CreatePost /> }
              { !localStorage.getItem('token') && <HandleNoUser location={'/signin'}/> }
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
