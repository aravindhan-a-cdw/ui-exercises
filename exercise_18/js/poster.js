
import { createElement } from "./helpers.js";

export const populatePosters = (postersData) => {

    const posterFragment = document.createDocumentFragment();

    for (const poster of postersData) {
        const posterDiv = createElement('div', {class: 'poster'});
        const posterImg = createElement('img', {src: poster.imageUrl, alt: poster.title});

        posterDiv.appendChild(posterImg);
        posterFragment.appendChild(posterDiv);
    }
    const postersElement = $('#posters').empty(); // Get postersElement and clear the inner content
    postersElement.append(posterFragment);
}
