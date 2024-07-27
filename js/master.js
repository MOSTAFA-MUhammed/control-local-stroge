// setting up varible 
// let theButton = document.querySelector(".parent .button");
let allSpan = document.querySelectorAll(".button span");
let theInput = document.getElementById("the-input");
let results = document.querySelector(".results > span");



allSpan.forEach( span => {

    span.addEventListener('click' , (e) => {

        if (e.target.classList.contains("check-item")){

            checkItem();
        }

        if (e.target.classList.contains("add-item")){

            addItem();
        }

        if (e.target.classList.contains("delete-item")){

            deleteItem();
        }

        if (e.target.classList.contains("show-item")){

            showItem();
        }


    })

});

function checkInput(){

    // if (theInput.value === ''){

        results.innerHTML = 'Input Cant Be Empty'; 

    // }

}


function checkItem(){
        if (theInput.value !== ''){

            if (localStorage.getItem(theInput.value)){
            
                results.innerHTML = `Found Local Item Called <span>${theInput.value}</span>`;

            } else{
            
            results.innerHTML = `No Local Stroage With The Name <span>${theInput.value}</span>`;   
        }
    }else{

        checkInput();

    }

}

function addItem(){

        if (theInput.value !== ''){
        
        localStorage.setItem(theInput.value , "Test" )

        results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added `;

        theInput.value = '';

    }else{

        checkInput();

    }


}

function deleteItem(){
    
    if (theInput.value !== ''){
        
            if (localStorage.getItem(theInput.value)){

                localStorage.removeItem(theInput.value)
            
                results.innerHTML = `Found Local Item <span>${theInput.value}</span> Deleted`;

                theInput.value = '';

            } else{
            
            results.innerHTML = `No Local Stroage With The Name <span>${theInput.value}</span>`;   
        }
    }else{

        checkInput();

    }
}

function showItem(){
    if (localStorage.length){

        console.log (`found ${localStorage.length}`)

        results.innerHTML= '';

        for (let[key , value] of Object.entries(localStorage)){

            results.innerHTML +=  `<span class="kay"> ${key} </span>`
        }

    }else{

        results.innerHTML = `No Local Stroage Is Empty `;   

    }
}

