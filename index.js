//1
let inp = document.querySelector("#inputed");
let btn = document.querySelector("#btn");

function inputedRes (){
    btn.textContent = inp.value;
}

//2
let imgChange = document.querySelector("#img");
imgChange.setAttribute("src", "img2.jpg");

//3
let aSetAttrib = document.querySelector("#seach");
aSetAttrib.setAttribute("href", "https://www.bing.com");
let altImgChange = document.querySelector("#img3");
altImgChange.setAttribute("alt", "evening");

//4
let changeListItem = document.querySelector(".list");
changeListItem.firstElementChild.textContent.replace('item1', 'itemfwfes1c');
console.log(changeListItem.firstElementChild.classList); 
// FAILED
