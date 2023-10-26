function starFunction() {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    star.addEventListener('click', () => {
      toggleStar(star);
    });
  });
}

function toggleStar(star) {
  const wishlist = document.getElementById("wishlist");
  const card = star.closest(".card");
  const image = card.querySelector(".card__image").getAttribute("src");
  const name = card.querySelector(".card__title").textContent;
  const price = card.querySelector(".card__price").textContent;
  const id = card.querySelector(".card__btn").getAttribute("data-id"); 

  const storedProducts = JSON.parse(localStorage.getItem("starredProducts")) || [];

  const product = {
    id: id,
    image: image,
    name: name,
    price: price,
  };

  if (star.classList.contains("star-selected")) {
    // Remove item from the wishlist
    const item = wishlist.querySelector(`[data-image="${image}"]`);
    if (item) {
      wishlist.removeChild(item);
    }

    const index = storedProducts.findIndex((p) => p.name === name);
    if (index !== -1) {
      storedProducts.splice(index, 1);
    }

    star.classList.remove("star-selected");
    star.style.color = "#777";
  } else {
    storedProducts.push(product);
    // Add item to the wishlist
    const item = document.createElement("div");
    item.classList.add("wishlist-item");
    item.dataset.image = image;
    item.innerHTML = `
      <img src="${image}" alt="${image}" style="width:80px; height:80px; padding:1em; object-fit: cover;">
      <span class="remove-item" style="background-color: grey; color: blue;">X</span>
    `;
    const removeButton = item.querySelector(".remove-item");
    removeButton.addEventListener('click', () => {
      removeFromWishlist(item);
    });

    wishlist.appendChild(item);
    star.classList.add("star-selected");
    star.style.color = "yellow";
  }
  localStorage.setItem("starredProducts", JSON.stringify(storedProducts));
}

function removeFromWishlist(item) {
  const wishlist = document.getElementById("wishlist");
  wishlist.removeChild(item);
  const image = item.dataset.image;
  const id = item.dataset.id; 
  const card = document.querySelector(`.card .card__image[src="${image}"]`);
  const star = card.parentElement.querySelector(".star");

  const storedProducts = JSON.parse(localStorage.getItem("starredProducts")) || [];
  const index = storedProducts.findIndex((p) => p.id === id);
  if (index !== -1) {
    storedProducts.splice(index, 1);
    localStorage.setItem("starredProducts", JSON.stringify(storedProducts));
  }
  
  star.classList.remove("star-selected");
}

document.addEventListener("DOMContentLoaded", () => {
  starFunction();
});
