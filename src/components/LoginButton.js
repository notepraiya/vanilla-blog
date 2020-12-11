import config from '../config/config.js';

let redirectUri = config.auth0.redirectUri;
let auth0 = {};

const LoginButton = loginInfo => {
  let loginDiv;
  let loginButton;
  let loginFont;

  const login = async targetUrl => {
    try {
      const options = { redirect_uri: redirectUri };
      if (targetUrl) {
        options.appState = { targetUrl };
      }
      await auth0.loginWithRedirect(options);
    } catch (err) {
      console.log('Log in failed', err);
    }
  };

  function _createElements() {
    loginDiv = document.createElement('div');
    loginButton = document.createElement('div');
    loginFont = document.createElement('i');
  }

  function _setAttributes() {
    loginDiv.setAttribute('class', 'login');
    loginButton.setAttribute('class', 'loginButton');
    loginFont.setAttribute('class', 'fas fa-sign-in-alt loginFont');

    loginButton.addEventListener('click', () => {
      login();
    });
  }

  function _appendElements() {
    loginDiv.appendChild(loginButton);
    loginButton.appendChild(loginFont);
  }

  const render = () => {
    _createElements();
    _setAttributes();
    _appendElements();

    return loginDiv;
  };

  return render();
};

window.onload = async () => {
  const url = new URL(window.location.origin);
  if (url.hostname === 'localhost') redirectUri = window.location.origin;
  console.log('redirectUri: ', redirectUri);

  auth0 = await createAuth0Client({
    domain: config.auth0.domain,
    client_id: config.auth0.clientId,
    cacheLocation: 'localstorage',
  });

  const setAuthData = async () => {
    // let auth0Token = await auth0.getTokenSilently();
    let user = await auth0.getUser();
    //console.log(user);
    let APIKEY = user['https://notepraiya.github.io/vanilla-blog/APIKEY'];
    let stor = window.sessionStorage;
    stor.setItem('APIKEY', APIKEY);
  };

  const isAuthenticated = await auth0.isAuthenticated();
  console.log('isAuthenticated: ', isAuthenticated);
  if (isAuthenticated) {
    setAuthData();
    return;
  }

  const query = window.location.search;
  if (query.includes('code=') && query.includes('state=')) {
    await auth0.handleRedirectCallback();
    //updateUI();
    setUthData();
    window.history.replaceState({}, document.title, redirectUri);
  }
};

export default LoginButton;
