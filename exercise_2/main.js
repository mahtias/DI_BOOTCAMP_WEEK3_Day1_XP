
// Add a “light blue” background color and some padding to the <div>.
let user= document.querySelector("div")
user.style.backgroundColor ='lightblue'

 // Do not display the <li> that contains the text node “John”

 document.querySelectorAll("li")[0].style.display="none"

 //4- Add a border to the <li> that contains the text node “Pete”.
 let bordu = document.querySelectorAll("li")[1]
   bordu.style.border="2 px";
 // 5 Change the font size of the whole body.
 document.querySelector("body").style.fontSize="30px"
  //taille.style.fontsize="30px"

if(document.querySelector("div").style.backgroundColor == "lightblue"){
    alert("Hello x and y , x and y are the users in the div")
}
