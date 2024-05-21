
window.onload = function() {
  console.log('Dashboard loaded');
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  if (userId === undefined || token === undefined) {
    window.location.href = '/frontend/views/index.html';
  }
  console.log('Dashboard loaded');
  getDashboard();
  getUserPlaylist(userId, token);
  userLogout();
  searchSong();
  addPlaylist(userId, token);
  removePlaylist(userId, token);

  
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
          <td><button class="add-btn" onclick="addPlaylist(${item.id});"><i class="fa-solid fa-plus"></i></button></td>
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
    if (data.data === undefined) {
      window.location.href = '/frontend/views/index.html';
    }
    console.log(data.data);
    let html = '';
    data.data.forEach(item => {
      html += `<tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.publishedDate}</td>
          <td>
            <div class="quantity">
              <button class="remove-btn" onclick="removePlaylist(${item.id});"><i class="fa-solid fa-minus"></i></button>
              <button class="play-btn"><i class="fa-solid fa-play"></i></button>
            </div>
          </td>
      </tr>`;
    });
    // reload table body
    document.getElementById('user-playlist').innerHTML = html;
  });
}

function userLogout() {
  document.getElementById('logout').addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    window.location.href = '/frontend/views/index.html';
  });
}

function searchSong() {
  document.getElementById('search').addEventListener('keyup', function(e) {
    e.preventDefault();
    const keyword = document.getElementById('search').value;
    fetch(`http://localhost:3000/songs?keyword=${keyword}`).then(response => {
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
          <td><button class="add-btn" onclick="addPlaylist(${item.id});"><i class="fa-solid fa-plus"></i></button></td>
        </tr>`;
      });
      document.getElementById('music-playlist').innerHTML = html;
    });
  });
}

function addPlaylist(songId) {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  fetch(`http://localhost:3000/users/${userId}/playlists/${songId}`, {
    method: 'POST',
    headers: {
      'Content-type': `application/json`,
      'Token': token
    }
  }).then(response => response.json())
  .then(data => {
    console.log(data.data);
    let html = '';
    data.data.forEach(item => {
      html += `<tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.publishedDate}</td>
          <td>
            <div class="quantity">
              <button class="remove-btn" onclick="removePlaylist(${item.id});"><i class="fa-solid fa-minus"></i></button>
              <button class="play-btn"><i class="fa-solid fa-play"></i></button>
            </div>
          </td>
      </tr>`;
    });
    // reload table body
    document.getElementById('user-playlist').innerHTML = html;
  });
}

function removePlaylist(songId) {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  fetch(`http://localhost:3000/users/${userId}/playlists/${songId}`, {
    method: 'DELETE',
    headers: {
      'Content-type': `application/json`,
      'Token': token
    }
  }).then(response => response.json())
  .then(data => {
    console.log(data.data);
    let html = '';
    data.data.forEach(item => {
      html += `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.publishedDate}</td>
        <td>
          <div class="quantity">
            <button class="remove-btn" onclick="removePlaylist(${item.id});"><i class="fa-solid fa-minus"></i></button>
            <button class="play-btn"><i class="fa-solid fa-play"></i></button>
          </div>
        </td>
      </tr>`;
    });
    // reload table body
    document.getElementById('user-playlist').innerHTML = html;
  });
}
