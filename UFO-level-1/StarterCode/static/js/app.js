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
