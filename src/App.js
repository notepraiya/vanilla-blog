import Profile from './components/Profile.js';
import Posts from './components/Posts.js';
import Articles from './components/Articles.js';
// import LoginButton from './components/LoginButton.js';

import postsFile from './data/posts.js';
import articlesData from './data/articles.js';

const App = () => {
  let container;
  let state = {
    posts: postsFile.posts,
    articles: articlesData.articles,
  };

  const render = () => {
    container = document.createElement('div');
    container.setAttribute('class', 'container');
    // container.appendChild(Profile());

    // if (!document.querySelector('.posts')) {
    //   container.appendChild(Posts(state.posts));
    // } else {
    //   container.replaceChild(
    //     Posts(state.posts),
    //     document.querySelector('.posts')
    //   );
    // }

    container.appendChild(Articles(state.articles));

    // container.appendChild(LoginButton(state.login));

    return container;
  };

  return render();
};

export default App;
