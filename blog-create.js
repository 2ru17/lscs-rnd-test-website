// blog-create.js
// Ill be honest, i dont know how this thing works, i just see the logic and kinda get it
// but i dont know how is this thing coded
window.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add-btn");
  const titleInput = document.getElementById("title-input");
  const contentInput = document.getElementById("content-input");
  const imageInput = document.getElementById("image-input");
  const imageBtn = document.getElementById("image-btn");
  const imagePreviewName = document.getElementById("image-preview-name");
  const blogPosts = document.getElementById("blog-posts");

  let selectedImage = null;

  // Handle image button click
  imageBtn.addEventListener("click", () => {
    imageInput.click();
  });

  // Handle image selection
  imageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      selectedImage = file;
      imagePreviewName.textContent = `Selected: ${file.name}`;
      imagePreviewName.style.color = "#4CAF50";
    } else {
      selectedImage = null;
      imagePreviewName.textContent = "";
    }
  });

  addBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!title || !content) {
      alert("Please enter both title and content.");
      return;
    }

    const post = document.createElement("div");
    post.className = "post";
    
    // Create post content with optional image
    let postHTML = `<h3>${title}</h3>`;
    
    if (selectedImage) {
      const imageURL = URL.createObjectURL(selectedImage);
      postHTML += `<img src="${imageURL}" alt="Blog post image" class="post-image">`;
    }
    
    postHTML += `
      <p>${content}</p>
      <button class="delete-btn">Delete</button>
    `;
    
    post.innerHTML = postHTML;

    blogPosts.prepend(post);

    // Clear inputs
    titleInput.value = "";
    contentInput.value = "";
    imageInput.value = "";
    selectedImage = null;
    imagePreviewName.textContent = "";

    // Delete button
    post.querySelector(".delete-btn").addEventListener("click", () => {
      post.remove();
    });
  });
});