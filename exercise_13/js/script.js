
import data from '../data/friends.json' assert {type: 'json'}

const createElement = (type, attributes = {}) => {
    const element = document.createElement(type);
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    return element;
}

function getContactCardNode({ first_name, last_name, email, img }) {

    const fullName = first_name + ' ' + last_name;

    const finalDiv = createElement('div', { class: 'contact-container flex' });

    let contactContainer = createElement('div', { class: 'contact flex' });
    finalDiv.appendChild(contactContainer);

    let informationContainer = createElement('div', { class: 'information' });
    contactContainer.appendChild(informationContainer);

    // Name element
    let parent = document.createElement('h4');
    let child = document.createTextNode(fullName);
    parent.append(child);

    informationContainer.append(parent);

    // Email Element
    parent = document.createElement('h5');
    child = document.createTextNode(email);
    parent.append(child);

    informationContainer.append(parent);

    parent = createElement('div', { class: 'image-container' });
    child = createElement('img', { src: img, alt: `Image of User ${fullName}` })
    parent.append(child);

    contactContainer.append(parent);
    contactContainer.append(informationContainer);

    return finalDiv;
}

const addCardsToDom = () => {
    const contactsFragment = document.createDocumentFragment();
    data.forEach(data => {
        let contactContainer = getContactCardNode(data);
        contactsFragment.appendChild(contactContainer);
    })
    document.getElementById('contacts').appendChild(contactsFragment);
}

addCardsToDom();






