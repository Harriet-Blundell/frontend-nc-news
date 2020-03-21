import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import { fetchUsers } from './api';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import TopicsList from './components/TopicsList';
import ArticlesList from './components/ArticlesList';
import SingleArticle from './components/SingleArticle';
import Users from './components/Users';

class App extends React.Component {
  state = {
    users: [],
    username: ''
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Users users={this.state.users} handleChange={this.handleChange} />
        <Router>
          <Home path="/" />
          <TopicsList path="/topics" />
          <ArticlesList path="/topics/:slug" />
          <ArticlesList path="/articles" />
          <SingleArticle path="/articles/:id" />
        </Router>
      </div>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    fetchUsers().then(({ users }) => {
      this.setState({
        users: users
      });
    });
  }
}

export default App;
