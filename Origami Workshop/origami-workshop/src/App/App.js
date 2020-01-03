import React from 'react';
import styles from './App.module.css';

import Navigation from '../Navigation/Navigation';
import Aside from '../Aside/Aside';
import Main from './Main/Main';
import Posts from '../publications/Posts/Posts';
import Footer from '../Footer/Footer';
import CreatePost from '../publications/CreatePost/CreatePost';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ErrorPage from '../ErrorPage/ErrorPage';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navigation />
        <div className="Container">
          <Aside />
            <Switch>
              <Route path="/" exact>
                <Main title="Publications"><Posts /></Main>
              </Route>
              <Route path="/create-post">
                <Main title="Share your thoughts..."><CreatePost /></Main>
              </Route>
              <Route path="/profile">
                <Main title="Profile"><Profile email="someone@somemail.gg" posts={8} /></Main>
              </Route>
              <Route path="/login">
                <Main title="Login"><Login /></Main>
              </Route>
              <Route path="/register">
                <Main title="Register"><Register /></Main>
              </Route>
              <Route>
                <Main title="Something went wrong.."><ErrorPage /></Main>
              </Route>
            </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
