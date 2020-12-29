// onload code
window.addEventListener("load", tables);

function tables() {
// select and for iterate
var tbody = d3.select("tbody");
    
    data.forEach((ufoSightings) => {
        let row = tbody.append("tr");
    for (const [key, value] of Object.entries(ufoSightings)) {
        let cell = row.append("td");
        cell.text(value);
    }
});

}

//On click to run this function


function FilterFunction() {

var tbody = d3.select("tbody");
tbody.html("");

    var KEYElement = d3.select("#KEY");
    var KEYValue = KEYElement.property("value");

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value"); 

    switch(KEYValue) { 
        case "date": 
        var filteredData = data.filter(ufoSighting => ufoSighting.datetime === inputValue); 
        break; 
        case "city": 
        var filteredData = data.filter(ufoSighting => ufoSighting.city === inputValue);
        break;
        case "state": 
        var filteredData = data.filter(ufoSighting => ufoSighting.state === inputValue); 
        break; 
        case "country": 
        var filteredData = data.filter(ufoSighting => ufoSighting.country === inputValue);
        break;
        case "shape": 
        var filteredData = data.filter(ufoSighting => ufoSighting.shape === inputValue);
        break;
    }

    console.log(filteredData);
    //print out filtered data 
    filteredData.forEach((ufoSightings) => {
        let row = tbody.append("tr");
    for (const [key, value] of Object.entries(ufoSightings)) {
        let cell = row.append("td");
        cell.text(value);
    }
});

}


