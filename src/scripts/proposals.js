function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



const getProposals = async () => {
  const url = "http://localhost:3000/proposals";
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("token"),
    },
    body: JSON.stringify({ id: localStorage.getItem("user").id }),
  };
  try {
    const response = await fetch(url, settings);
    const result = await response.json();
    //armar las tarjetas con los datos de los proposals y append a la lista
    result.proposals.array.forEach(proposal => {
      console.log(proposal);
    });
    return result;
  } catch (e) {
    return e;
  }
};

window.onload = () => {
  getProposals();
};
