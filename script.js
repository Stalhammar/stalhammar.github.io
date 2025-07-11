// Data for the cards
const journey_data = [
  {
    title: "Where it all began",
    text: "I’ve always been curious and interested in how things work. My tech journey began later, when I was a bit older, but since then, I’ve been passionate about learning and exploring the world of technology. Today, I’m studying Computer Science at Linköping University and continuing to grow every day.",
  },
  { title: "test2", text: "testtest2" },
  { title: "test3", text: "testtest3" },
];

let currentJourneyIndex = 0;

// Function to display the cards
function displayJourneyCard(index) {
  const container = document.getElementById("journey-card-container");
  container.innerHTML = "";
  const card = journey_data[index];
  const div = document.createElement("div");

  div.innerHTML = `
        <h3>${card.title}</h3>
        <p>${card.text}</p>
        `;

  container.appendChild(div);
}

// Function that listens to click on button and changes index of the cards
function setupNav() {
  document.getElementById("prev-card").addEventListener("click", () => {
    currentJourneyIndex =
      (currentJourneyIndex - 1 + journey_data.length) % journey_data.length;
    displayJourneyCard(currentJourneyIndex);
  });

  document.getElementById("next-card").addEventListener("click", () => {
    currentJourneyIndex = (currentJourneyIndex + 1) % journey_data.length;
    displayJourneyCard(currentJourneyIndex);
  });
}

displayJourneyCard(currentJourneyIndex);
setupNav();
