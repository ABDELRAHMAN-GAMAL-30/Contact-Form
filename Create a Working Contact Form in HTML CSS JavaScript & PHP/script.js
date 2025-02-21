const form = document.querySelector("form"),
statusTxt= form.querySelector(".button-area span");

form.onsubmit = (e) => {
e.preventDefault(); //preventing form from submitting
statusTxt.style.display = "block";
statusTxt.style.color = "#f0f0f0";
statusTxt.textContent = "Sending your message...";
form.classList.add("disabled");

let xhr = new XMLHttpRequest(); //creating XML object
xhr.open("POST", "message.php", true); //sending post request to message.php
xhr.onload = () => { //creating new XML object
    if(xhr.readyState ==4 && xhr.status == 200){ //if ajax response status is 200 & ready state is 4
        let response = xhr.response; //storing ajax response in response variable
        if(response.indexOf("EMAIL and Password fields are required")!= -1 || response.indexOf("EMAIL and Password fields are required")){
            statusTxt.style.color = "red";
        }
        else{
            form.reset();
            setTimeout(() => {
                statusTxt.style.display = "none";
            }, 3000);
        }
    }
        statusTxt.innertext = response; //adding response in span
    }
}
let formData = new FormData(form); //creating new formData object. This object is used to send form data
xhr.send(formData); //sending form data to php
//