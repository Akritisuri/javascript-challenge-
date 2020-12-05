// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(data);

data.forEach((ufoSightings) => {
    console.log(ufoSightings);

    var row = tbody.append("tr");

    Object.defineProperties(ufoSightings_.forEach(([key, value]) =>
        console.log(key, value); 
    // appending cells to rows for each value 
        var cell = row.append("td"); 
        cell.text(value);
    });
});

//select buttons 
var filterButton = d3.select("#filter-btn"); 

//using D3 to attache a click handler 
filterButton.on("click", function () {
    tbody.html(""); 

    //prevent page from refreshing
    d3.event.preventDefault();

    var inputElement.d3.select("#datetime");

    var inputValue = inputElement.property("value"); 

    console.log(inputValue); 
    console.log(data); 

    var filteredData = data.filter(ufoSighting => ufoSighting.datatime === inputValue); 

    console.log(filteredData); 


}