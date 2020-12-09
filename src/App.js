import Posts from './components/Posts.js';

import postsFile from './data/posts.js';

const App = () => {
  let container;
  let state = {
    posts: postsFile.posts,
  };

  const render = () => {
    if (!document.querySelector('.posts')) {
      container = document.createElement('div');
      container.appendChild(Posts(state.posts));

      return container;
    }

    container.replaceChild(
      Posts(state.posts),
      document.querySelector('.posts')
    );
  };

  return render();
};

export default App;
