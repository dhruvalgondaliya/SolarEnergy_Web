// Sample data for demonstration
const solarData = [
    { image: "asset 9.jpeg", heading: "Solar Panels", description: "We Are pioneers of solar & renewable <br> energy industry" },
    { image: "asset 6.jpeg", heading: "Solar Panels", description: "We Are pioneers of solar & renewable <br> energy industry" },
];

const windData = [
    { image: "asset 7.jpeg", heading: "Hydropower Plants", description: "We Are pioneers of solar & renewable <br> energy industry" },
    { image: "asset 4.jpeg", heading: "Hydropower Plants", description: "We Are pioneers of solar & renewable <br> energy industry" },
];

const hydropowerData = [
    { image: "asset 5.jpeg", heading: "Wind Turbines", description: "We Are pioneers of solar & renewable <br> energy industry" },
    { image: "asset 8.jpeg", heading: "Wind Turbines", description: "We Are pioneers of solar & renewable <br> energy industry" },
];

filter('all');

function filter(category) {
    let data;
    switch (category) {
        case 'all':
            data = solarData.concat(windData, hydropowerData);
            break;
        case 'solar':
            data = solarData;
            break;
        case 'wind':
            data = windData;
            break;
        case 'hydropower':
            data = hydropowerData;
            break;
        default:
            console.error("Invalid category");
            return;
    }

    // data in ui
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('col-md-6', 'col-lg-4', 'pioneers');

        card.innerHTML = `  <div class="col-lg-4 col-md-6 mt-2" id="main-data">
                            <div class="pioneers">
                                    <div class="img-fluid">
                                        <img src="./img/${item.image}" alt="" class=" rounded-3" id="img-height">
                                    </div>
                                    <div class="solar-panel pt-3">
                                        <h5 class="mt-2" style="color: #32C36C;"> ${item.heading}</h5>
                                        <p>${item.description}</p>
                                    </div>
                                </div>
                            </div>`;

        dataContainer.appendChild(card);
    });



}
