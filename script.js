function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function likePost(btn) {
  let count = btn.nextElementSibling;
  count.innerText = parseInt(count.innerText) + 1;
}

function searchPosts() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let title = card.querySelector(".card-title").innerText.toLowerCase();
    card.parentElement.style.display = title.includes(input) ? "block" : "none";
  });
}

function previewImage(event) {
  let reader = new FileReader();
  reader.onload = function(){
    document.getElementById("preview").src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}

function addPost(e) {
  e.preventDefault();

  let place = document.getElementById("place").value;
  let desc = document.getElementById("desc").value;
  let img = document.getElementById("preview").src;

  let card = `
  <div class="col-md-4">
    <div class="card shadow">
      <img src="${img}">
      <div class="card-body">
        <h5 class="card-title">${place}</h5>
        <p>${desc}</p>
        <button class="btn btn-outline-danger btn-sm" onclick="likePost(this)">❤️</button>
        <span>0</span>
      </div>
    </div>
  </div>`;

  document.getElementById("postContainer").innerHTML += card;

  e.target.reset();
  document.getElementById("preview").src = "";
}