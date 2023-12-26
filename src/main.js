import { getDataFromRandomUserApi } from './helpers/api.js';

const displayUserData = (userData) => {
  const user = userData[0]; // Assuming you're dealing with a single user

  // Display fetched data on the page
  document.getElementById('userImage').src = user.picture.large;
  document.getElementById('userCell').innerText = `Cell: ${user.cell}`;
  document.getElementById('userCity').innerText = `City: ${user.location.city}`;
  document.getElementById('userEmail').innerText = `Email: ${user.email}`;
  document.getElementById('userCoordinates').innerText = `Coordinates: ${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}`;
};

document.getElementById('download').addEventListener('click', () => {
  console.log('debil')
});


document.getElementById('download').addEventListener('click', async () => {
  console.log('debil')
  const userData = await getDataFromRandomUserApi();

  if (userData) {
    displayUserData(userData);
  }
});
