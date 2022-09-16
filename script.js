const today = new Date();
let year = today.getFullYear();
let footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerText = `Simon © ${year}`;
footer.appendChild(copyright);

let skillsSection = document.getElementById("skills");

let skillsList = skillsSection.querySelector("ul");

const skills = ["Technical skill 1", "Technical skill 2", "Technical skill 3"];

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
