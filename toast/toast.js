const toastContainer = document.querySelector(".toast-container");

const toastClose = document.querySelector(".toast-btn");

const closeContainer = () => {
  toastContainer.classList.add("hidden");
};

toastClose.addEventListener("click", closeContainer);
