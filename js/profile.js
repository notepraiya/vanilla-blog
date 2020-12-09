const profile = document.querySelector('.profile');

const getProfile = () => {
  const profileImg = document.querySelector('.profileImg');
  const profileName = document.querySelector('.profileName');
  const profileEmail = document.querySelector('.profileEmail');

  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    //console.log(data);
    profileImg.src = data.results[0].picture.large;
    profileName.innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
    profileEmail.innerHTML = data.results[0].email;
  });
}


