import config from '../config/config.js';

const LoginButton = loginInfo => {
  let loginDiv;
  let loginButton;
  let loginFont;

  const login = async targetUrl => {
    try {
      console.log('Logging in', targetUrl);
      console.log('window.location.origin => ', window.location.origin);
      const url = new URL(window.location.origin);
      let redirectUri = config.auth0.redirectUri;
      if (url.hostname === 'localhost') redirectUri = window.location.origin;
      console.log('redirectUri => ', redirectUri);

      const options = {
        redirect_uri: redirectUri,
      };

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

let auth0 = null;

window.onload = async () => {
  console.log('loginButton => window.onload');
  auth0 = await createAuth0Client({
    domain: config.auth0.domain,
    client_id: config.auth0.clientId,
    cacheLocation: 'localstorage',
  });

  const isAuthenticated = await auth0.isAuthenticated();
  console.log('isAuthenticated => ', isAuthenticated);
  let user;
  if (isAuthenticated) {
    console.log(await auth0.getTokenSilently());
    user = await auth0.getUser();
    console.log(user);
    console.log(user['https://notepraiya.github.io/vanilla-blog/APIKEY']);
    // const claims = await auth0.getIdTokenClaims();
    // console.log(claims);
    return;
  }

  const query = window.location.search;
  if (query.includes('code=') && query.includes('state=')) {
    await auth0.handleRedirectCallback();
    //updateUI();
    console.log(await auth0.getTokenSilently());
    user = await auth0.getUser();
    console.log(user);
    console.log(user['https://notepraiya.github.io/vanilla-blog/APIKEY']);
    // const claims = await auth0.getIdTokenClaims();
    // console.log(claims);
    console.log('history.replaceState', config.auth0.redirectUri);
    window.history.replaceState({}, document.title, config.auth0.redirectUri);
  }
};

export default LoginButton;
