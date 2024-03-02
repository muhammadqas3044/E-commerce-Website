const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function saveData() {
    const data = document.getElementsByClassName("data").value;
    localStorage.setItem("savedData", data);
  }
  
  console.log(localStorage.getItem("savedData"));
  

