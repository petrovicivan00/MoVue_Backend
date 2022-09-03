var button = document.getElementById("login");

button.onclick = function () {
  const parameters = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  fetch("http://localhost:2000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(parameters),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("token",JSON.stringify(data))
      if (!(typeof data === "string")){
          alert(JSON.stringify(data.message));
          return;
      }
      window.location.href = "index.html";
      console.log(localStorage.getItem("token"))
    });
};
