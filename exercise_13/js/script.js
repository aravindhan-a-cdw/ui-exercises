
import data from '../data/friends.json' assert {type: 'json'}

console.log(data)



function getContactCardNode({first_name, last_name, email, img}) {
    let fullName = first_name + ' ' + last_name;

    let nameTextNode = document.createTextNode(fullName);
    let emailTextNode = document.createTextNode(email);

    let nameElement = document.createElement('h4');
    nameElement.append(nameTextNode);
    let emailElement = document.createElement('h5');
    emailElement.append(emailTextNode);

    let imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'image-container')
    let image = document.createElement('img')
    image.setAttribute('src', img);
    image.setAttribute('alt', `Image of User ${fullName}`);
    imageContainer.appendChild(image);

    let informationContainer = document.createElement('div');
    informationContainer.setAttribute('class', 'information');
    informationContainer.appendChild(nameElement);
    informationContainer.appendChild(emailElement);

    let contactContainer = document.createElement('div')
    contactContainer.setAttribute('class', 'contact flex');
    contactContainer.appendChild(imageContainer);
    contactContainer.appendChild(informationContainer);

    let finalDiv = document.createElement('div')
    finalDiv.setAttribute('class', 'contact-container flex');
    finalDiv.appendChild(contactContainer);

    return finalDiv;
}

let contactsContainer = document.getElementById('contacts');
let contactsFragment = document.createDocumentFragment();

data.forEach(data => {
    let contactContainer = getContactCardNode(data);
    contactsFragment.appendChild(contactContainer);
})

contactsContainer.replaceChildren(contactsFragment);
// contactsContainer.appendChild(contactsFragment);



