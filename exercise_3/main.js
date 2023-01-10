
// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method
let modifElem = document.querySelector("#navBar")
//modifElem.setAttribute("id", "socialNetworkNavigation")
console.log(modifElem)
modifElem.setAttribute("id", "socialNetworkNavigation")

// 3-1 

let afficheUl= document.getElementsByTagName("ul")[0]

console.log(afficheUl)
//creatNewElem.createElement('li')
let creatNewLi= document.createElement('li')
afficheUl.appendChild(creatNewLi)
// 3 2 Create a new text node with “Logout” as its specified text.
let creatNewtext = document.createTextNode("Logout")
 console.log(creatNewtext)
 //creatNewtext.push(creatNewLi)
 const ajoutTextAunewLi= document.getElementsByTagName("li")[5].innerHTML = "Logout"
 console.log(ajoutTextAunewLi)

 //3- 4 Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
 //afficheUl[1].appendChild(ajoutTextAunewLi)
 







