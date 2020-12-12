const template = document.createElement('template');
template.innerHTML = `
  <style>
  .articles {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  a {
    text-decoration: none;
    color: var(--color-primary);
  }
  
  a:hover {
    color: var(--color-gray);
  }

  .article {
    flex: 0 50%;
    padding: 2.4rem;
  }
  
  .image > img {
    border-radius: 5px;
    max-height: 30rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .content {
    display: flex;
    flex-direction: column;
  }
  
  .info {
    display: flex;
    font-size: 1.4rem;
  }
  
  .category {
    margin-right: 0.8rem;
    text-transform: uppercase;
  }
  
  .category > a {
    font-weight: 800;
    color: var(--color-secondary);
  }
  
  .category > a:hover {
    color: var(--color-gray);
  }
  
  .date {
    margin-left: 0.8rem;
  }
  
  h3.title {
    font-size: 3.4rem;
    margin: 2rem 0;
  }
  
  h2.title {
    margin: 0.8rem 0;
  }
  
  .description {
    color: var(--color-gray);
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
  
  .bottom-div {
    display: flex;
    margin-top: auto;
    justify-content: space-between;
  }
  
  .author {
    display: flex;
    align-items: center;
    margin-top: auto;
  }
  
  .author > img {
    border-radius: 50%;
    width: 4.5rem;
  }
  
  .author-info {
    margin-left: 0.8rem;
  }
  
  .author-name {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.4rem;
  }
  
  .author-occupation {
    font-size: 1.2rem;
  }
  
  .read-more {
    border-radius: 4px;
    background: linear-gradient(
      to right,
      var(--color-secondary),
      var(--color-primary)
    ) !important;
    border: none;
    color: #ffffff;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.4rem;
    padding: 1rem;
    width: 13rem;
    transition: all 0.2s;
    cursor: pointer;
    font-weight: bold;
    margin: 5px;
  }
  .read-more span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.4s;
  }
  .read-more span:after {
    content: '\u00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.2s;
  }
  .read-more:hover span {
    padding-right: 25px;
  }
  .read-more:hover span:after {
    opacity: 1;
    right: 0;
  }  
  </style>
  <section class="article">
    <div class="image"><img alt="article cover image" /></div>
    <div class="content">
      <div class="info">
        <div class="category"><a href="#"></a></div> &bull; <div class="date"></div>
      </div>
      <a href="#"><h2 class="title"></h2></a>
      <p class="description"></p>
      <div class="bottom-div">
        <div class="author">
          <img alt="author" />
          <div class="author-info">
            <div class="author-name"></div>
            <div class="author-occupation"></div>
          </div>
        </div>
        <a class="read-more" href="#" rel="nofollow"><span>Read More</span></a>
      </div>
    </div>
  </section>
`;

class wcArticle extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    let image = this.shadowRoot.querySelector('.image > img');
    image.src = this.hasAttribute('image')
      ? this.getAttribute('image')
      : 'public/mstile-310x310.png';

    let title = this.shadowRoot.querySelector('.title');
    title.textContent = this.hasAttribute('title')
      ? this.getAttribute('title')
      : '<title>';

    let desc = this.shadowRoot.querySelector('.description');
    desc.textContent = this.hasAttribute('desc')
      ? this.getAttribute('desc')
      : '<description>';

    let category = this.shadowRoot.querySelector('.category');
    category.textContent = this.hasAttribute('category')
      ? this.getAttribute('category')
      : '<category>';

    let adate = this.shadowRoot.querySelector('.date');
    adate.textContent = this.hasAttribute('date')
      ? this.getAttribute('date')
      : '<date>';

    let authorImg = this.shadowRoot.querySelector('.author > img');
    authorImg.src = this.hasAttribute('author-image')
      ? this.getAttribute('author-image')
      : 'public/mstile-310x310.png';

    let authorName = this.shadowRoot.querySelector('.author-name');
    authorName.textContent = this.hasAttribute('author-name')
      ? this.getAttribute('author-name')
      : '<author-name>';

    let authorOccupation = this.shadowRoot.querySelector('.author-occupation');
    authorOccupation.textContent = this.hasAttribute('author-occupation')
      ? this.getAttribute('author-occupation')
      : '<author-occupation>';
  }
  disconnectedCallback() {
    console.log('disconnectedCallback');
  }
  adoptedCallback() {
    console.log('adoptedCallback');
  }
  attributeChangedCallback() {
    console.log('attributeChangedCallback');
  }
}

window.customElements.define('wc-article', wcArticle);
