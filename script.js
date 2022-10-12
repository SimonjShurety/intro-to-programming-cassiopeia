const today = new Date();
let year = today.getFullYear();
let footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerText = `© Simon ${year}`;
footer.appendChild(copyright);
copyright.className = "copyright";

let skillsSection = document.querySelector("#skills");

let skillsList = skillsSection.querySelector("ul");

const skills = [
  "Javascript | ",
  " CSS | ",
  " HTML | ",
  " Git/Github | ",
  " VS Code | ",
  " PC/Laptop repair | ",
];

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

const messageHeading = document.getElementById("headingMessage");
let hideMessage = document.getElementById("messageList");

let messageForm = document.querySelector('[name="leave_message"]');

function toggleMessageHeader() {
  hideMessage.hasChildNodes()
    ? (messageHeading.style.display = "block")
    : (messageHeading.style.display = "none");
}
toggleMessageHeader();

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;
  const messageEl = event.target.message;
  let messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> wrote: <span>${message}  </span>`;

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  removeButton.className = "remove";

  removeButton.addEventListener("click", (event) => {
    const entry = removeButton.parentNode;
    entry.remove();
    toggleMessageHeader();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  toggleMessageHeader();
  messageForm.reset();

  messageList.appendChild(newMessage);
  messageForm.reset();
});

function renderProjectsWithFetch() {
  fetch("https://api.github.com/users/simonjshurety/repos")
    .then((res) => res.json())
    .then((data) => {
      // Get the specific repo
      const repo = data.find(
        (repo) => repo.name === "intro-to-programming-cassiopeia"
      );

      const projectSection = document.querySelector("#projects");
      const projectList = projectSection.querySelector("ul");

      const project = document.createElement("li");
      project.innerHTML = `<a class="link link--no-decor" href="${repo.html_url}">${repo.name}</a>`;
      projectList.appendChild(project);
    });
}

renderProjectsWithFetch();
