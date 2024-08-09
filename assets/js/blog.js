document.getElementById("toggle-mode").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});

document.getElementById("back-button").addEventListener("click", function () {
  window.location.href = "index.html";
});

function displayPosts() {
  const postsList = document.getElementById("posts-list");
  if (postsList) {
    postsList.innerHTML = "";
    const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    blogPosts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p><strong>Author:</strong> ${post.username}</p>`;
      postsList.appendChild(postElement);
    });
  }
}

window.addEventListener("load", function () {
  if (document.getElementById("posts-page")) {
    displayPosts();
  }
});
