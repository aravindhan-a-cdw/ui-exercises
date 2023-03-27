export const createElement = (type, attributes = null) => {
    const element = document.createElement(type);

    if (attributes !== null){
        for(const key of Object.keys(attributes)) {
            element.setAttribute(key, attributes[key]);
        }
    }
    return element;
}