const blogPosts = JSONq.parse(localStorage.getItem('blog'));
const blogList = document.querySelector('ul');

blogPosts.forEach(blogPosts => {
    const blogs = document.createElement('li')
    blogs.textContent = (blogPosts)
    blogList.appendChild(blogs);

});

console.log (blogList);
console.log (blogPosts);
