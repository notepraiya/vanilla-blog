import config from '../config/config.js';

const LoginButton = loginInfo => {
  let loginDiv;
  let loginButton;
  let loginFont;

  const login = async targetUrl => {
    try {
      console.log('Logging in', targetUrl);

      const url = new URL(window.location.origin);
      let redirectUri = config.redirectUri;
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

let auth0;

window.onload = async () => {
  console.log('loginButton => window.onload');
  auth0 = await createAuth0Client({
    domain: config.auth0.domain,
    client_id: config.auth0.clientId,
  });

  const isAuthenticated = await auth0.isAuthenticated();
  console.log('isAuthenticated => ', isAuthenticated);
  if (isAuthenticated) {
    console.log(await auth0.getTokenSilently());
    console.log(await auth0.getUser());
  }
};

export default LoginButton;
