let selectedShape = null;
let sideOrRadius = null;

const shapesObject = {
    circle: {
        input: {
            text: "2. Enter Radius"
        },
        output: {
            radius: {
                formula: "r",
                value: () => (Number.isInteger(sideOrRadius) ? sideOrRadius : sideOrRadius.toFixed(2)) + ' cm',
            },
            area: {
                formula: "πr<sup>2</sup>",
                value: () => {
                    const area = Math.PI * sideOrRadius * sideOrRadius;
                    return (Number.isInteger(area) ? area : area.toFixed(2)) + ' sq cm';
                },
            },
            perimeter: {
                formula: "2πr",
                value: () => {
                    const perimeter = (2 * Math.PI * sideOrRadius);
                    return (Number.isInteger(perimeter) ? perimeter : perimeter.toFixed(2))+ ' cm';
                }
            }
        }
    },
    triangle: {
        input: {
            text: "2. Enter Side (Base & Height)"
        },
        output: {
            side: {
                formula: "s",
                value: () => (Number.isInteger(sideOrRadius) ? sideOrRadius : sideOrRadius.toFixed(2)) + ' cm',
            },
            area: {
                formula: '0.433 * s * s',
                value: () => {
                    const area = 0.433 * sideOrRadius * sideOrRadius;
                    return (Number.isInteger(area) ? area : area.toFixed(2)) + ' sq cm';
                },
            },
            perimeter: {
                formula: '3 * s',
                value: () => {
                    const perimeter = 3 * sideOrRadius;
                    return (Number.isInteger(perimeter) ? perimeter : perimeter.toFixed(2))+ ' cm';
                }
            }
        }
    },
    square: {
        input: {
            text: "2. Enter Side"
        },
        output: {
            side: {
                formula: "s",
                value: () => (Number.isInteger(sideOrRadius) ? sideOrRadius : sideOrRadius.toFixed(2)) + ' cm',
            },
            area: {
                formula: 's * s',
                value: () => {
                    const area = sideOrRadius * sideOrRadius;
                    return (Number.isInteger(area) ? area : area.toFixed(2)) + ' sq cm';
                },
            },
            perimeter: {
                formula: '4 * s',
                value: () => {
                    const perimeter = 4 * sideOrRadius;
                    return (Number.isInteger(perimeter) ? perimeter : perimeter.toFixed(2))+ ' cm';
                }
            }
        }
    }

}

const renderTableData = (shape, sideOrRadius) => {
    console.log(shapesObject[shape]);
    const outputObject = shapesObject[shape].output;
    const tableBody = outputSection.getElementsByTagName('tbody')[0];
    tableBody.replaceChildren('');
    console.log(tableBody);
    for(let key of Object.keys(outputObject)) {
        const tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerText = key;
        tr.appendChild(td);
        for(let property of Object.keys(outputObject[key]) ){
            td = document.createElement('td');
            let outputField = outputObject[key][property];
            td.innerHTML = typeof outputField === 'string' ? outputField: outputField(sideOrRadius);
            tr.appendChild(td);
        }
        tableBody.appendChild(tr);
    }
}

const chooseShapeSection = document.getElementById('choose-shape');
const valueInputSection = document.getElementById("user-input");
const outputSection = document.getElementById("output");

{
    // Section 1: Choose Shape Event Listeners
    const shapes = chooseShapeSection.querySelectorAll("div.shape-container > div");
    const nextButton = chooseShapeSection.querySelector('.btn');

    // Block to add event listeners to shapes
    const clearShapeSelection = () => {
        const tickElements = chooseShapeSection.querySelectorAll('div.check');
        Array.from(tickElements).forEach(element => {
            element.style.visibility = 'hidden';
        });
    }

    shapes.forEach(shapeElement => {
        shapeElement.addEventListener('click', (event) => {
            if(event.target !== shapeElement) return;
            clearShapeSelection();
            selectedShape = shapeElement.getAttribute("data-shape");
            const tickElement = shapeElement.querySelector('.check');
            tickElement.style.visibility = 'visible';
            nextButton.style.visibility = 'visible';

            const outputShapeElement = document.getElementById("output-shape");
            outputShapeElement.setAttribute('class', selectedShape);
            outputSection.getElementsByClassName('title')[0].innerHTML = selectedShape.charAt(0).toUpperCase() + selectedShape.slice(1);
        })
    })

    nextButton.addEventListener('click', () => {
        nextButton.style.visibility = 'hidden';
        // Switch Section
        chooseShapeSection.style.display = 'none';
        valueInputSection.style.display = 'block';
        clearShapeSelection();

        const title = valueInputSection.getElementsByClassName('title')[0];
        title.innerText = shapesObject[selectedShape].input.text;
    })

}

{
    // Section 2: Calculate Event Listeners
    const nextButton = valueInputSection.querySelector('.btn');

    const inputElement = document.getElementsByName('side-radius')[0];
    inputElement.addEventListener('input', (event) => {
        const inputValue = event.target.value;
        if (inputValue === '' || isNaN(inputValue)) {
            nextButton.style.visibility = 'hidden';
        } else {
            sideOrRadius = parseFloat(inputValue);
            nextButton.style.visibility = 'visible';
        }
    })

    nextButton.addEventListener('click', () => {
        inputElement.value = '';
        valueInputSection.style.display = 'none';
        outputSection.style.display = 'block';
        nextButton.style.visibility = 'hidden';

        renderTableData(selectedShape, sideOrRadius);

        console.log(selectedShape, sideOrRadius);

    })

}

{
    // Section 3: Output Event Listeners
    const startAgainButton = outputSection.querySelector('.btn');

    startAgainButton.addEventListener('click', () => {
        outputSection.style.display = 'none';
        chooseShapeSection.style.display = 'block';
    })

}

