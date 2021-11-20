const button = document.getElementById("login");

const mailElementLogin = document.getElementById("mailLogin");
const passwordElementLogin = document.getElementById("passwordLogin");
/*
button.addEventListener("click", async () => {
  const backendUrl = "http://localhost:3000/login";
  const mail = mailElementLogin.value;
  const password = passwordElementLogin.value;

  //if (mail && password) {
  const objetoBody = {
    mail: mail,
    password: password,
  };
  //}
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objetoBody),
  };

  try {
    const response = await fetch(backendUrl, settings);
    const result = await response.json();

    if (!response.error) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", response.user);
      console.log("Login exitoso");
      window.location = `../qpid/src/pages/home.html`;
    } else {
      alert("Login fallido");
    }
  } catch (error) {
    alert(error);
  }
});

//button.addEventListener("click", login());
*/
button.addEventListener("click", () => {
  const mail = mailElementLogin.value;
  const password = passwordElementLogin.value;

  if (mail && password) {
    const objetoBody = {
      mail: mail,
      password: password,
    };

    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objetoBody),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        // debugger;

        if (!response.error) {
          localStorage.setItem("token", response.token);
          localStorage.setItem("user", response.user);
          console.log("Login exitoso");
          window.location = `../qpid/src/pages/home.html`;
        } else {
          alert("Login fallido");
        }
      });
  } else {
    alert("Falta completar campos");
  }
});
