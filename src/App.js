import React from 'react'
import './App.css'
import { Router } from '@reach/router'
import { fetchUsers } from './api'
import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/Home'
import TopicsList from './components/TopicsList'
import ArticlesList from './components/ArticlesList'
import SingleArticle from './components/SingleArticle'
import ErrorPage from './components/ErrorPage'
import UsersList from './components/UsersPage'
import ArticlesByUser from './components/ArticlesByUser'

class App extends React.Component {
  state = {
    users: [],
    username: 'guest',
  }

  render() {
    return (
      <div className='App'>
        <Header
          users={this.state.users}
          username={this.state.username}
          handleChange={this.handleChange}
        />
        <Nav />
        <Router className='routeDiv'>
          <Home path='/' />
          <UsersList
            path='/users'
            users={this.state.users}
            username={this.state.username}
          />
          <TopicsList path='/topics' username={this.state.username} />
          <ArticlesByUser
            path='/articles/:username'
            username={this.state.username}
          />
          <ArticlesList path='/topics/:slug' />
          <ArticlesList path='/articles' username={this.state.username} />
          <SingleArticle path='/articles/:id' username={this.state.username} />
          <ErrorPage default error={{ status: 404, msg: 'page not found' }} />
        </Router>
      </div>
    )
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  componentDidMount() {
    fetchUsers().then(({ users }) => {
      this.setState({
        users: users,
      })
    })
  }
}

export default App
