const signInBtn = document.querySelector("#signIn");
const signUpBtn = document.querySelector("#signUp");
const container = document.querySelector(".container");
console.log(signInBtn)
console.log(signUpBtn)
console.log(container)
signInBtn.addEventListener("click", () => { container.classList.remove("panle-active"); });
signUpBtn.addEventListener("click", () => { container.classList.add("panle-active") })