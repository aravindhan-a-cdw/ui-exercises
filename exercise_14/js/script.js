
// Dynamic Regex for card expiry 
const currentYear = new Date().getFullYear();
const yearFirstDigit = parseInt(currentYear / 1000);
const yearSecondDigit = parseInt(currentYear / 100) % 10;
const yearThirdDigit = parseInt(currentYear / 10) % 10;
const yearFourthDigit = currentYear % 10;

const cardExpiryRegex = `^(?:${yearFirstDigit}${yearSecondDigit}(?:${yearThirdDigit}[${yearFourthDigit}-9]|[${yearThirdDigit + 1}-9][0-9])|` + 
`2[${yearSecondDigit + 1}-9][0-9][0-9])$`;


// Input fields, Regex Validations and Validation Messages
const fields = {
    "first-name": {
        name: "First Name",
        required: true,
        regex: "^[a-zA-Z]{1,30}$",
        // message: "This is a custom message"
    },
    "last-name": {
        name: "Last Name",
        required: true,
        regex: "^[a-zA-Z]{1,30}$"
    },
    "email": {
        name: "Email Address",
        required: true,
        regex: "(?=^[a-zA-z0-9.\\-_+@]{6,50}$)^\\w+([.\\-_+]?\\w+)*@\\w+([.\\-]?\\w+)*(\\.\\w{2,6})+$"
    },
    "contact": {
        name: "Contact Number",
        required: true,
        regex: "^[0-9]{10}$"
    },
    "pincode": {
        name: "PIN Code",
        required: true,
        regex: "^[0-9]{6}$"
    },
    "card-number": {
        name: "Card Number",
        required: true,
        regex: "^[0-9]{16}$"
    },
    "card-expiry": {
        name: "Card Expiry",
        required: true,
        regex: cardExpiryRegex
    },
    "cvv": {
        name: "CVV",
        required: true,
        regex: "^[0-9]{3,4}$"
    }
}

// Add Event listeners to all input element to remove the error message on change of its input value
for(const field of Object.keys(fields)){
    const inputElement = document.getElementById(field);
    const classesToBeRemoved = ["error-border"];

    inputElement.addEventListener("change", () => {
        const errorElements = inputElement.parentElement.getElementsByClassName("error");
        Array.from(errorElements).forEach(errorElement => errorElement.remove());
        classesToBeRemoved.forEach(cssClass => inputElement.classList.remove(cssClass));
    })
}


// Form Validation function
const formValidate = () => {
    console.log("Form is getting Validated");
    let submitForm = true;
    try {
        for(const field of Object.keys(fields)){
            const inputElement = document.getElementById(field);
            const fieldObj = fields[field];
            const inputValue = inputElement.value;
            let errorMessage = null;
    
            const errorElements = inputElement.parentElement.getElementsByClassName("error");
            Array.from(errorElements).forEach(errorElement => errorElement.remove());
    
            if (fieldObj.required){
                
                if(inputValue === ""){
                    errorMessage = `${fieldObj.name} is required`;
                } else {
                    const re = new RegExp(fieldObj.regex);
                    console.log(re);
                    if(!re.test(inputValue)){
                        errorMessage = fieldObj.message || `${fieldObj.name} is not valid`;
                    }
                }
    
                if(errorMessage !== null){
                    submitForm = false;
                    // Input element is from dom and hence add class instead of setAttribute to prevent overriding existing classes
                    inputElement.classList.add("error-border");
                    inputElement.classList.add("animation");
                    setTimeout(() => {
                        inputElement.classList.remove("animation");
                    }, 500);
    
                    const errorElement = document.createElement('span');
                    // This element is created here and hence setAttribute is better to be used
                    errorElement.setAttribute("class", "error");
                    errorElement.innerText = errorMessage;
                    inputElement.parentNode.appendChild(errorElement);
                }
            }
        }
    } catch(error) {
        console.error("Error Occured while validating the form: ", error.message);
        submitForm = false;
    }
    return submitForm;
}



