var choices = ["box purple", "box orange", "box pink", "box blue"]
var headers = ["Code", "Education", "Work"];
var content = ["Java", "Python",
              "Numpy", "Redux", "React Native", "matplotlib", "Pandas",
              "Scipy", "Node.js", "MongoDB", "Adobe XD"]
var base = 0x000;
function expandBox() {
  const div = document.getElementById(this.id);
  switch(this.className) {
    case "box purple": case "box orange": case "box pink":
      div.style.flex = "1 2 80px";
      div.style.backgroundColor = "rgba(250,250,250, .9)";
      break;
    case "box link":
      div.style.flex = "1 2 100px";
      div.style.backgroundColor = "rgba(240,250,240, .9)";
      div.style.cursor = "pointer";
      break;
    default:
      div.style.flex = "1 2 80px";
      div.style.backgroundColor = "rgba(250,250,250, .9)";
      break;
  }
}

function resetBox() {
  const div = document.getElementById(this.id);
  div.style.flex = "2 2 75px";
  div.style.backgroundColor = "rgba(255,255,255, 1)";
}

function openResume() {
  window.location.href = "Resume.pdf";
}

function openGithub() {
  window.location.href = "https://github.com/tklausner";
}

function openEmail() {
  window.location.href = "mailto:tjk223@cornell.edu?subject=&body=";
}

function openLinkedIn() {
  window.location.href = "https://www.linkedin.com/in/theodoreklausner/";
}

function openEWH() {
  window.location.href = "https://ewh.engineering.cornell.edu";
}

function newBox(cl) {
  const newDiv = document.createElement("div");
  newDiv.setAttribute('id', base);
  newDiv.setAttribute('class', cl);
  newDiv.onmouseover = expandBox;
  newDiv.onmouseleave = resetBox;
  base += 1;
  return newDiv;
}

function resume() {
  const newDiv = newBox("box link");
  newDiv.appendChild(newHeader("Resume"));
  newDiv.onclick = openResume;
  return newDiv;
}

function github() {
  const newDiv = newBox("box link");
  newDiv.appendChild(newHeader("Github"));
  newDiv.onclick = openGithub;
  return newDiv;
}

function email() {
  const newDiv = newBox("box link");
  newDiv.appendChild(newHeader("Email"));
  newDiv.onclick = openEmail;
  return newDiv;
}

function ewh() {
  const newDiv = newBox("box link");
  newDiv.appendChild(newHeader("EWH"));
  newDiv.onclick = openEWH;
  return newDiv;
}

function linkedin() {
  const newDiv = newBox("box link");
  newDiv.appendChild(newHeader("LinkedIn"));
  newDiv.onclick = openLinkedIn;
  return newDiv;
}
var links = [github(), resume(), email(), ewh(), linkedin()];

function genBoxes() {
  const grid = document.getElementById("grid");
  const name = document.getElementById("name");
  var contentAdded = 0;

  for(var i = 0; i < 28; i++) {
    var r = Math.floor(Math.random() * 4);
    const newDiv = newBox(choices[r]);
    grid.insertBefore(newDiv, name);
    if(contentAdded < 3 && i % r == 0) {
      grid.insertBefore(links[contentAdded], name);
      contentAdded++;
    }
  }

  for(var i = 0; i < 20; i++) {
    var r = Math.floor(Math.random() * 4);
    const newDiv = newBox(choices[r])
    grid.appendChild(newDiv);
    if(contentAdded < 5 && i % r * 3 == 0) {
      grid.appendChild(links[contentAdded]);
      contentAdded++;
    }
  }
}

function newHeader(content) {
    const newHeader = document.createElement("h3");
    newHeader.innerHTML =  content;
    return newHeader;
}

function drawLines() {
  const grid = document.getElementById("lines");
  console.log()
  var lines = document.body.clientWidth / 60;
  for(var i = 0; i < lines; i++) {
    var r = Math.floor(Math.random() * 4);
    const newDiv = document.createElement("div");
    newDiv.setAttribute('class', choices[r]);
    grid.appendChild(newDiv);
  }
}
