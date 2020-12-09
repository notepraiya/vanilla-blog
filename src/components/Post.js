const Post = postItem => {
  let blogPost;
  let title;
  let textDiv;
  let blogPostContent;

  function _createElements() {
    blogPost = document.createElement('did');
    title = document.createElement('h1');
    textDiv = document.createElement('div');
    blogPostContent = document.createElement('p');
  }

  function _setAttributes() {
    textDiv.setAttribute('id', 'text');
    title.setAttribute('class', 'postTitle');
    blogPost.setAttribute('class', 'post');
    title.textContent = postItem.title;
    blogPostContent.textContent = String(postItem.content).substring(0, 150);
  }

  function _appendElements() {
    blogPost.appendChild(title);
    blogPost.appendChild(textDiv);
    textDiv.appendChild(blogPostContent);
  }

  const render = () => {
    _createElements();
    _setAttributes();
    _appendElements();

    return blogPost;
  };

  return render();
};

export default Post;
