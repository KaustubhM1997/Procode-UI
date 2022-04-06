const toastContainer = document.querySelector(".toast-content");

const toastClose = document.querySelector(".toast-btn");

const closeContainer = () => {
 toastContainer && toastContainer.classList.add("hidden");
};

toastClose.addEventListener("click", closeContainer);
