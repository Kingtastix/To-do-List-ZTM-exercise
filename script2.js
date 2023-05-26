window.onload = () => {

    var button = document.getElementById("enter");
    var input = document.getElementById("userinput");
    var ul = document.querySelector("ul");

    //console.log(elements);

    var body = document.getElementsByTagName("body");


    //This adds a new item & assigns an ID on the list.

    function createListElement() {
        var div = document.createElement("div");
        div.classList.add("inline");
        var deletebtn = document.createElement("button");
        deletebtn.setAttribute("class", ul.childElementCount);
        deletebtn.classList.add("delete");
        deletebtn.appendChild(document.createTextNode("delete"));
        deletebtn.addEventListener("click", () => {
            div.remove();
        })
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        li.setAttribute("class", ul.childElementCount);
        li.addEventListener("click", () => {
            console.log("click");
            li.classList.toggle("checkoff");
        })
        div.appendChild(li);
        div.appendChild(deletebtn);
        ul.appendChild(div);
        input.value = "";
    }

    //This listens to an event & adds the item to the list.

    button.addEventListener("click", (event) => {
        if(input.value.length > 0){
            createListElement();
        }
        console.log(document.getElementsByClassName("delete"));
        console.log(elements);
    })

    //Use this event listener to scratch off each task on the list.
  
    
    /*elements.forEach(element => {
        element.addEventListener("click", () => {
            console.log("click", element);
            element.classList.toggle("checkoff");
        })
    })*/

    //elements.forEach( (item) => {
        
    //})

}


///////////This is for reference:


/*function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

elements.forEach((element) => {
    element.addEventListener("click", () => {
        console.log("click");
    element.classList.toggle("checkoff");
    })
})

button.addEventListener("click", () => {
    console.log("click!");
    if(input.value.length > 0){
        createListElement();
    }
})

input.addEventListener("keypress", (event) => {
    console.log(event.which);
    if(input.value.length > 0 && event.code === "Enter"){
        createListElement();
    }
})

function addButton(){
    for(var i = 0; i < elements.length; i++){
        var deletebtn = document.createElement("button");
        deletebtn.appendChild(document.createTextNode("delete"));
        deletebtn.classList.add("delete");
        elements[i].appendChild(deletebtn);
    }
}

addButton();*/


