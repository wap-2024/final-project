window.onload = function() {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  if (userId === undefined || token === undefined) {
    window.location.href = '/views/login.html';
  }
  console.log('Dashboard loaded');
  getDashboard();
  getUserPlaylist(userId, token);
}

function getDashboard() {
  fetch('http://localhost:3000/songs').then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data.data);
    if (data.data === undefined) {
      return;
    }
    let html = '';
    data.data.forEach(item => {
      html += `<tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.publishedDate}</td>
          <td><button class="add-btn"><i class="fa-solid fa-plus"></i></button></td>
      </tr>`;
    });
    document.getElementById('music-playlist').innerHTML = html;
  });
}

function getUserPlaylist(userId, token) {
  console.log(userId, token);
  fetch(`http://localhost:3000/users/${userId}/playlists`, {
    method: 'GET',
    headers: {
      'Content-type': `application/json`,
      'Token': token
    },

  
  }).then(response => response.json())
  .then(data => {
    console.log(data.data);
    let html = '';
    data.data.forEach(item => {
      html += `<tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.publishedDate}</td>
          <td><button class="add-btn"><i class="fa-solid fa-plus"></i></button></td>
          <td>
            <div class="quantity">
              <button class="remove-btn"><i class="fa-solid fa-minus"></i></button>
              <button class="play-btn"><i class="fa-solid fa-play"></i></button>
            </div>
          </td>
      </tr>`;
    });
    // reload table body
    document.getElementById('user-playlist').innerHTML = html;
  });
}

