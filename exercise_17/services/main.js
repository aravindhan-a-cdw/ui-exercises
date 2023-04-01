console.log("Script Started");

const handleLocationData = (jsonData) => {
    const tableFragment = document.createDocumentFragment();
    jsonData.forEach(data => {
        const tableRow = document.createElement('tr');
        let tableData;
        // Add country image
        tableData = document.createElement('td');
        {
            const image = document.createElement('img');
            image.setAttribute('src', `../assets/images/${data?.country}.png`);
            image.setAttribute('alt', `${data?.country} flag icon`);
            tableData.appendChild(image);
        }
        tableRow.appendChild(tableData);

        tableData = document.createElement('td');
        tableData.innerText = data.state;
        tableRow.appendChild(tableData);

        tableData = document.createElement('td');
        tableData.innerText = data.city;
        tableRow.appendChild(tableData);

        tableData = document.createElement('td');
        tableData.innerText = data.contact;
        tableRow.appendChild(tableData);

        tableFragment.appendChild(tableRow);
    })

    console.log(document.getElementById("tab-3").getElementsByTagName("tbody")[0]);

    document.getElementById("tab-3").getElementsByTagName("tbody")[0]?.appendChild(tableFragment);
}

$(document).ready(() => {

    // Initialize tabs using Jquery
    $("#tabs").tabs({
        classes: {
            "ui-tabs": "tabs-container",
            "ui-tabs-nav": "nav-bar capitalize",
        }
    });
    // Set height of tabs
    $("#tabs div.ui-tabs-panel").css({
        'height': $("#tab-1").outerHeight(),
        'overflow': 'auto'
    });

    // Initialize accordion
    $("#accordion").accordion({
        heightStyle: 'content'
    });

    $.get({
        url: '/exercise_17/data/locations.json',
        success: (data) => {
            console.log(data);
            handleLocationData(data);
        }
    });
})