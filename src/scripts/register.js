
//debugger;
const registerForm = document.getElementById("registerForm");
const nameElement = document.getElementById("name");
const ageElement = document.getElementById("age");
const genderElement = document.getElementById("gender");
const lookingForElement = document.getElementById("lookingFor");
const distanceElement = document.getElementById("distance");
const bioElement = document.getElementById("bio");
const imageElement = document.getElementById("image");
const interests = [];
const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");

for (let i = 0; i < checkboxes.length; i++) {
  interests.push(checkboxes[i].value);
}

const mailElement = document.getElementById("emailRegister");
const passwordElement = document.getElementById("passwordRegister");
const passwordRepeatElement = document.getElementById("password-repeatRegister");

registerForm.addEventListener("submit", () => {
  //debugger;
  
  const name = nameElement.value;
  const age = ageElement.value;
  const gender = genderElement.value;
  const lookingFor = lookingForElement.value;
  const distance = distanceElement.value;
  const bio = bioElement.value;
  const image = imageElement.value;
  const mail = mailElement.value;
  const password = passwordElement.value;
  const passwordRepeat = passwordRepeatElement.value

  if (password == passwordRepeat) {
    const objetoBody = {
      name,
      age,
      gender,
      lookingFor,
      distance,
      bio,
      image,
      mail,
      interests,
      password
    };
    console.log(`OBJ en el form ${objetoBody}`);
    fetch("http://localhost:3000/auth/registro", {
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
          //localStorage.setItem("token", response.newUser);

          alert(`registro exitoso ${response.newUser}`);
          window.location = `../qpid/src/pages/home.html`;
        } else {
          alert("registro fallido");
        }
      });
  } else {
    alert("Falta completar campos");
  }
});
