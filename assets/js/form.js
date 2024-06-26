const username = document.getElementById('User');
const title = document.getElementById('Title');
const content = document.getElementById('Content');
const form = document.getElementById('form');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const usernameValue = username.value;
    const titleValue = title.value;
    const contentValue = content.value;


const blogInfo = {
    username: usernameValue,
    title: titleValue,
    content: contentValue
}
      localStorage.setItem('blog', JSON.stringify(blogInfo));
});

