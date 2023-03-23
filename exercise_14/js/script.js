
let fields = {
    "first-name": {
        name: "First Name",
        required: true,
        regex: "",
        message: "This is a custom message"
    },
    "last-name": {
        name: "Last Name",
        required: true,
        regex: ""
    },
    "email": {
        name: "Email Address",
        required: true,
        regex: ""
    },
    "contact": {
        name: "Contact Number",
        required: true,
        regex: ""
    },
    "pincode": {
        name: "PIN Code",
        required: true,
        regex: ""
    },
    "card-number": {
        name: "Card Number",
        required: true,
        regex: ""
    },
    "card-expiry": {
        name: "Card Expiry",
        required: true,
        regex: ""
    },
    "cvv": {
        name: "CVV",
        required: true,
        regex: ""
    }
}

for(let field of Object.keys(fields)){
    let inputElement = document.getElementById(field);
    let removeClasses = ["error-border"];

    inputElement.addEventListener("change", () => {
        let errorElements = inputElement.parentElement.getElementsByClassName("error");
        Array.from(errorElements).forEach(errorElement => errorElement.remove());
        removeClasses.forEach(cssClass => inputElement.classList.remove(cssClass));
    })
}

const formValidate = () => {
    console.log("Form Submitted");
    let submitForm = true;

    for(let field of Object.keys(fields)){
        let inputElement = document.getElementById(field);
        let fieldObj = fields[field];
        let inputValue = inputElement.value;
        let errorMessage = "";

        let errorElements = inputElement.parentElement.getElementsByClassName("error");
        Array.from(errorElements).forEach(errorElement => errorElement.remove());

        if (fieldObj.required){
            
            if(inputValue === ""){
                errorMessage = `${fieldObj.name} is required`;
            } else {
                const re = new RegExp(fieldObj.regex);
                if(!re.test(inputValue)){
                    errorMessage = fieldObj.message || `${fieldObj.name} is not valid`;
                }
            }

            if(errorMessage !== ""){
                submitForm = false;
                inputElement.classList.add("error-border");
                inputElement.classList.add("animation");
                setTimeout(() => {
                    inputElement.classList.remove("animation");
                }, 500);

                let errorElement = document.createElement('span');
                errorElement.setAttribute("class", "error");
                errorElement.innerText = errorMessage;
                inputElement.parentNode.appendChild(errorElement);
            }
        }

        console.log(field);
    }
    return submitForm;
}



