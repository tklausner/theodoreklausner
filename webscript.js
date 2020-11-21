var choices = ["box purple", "box orange", "box pink", "box blue"]
var headers = ["Code", "Education", "Work"];
var content = ["Java", "Python",
              "Numpy", "Redux", "React Native", "matplotlib", "Pandas",
              "Scipy", "Node.js", "MongoDB", "Adobe XD"];

var base = 0x000;

function changeLineHeight(height) {
   const div = document.getElementById(this.id);
   div.style.height = height;
 }

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
  div.style.backgroundColor = "rgba(255,255,255, 1)";
  div.style.flex = "2 2 75px";
}

function open(url) {
  window.location.href = url;
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

function link(text, url) {
  const newDiv = newBox("box link");
  newDiv.appendChild(newHeader(text));
  newDiv.onclick = () => { open(url) };
  return newDiv;
}

var links = [
 link("Resume", "Resume.pdf"),
 link("Github", "https://github.com/tklausner"),
 link("Email","mailto:tjk223@cornell.edu?subject=&body="),
 link("EWH", "https://ewh.engineering.cornell.edu"),
 link("LinkedIn", "https://www.linkedin.com/in/theodoreklausner/"),
];

function genBoxes() {
  const grid = document.getElementById("grid");
  const name = document.getElementById("name");
  var contentAdded = 0;

  var height = Math.floor(document.body.clientHeight / 4);

  for(var i = 0; i < height; i++) {
    var r = Math.floor(Math.random() * 4);
    const newDiv = newBox(choices[r]);
    grid.insertBefore(newDiv, name);
    if(contentAdded < 3 && i % r == 0) {
      grid.insertBefore(links[contentAdded], name);
      contentAdded++;
    }
  }

  for(var i = 0; i < height; i++) {
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
  var lines = document.body.clientWidth / 60;
  for(var i = 0; i < lines; i++) {
    var r = Math.floor(Math.random() * 4);
    const newDiv = document.createElement("div");
    newDiv.setAttribute('class', choices[r]);
    newDiv.setAttribute('id', base++);
    newDiv.onmouseover = () => { changeLineHeight("100px") };
    newDiv.onmouseleave = () => { changeLineHeight("30px") };
    grid.appendChild(newDiv);
  }
}
