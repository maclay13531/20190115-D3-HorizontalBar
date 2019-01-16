$(document).ready(function () {
    var data = [15, 20, 50, 29, 40];

    var barSize = {
        width: 450,
        barHeight: 20
    }

    var x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, barSize.width]);

    var chart = d3.select(".chart")
    .attr("width", barSize.width)
    .attr("height", barSize.barHeight * data.length);

    var bar = chart.selectAll("g")
    .data(data)
    .enter()
    .append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * barSize.barHeight + ")"; });

    bar.append("rect")
    .attr("width", x)
    .attr("height", barSize.barHeight - 1);

    bar.append("text")
    .attr("x", function(d) { return x(d) - 3; })
    .attr("y", barSize.barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; })
});