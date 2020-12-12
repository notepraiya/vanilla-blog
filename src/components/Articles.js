import './wcArticle.js';

const Articles = entries => {
  const render = () => {
    let container = document.createElement('div');
    container.className = 'articles';

    entries.forEach(article => {
      let wca = document.createElement('wc-article');
      wca.setAttribute('image', article.image);
      wca.setAttribute('title', article.title);
      wca.setAttribute('desc', article.description);
      wca.setAttribute('category', article.category);
      wca.setAttribute('date', article.date);
      wca.setAttribute('category', article.category);
      wca.setAttribute('author-image', article.author_image);
      wca.setAttribute('author-name', article.author_name);
      wca.setAttribute('author-occupation', article.author_occupation);
      container.appendChild(wca);
    });
    return container;
  };

  return render();
};

export default Articles;
