var divi = document.createElement("div");
divi.id = "div1";
document.getElementsByTagName("body")[0].appendChild(divi);

//lisätään kaksi kappaletta div#div1 sisään

var para = document.createElement("p");
para.className = "para1";
var node = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident at eum quo numquam facere, animi similique magni architecto doloribus aut! At tenetur consectetur atque obcaecati laudantium quis, non fugit sunt?");
para.appendChild(node);
document.getElementById("div1").appendChild(para);

//lisätään toinen kappale

var para = document.createElement("p");
para.id = "p2";
var node = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident at eum quo numquam facere, animi similique magni architecto doloribus aut! At tenetur consectetur atque obcaecati laudantium quis, non fugit sunt?");
para.appendChild(node);
document.getElementById("div1").appendChild(para);

//lisätään kolmas kappale

var para = document.createElement("p");
para.id = "p3";
var node = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident at eum quo numquam facere, animi similique magni architecto doloribus aut! At tenetur consectetur atque obcaecati laudantium quis, non fugit sunt? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident at eum quo numquam facere, animi similique magni architecto doloribus aut! At tenetur consectetur atque obcaecati laudantium quis, non fugit sunt?");
para.appendChild(node);
document.getElementById("div1").appendChild(para);






// const para = document.createElement("p");
// const node = document.createTextNode("Tämä on kappaleen teksti.");
// para.appendChild(node);

// document.getElementsByTagName("body")[0].appendChild(para);