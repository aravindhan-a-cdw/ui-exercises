// Event Listeners

const newNoteHandler = () => {
    $(document.body).toggleClass('overflow-hidden');
    $('.modal').toggleClass('display-none');
}

const closeModalHandler = () => {
    $(document.body).toggleClass('overflow-hidden');
    $('.modal').toggleClass('display-none');
}

const deleteAllHandler = () => {
    localStorage.removeItem('notes');
    notes = [];
    renderNotes();
}

const addNewNoteHandler = (e) => {
    console.log(e);
    const newNoteData = {};
    newNoteData['title'] = e['notes-title'].value;
    newNoteData['date'] = new Date().toJSON();
    newNoteData['imageUrl'] = e['image-url'].value;
    newNoteData['content'] = e['content'].value;
    newNoteData['color'] = $('.color.selected')[0]?.getAttribute('data-hex-color');

    if(notes === null) {
        notes = [];
    }
    notes.unshift(newNoteData);
    saveToLocalStorage('notes', notes);
    e.reset();
    renderNotes();
    closeModalHandler();
    return false;
}

// Utils

const createElement = (tag, attributes) => {
    console.log(tag, attributes);
    const element = document.createElement(tag);
    for(const attribute of Object.keys(attributes)){
        if(attribute === 'innerText'){
            element.innerText = attributes[attribute];
            continue;
        }
        element.setAttribute(attribute, attributes[attribute]);
    }
    return element;
}

const renderNotes = () => {
    const cardsFragment = document.createDocumentFragment();
    notes.forEach(note => {
        let parent = createElement('div', {
            class: 'card', 
            style: `background-color: ${note.color}`
        });
        // Append Card Title
        let element = createElement('span', {
            class: 'card-title',
            innerText: note.title
        });
        parent.appendChild(element);

        // Append Date Element
        {
            const date = new Date(note.date);
            const month = date.toLocaleString('default', { month: 'short' })
            element = createElement('span', {
                class: 'card-date',
                innerText: `${month} ${date.getDate()}, ${date.getFullYear()}`,
            })
            parent.appendChild(element);
        }

        // Append Image Element if imageUrl is given
        if(note.imageUrl){
            element = createElement('div', {class: 'card-image'});
            {
                const image = createElement('img', {
                    src: note.imageUrl,
                    alt: "Image of notes " + note.title
                })
                element.appendChild(image);
            }
            parent.appendChild(element);
        }

        // Append Content
        element = createElement('p', {class: 'card-content', innerText: note.content});
        parent.appendChild(element);
        cardsFragment.appendChild(parent);
    })
    $('.cards').empty();
    $('.cards').append(cardsFragment);
}

const loadNotesData = () => {
    const notes = localStorage.getItem('notes');
    if(notes === null) {
        return [];
    }
    try{
        return JSON.parse(notes);
    } catch(err) {
        console.log("Data stored in localstorage is not of JSON format");
    }
    return null;
}

const saveToLocalStorage = (key, value) => {
    if(value instanceof Object){
        value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
}

let notes = loadNotesData();

$(document).ready(() => {

    renderNotes();

    const colorsArray = ['EBCCED', 'FCFCFC', 'FFCA71', 'E5EE91', 'FFA78C'];

    const colorsFragment = document.createDocumentFragment();

    colorsArray.forEach( (color, index) => {
        const colorElement = document.createElement('span');
        colorElement.setAttribute('class', 'color');
        colorElement.setAttribute('data-hex-color', '#' + color);
        if(index === 0) {
            colorElement.classList.add('selected');
        }
        colorElement.style.backgroundColor = '#' + color;
        colorsFragment.append(colorElement);
    })
    $('.color-selector').append(colorsFragment);

    $('.color').click(function (e) {
        e.preventDefault();
        $('.color').removeClass('selected');
        $(e.currentTarget).addClass('selected');
    });
})