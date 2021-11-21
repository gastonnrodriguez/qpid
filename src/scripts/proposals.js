const navbarResponsive = () => {
  let navbar = document.getElementById("myTopnav");
  if (navbar.className === "topnav") {
    navbar.className += " responsive";
  } else {
    navbar.className = "topnav";
  }
};

const getProposals = async () => {
  //debugger;
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  alert(`agarre el token ${user}`);
  //Cards element
  const cardsDeck = document.getElementById("cardsDeck");
  const card = document.createElement("div");
  card.classList.add("tinder--card");
  const image = document.createElement("img");
  card.appendChild(image);
  const info = document.createElement("div");
  info.classList.add("card--info");
  const name = document.createElement("h3");
  const age = document.createElement("h4");
  const bio = document.createElement("p");
  const distance = document.createElement("h4");
  const interests = document.createElement("div");
  info.appendChild(name);
  info.appendChild(age);
  info.appendChild(bio);
  info.appendChild(distance);
  info.appendChild(interests);
  card.appendChild(info);
  const url = "http://localhost:3000/proposals";
  const settings = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // "auth-token": token,
    },
    body: JSON.stringify({ id: user.id }),
  };
  try {
    const response = await fetch(url, settings);
    const result = await response.json();
    alert(JSON.stringify(result));
    //armar las tarjetas con los datos de los proposals y append a la lista
    //let test = JSON.stringify(result.proposals[0].bio);
    //console.log(`proposal from api ${test}`);
    /* <div class="tinder--card">
            <img src="https://placeimg.com/600/300/people" />
            <h3>Demo card 1</h3>
            <p>This is a demo for Tinder like swipe cards</p>
          </div> */

    result.proposals.forEach(proposal => {
      card.style.backgroundImage = `linear-gradient(#eb01a500, #000000), url("${proposal.image}")`;
      name.innerHTML = `${proposal.name}`;
      age.innerHTML = `${proposal.age}`;
      bio.innerHTML = proposal.bio;
      distance.innerHTML = `A ${proposal.distance} kms de vos`;
      proposal.interests.forEach(interest => {
        const tag = document.createElement("span");
        tag.innerHTML = interest;
        interests.appendChild(tag);
      });

      console.log(`candidate ${proposal.succes} id ${proposal.id}`);
    });
    cardsDeck.appendChild(card);
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
};

//tinder cards
("use strict");

var tinderContainer = document.querySelector(".tinder");
var allCards = document.querySelectorAll(".tinder--card");
var nope = document.getElementById("nope");
var love = document.getElementById("love");

function initCards(card, index) {
  var newCards = document.querySelectorAll(".tinder--card:not(.removed)");

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.transform =
      "scale(" + (20 - index) / 20 + ") translateY(-" + 30 * index + "px)";
    card.style.opacity = (10 - index) / 10;
  });

  tinderContainer.classList.add("loaded");
}

initCards();

allCards.forEach(function (el) {
  var hammertime = new Hammer(el);

  hammertime.on("pan", function (event) {
    el.classList.add("moving");
  });

  hammertime.on("pan", function (event) {
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    tinderContainer.classList.toggle("tinder_love", event.deltaX > 0);
    tinderContainer.classList.toggle("tinder_nope", event.deltaX < 0);

    var xMulti = event.deltaX * 0.03;
    var yMulti = event.deltaY / 80;
    var rotate = xMulti * yMulti;

    event.target.style.transform =
      "translate(" +
      event.deltaX +
      "px, " +
      event.deltaY +
      "px) rotate(" +
      rotate +
      "deg)";
  });

  hammertime.on("panend", function (event) {
    el.classList.remove("moving");
    tinderContainer.classList.remove("tinder_love");
    tinderContainer.classList.remove("tinder_nope");

    var moveOutWidth = document.body.clientWidth;
    var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

    event.target.classList.toggle("removed", !keep);

    if (keep) {
      event.target.style.transform = "";
    } else {
      var endX = Math.max(
        Math.abs(event.velocityX) * moveOutWidth,
        moveOutWidth
      );
      var toX = event.deltaX > 0 ? endX : -endX;
      var endY = Math.abs(event.velocityY) * moveOutWidth;
      var toY = event.deltaY > 0 ? endY : -endY;
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;

      event.target.style.transform =
        "translate(" +
        toX +
        "px, " +
        (toY + event.deltaY) +
        "px) rotate(" +
        rotate +
        "deg)";
      initCards();
    }
  });
});

function createButtonListener(love) {
  return function (event) {
    var cards = document.querySelectorAll(".tinder--card:not(.removed)");
    var moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    var card = cards[0];

    card.classList.add("removed");

    if (love) {
      card.style.transform =
        "translate(" + moveOutWidth + "px, -100px) rotate(-30deg)";
    } else {
      card.style.transform =
        "translate(-" + moveOutWidth + "px, -100px) rotate(30deg)";
    }

    initCards();

    event.preventDefault();
  };
}

var nopeListener = createButtonListener(false);
var loveListener = createButtonListener(true);

nope.addEventListener("click", nopeListener);
love.addEventListener("click", loveListener);

//end tinder cards

window.onload = () => {
  getProposals();
};
