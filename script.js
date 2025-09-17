// Cards Data
const cardsData = [
  {
    title: "Android Stereo",
    img: "https://m.media-amazon.com/images/I/71xZMLaUgeL._UF1000,1000_QL80_.jpg",
    text: "Smart music system for cars"
  },
  {
    title: "Speakers",
    img: "https://m.media-amazon.com/images/I/91DZroew4dL.jpg",
    text: "High quality sound experience"
  },
  {
    title: "LED Lights",
    img: "https://m.media-amazon.com/images/I/61WXosxfoqL._UF1000,1000_QL80_.jpg",
    text: "Bright efficient car lighting"
  },
  {
    title: "Spoiler",
    img: "https://m.media-amazon.com/images/I/71g90+wGBAS.jpg",
    text: "Sporty aerodynamic rear design"
  },
  {
    title: "Skirts",
    img: "https://m.media-amazon.com/images/I/61NSn0VRbfL.jpg",
    text: "Stylish side body kit"
  },
  {
    title: "Head Lamp and Tail Lamp",
    img: "https://miro.medium.com/v2/1*vkpwB0spFMzSr9nmKF9-zw.jpeg",
    text: "Clear visibility night driving"
  },
  {
    title: "Alloys",
    img: "https://www.hottracks.in/wp-content/uploads/2021/09/kia-stinger-gt-wheels-tsw-silvano-gloss-black-rims-14-800X572.jpg",
    text: "Durable stylish alloy wheels"
  },
  {
    title: "Seat Cover",
    img: "https://m.media-amazon.com/images/I/71G-g0HvoTL._UF1000,1000_QL80_.jpg",
    text: "Comfortable premium seat covers"
  },
  {
    title: "Steering Cover",
    img: "https://m.media-amazon.com/images/I/61idZNIVOVL.jpg",
    text: "Grip friendly steering cover"
  },
  {
    title: "Fog Lamp",
    img: "https://m.media-amazon.com/images/I/71etzl-9DKL.jpg",
    text: "Clear vision in fog"
  }
];

let currentIndex = 0;
const cardContainer = document.getElementById("cardContainer");
const navigation = document.getElementById("navigation");
const cardTitle = document.getElementById("cardTitle");
const cardText = document.getElementById("cardText");

// 1. Create cards once
cardsData.forEach((card, index) => {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";
  cardDiv.innerHTML = `<img src="${card.img}" alt="${card.title}">`;
  cardContainer.appendChild(cardDiv);

  // nav dots
  const dot = document.createElement("div");
  dot.className = "nav-dot";
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
  navigation.appendChild(dot);
});

const allCards = document.querySelectorAll(".card");
const allDots = document.querySelectorAll(".nav-dot");

// 2. Update slider (only change classes)
function updateSlider() {
  allCards.forEach((card, index) => {
    card.className = "card"; // reset

    if (index === currentIndex) {
      card.classList.add("active");
    } else if (index === (currentIndex + 1) % cardsData.length) {
      card.classList.add("next");
    } else if (index === (currentIndex - 1 + cardsData.length) % cardsData.length) {
      card.classList.add("prev");
    } else {
      card.classList.add("hidden");
    }
  });

  allDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });

  // Update text
  cardTitle.textContent = cardsData[currentIndex].title;
  cardText.textContent = cardsData[currentIndex].text;
}

// 3. Auto rotate
setInterval(() => {
  currentIndex = (currentIndex + 1) % cardsData.length;
  updateSlider();
}, 4000);

// Initial render
updateSlider();

// Navbar Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

