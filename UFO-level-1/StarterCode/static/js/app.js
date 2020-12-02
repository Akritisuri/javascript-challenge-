// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("filter-btn"); 
button.on("click", function() { 
    d3.event.preventDefault();

    var datetimeElement = d3.select("#datetime"); 
    var citynameElement = d3.select("#cityname"); 
    var statenameElement = d3.select("#statename"); 
    var countrynameElement = d3.select("#countryname"); 
    var shapenameElement = d3.select("#shapename");
}
