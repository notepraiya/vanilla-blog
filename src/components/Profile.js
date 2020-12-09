const Profile = data => {
  let profile;
  let profileImg;
  let profileName;
  let profileEmail;
  let profileHeart;

  function _createElements() {
    profile = document.createElement('div');
    profileImg = document.createElement('img');
    profileName = document.createElement('p');
    profileEmail = document.createElement('p');
    profileHeart = document.createElement('i');
  }

  function _setAttributes() {
    profile.setAttribute('class', 'profile');
    profileImg.setAttribute('class', 'profileImg');
    profileName.setAttribute('class', 'profileName');
    profileEmail.setAttribute('class', 'profileEmail');
    profileHeart.setAttribute('class', 'fas fa-heart profileHeart');
    profileImg.src = data.picture;
    profileName.innerHTML = data.name.first + ' ' + data.name.last;
    profileEmail.innerHTML = data.email;
  }

  function _appendElements() {
    profile.appendChild(profileImg);
    profile.appendChild(profileName);
    profile.appendChild(profileEmail);
    profile.appendChild(profileHeart);
  }

  const render = () => {
    _createElements();
    _setAttributes();
    _appendElements();

    return profile;
  };

  return render();
};

export default Profile;
