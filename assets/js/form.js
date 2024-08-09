//crating an event listener to grab the content from the form fields.
document
  .getElementById("blog-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    // adding the error message
    if (!username || !title || !content) {
      document.getElementById("message").innerText =
        "Please complete the form.";
      return;
    }

    // adding to local storage
    const blogPost = { username, title, content };
    let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    blogPosts.push(blogPost);
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));

    window.location.href = "blog.html";
  });
