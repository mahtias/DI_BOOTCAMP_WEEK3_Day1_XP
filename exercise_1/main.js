let doc= document.getElementById("container")

console.log(doc)

let elem= document.querySelector("ul > li:last-child")
//doc.setAttribute("")
 
console.log(elem)
// 2 Change the name “Pete” to “Richard”.
 console.log(elem.setAttribute("class", "Richard"))

 
// 3 Change each first name of the two <ul>'s to your name.
 
let changeName = document.querySelectorAll(".list")
 
changeName.forEach(item =>item.firstElementChild.textContent="mathias")

 // 4 Delete the <li> that contains the text node “Sarah”.
 let add = document.getElementsByTagName("li")[3];
 add.remove();
 //p1.removeAttribute('class ')

 
 //Add a class called student_list to both of the <ul>'s.

  document.querySelectorAll("ul")[0].classList.add("student_list")
  document.querySelectorAll("ul")[1].classList.add("student_list")
// Add the classes university and attendance to the first <ul>.

document.querySelectorAll("ul")[0].classList.add("university")
document.querySelectorAll("ul")[0].classList.add("attendance")
// Exercices 2

