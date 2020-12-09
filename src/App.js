import Profile from './components/Profile.js';
import Posts from './components/Posts.js';

import profileInfo from './data/profile.js';
import postsFile from './data/posts.js';

const App = () => {
  let container;
  let state = {
    profile: profileInfo,
    posts: postsFile.posts,
  };

  const render = () => {
    container = document.createElement('div');
    container.setAttribute('class', 'container');
    container.appendChild(Profile(state.profile));

    if (!document.querySelector('.posts')) {
      container.appendChild(Posts(state.posts));
    } else {
      container.replaceChild(
        Posts(state.posts),
        document.querySelector('.posts')
      );
    }

    return container;
  };

  return render();
};

export default App;
