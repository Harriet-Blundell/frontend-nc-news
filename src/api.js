import axios from 'axios';

const NCNews = axios.create({
  baseURL: 'https://harrietblundell-be-nc-news.herokuapp.com/api/'
});

export const fetchAllTopics = () => {
  return NCNews.get('topics').then(({ data }) => {
    return data;
  });
};

export const fetchAllArticles = query => {
  return NCNews.get('articles', {
    params: query
  }).then(({ data }) => {
    return data;
  });
};

export const fetchArticleById = id => {
  return NCNews.get(`articles/${id}`).then(({ data }) => {
    return data;
  });
};

export const fetchCommentsByArticleId = id => {
  return NCNews.get(`articles/${id}/comments`).then(({ data }) => {
    return data;
  });
};

export const postCommentById = (id, commentBody) => {
  return NCNews.post(`articles/${id}/comments`, commentBody).then(
    ({ data }) => {
      return data;
    }
  );
};

export const fetchUsers = () => {
  return NCNews.get(`users`).then(({ data }) => {
    return data;
  });
};

export const deleteCommentById = id => {
  return NCNews.delete(`comments/${id}`).then(({ data }) => {
    return data;
  });
};

export const deleteArticleById = id => {
  return NCNews.delete(`articles/${id}`).then(({ data }) => {
    return data;
  });
};

export const patchVote = (id, num, type) => {
  return NCNews.patch(`${type}/${id}`, { inc_votes: num }).then(({ data }) => {
    return data;
  });
};

export const postTopic = newTopic => {
  return NCNews.post('/topics', newTopic).then(({ data }) => {
    return data;
  });
};
