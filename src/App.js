import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import TopicsList from './components/TopicsList';
import ArticlesList from './components/ArticlesList';
import SingleArticle from './components/SingleArticle';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
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

export default App;
