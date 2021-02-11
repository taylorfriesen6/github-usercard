import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/taylorfriesen6')
  .then(response => {
    //console.log(response);
    document.querySelector('.cards').append(makeCard(response.data));
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];
followersArray.forEach(username => {
  axios.get(`https://api.github.com/users/${username}`)
  .then(response => {
    document.querySelector('.cards').append(makeCard(response.data));
  });
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function makeCard(user) {
  const card = document.createElement('div');
  card.classList.add('card');

  const avatar = document.createElement('img');
  avatar.setAttribute('src', user.avatar_url);
  card.append(avatar);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');
  card.append(cardInfo);

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = user.name;
  cardInfo.append(name);

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = user.login;
  cardInfo.append(username);

  const location = document.createElement('p');
  location.textContent = `Location: ${user.location}`;
  cardInfo.append(location);

  const profile = document.createElement('p');
  profile.textContent = 'Profile: ';
  cardInfo.append(profile);

  const profileLink = document.createElement('a');
  profileLink.setAttribute('src', user.html_url);
  profileLink.textContent = user.html_url;
  profile.append(profileLink);

  const following = document.createElement('p');
  following.textContent = `Following: ${user.following}`;
  cardInfo.append(following);

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${user.followers}`;
  cardInfo.append(followers);

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${user.bio}`;
  cardInfo.append(bio);

  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
