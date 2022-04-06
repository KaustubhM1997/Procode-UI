const toastContainer = document.querySelector(".toast-container");

const toastClose = document.querySelector("#toast-btn");

const closeContainer = () => {

    console.log("hello");
 toastContainer.classList.add("hidden");

 console.log(toastContainer);
 console.log(toastClose);
};

toastClose.addEventListener("click", closeContainer);
