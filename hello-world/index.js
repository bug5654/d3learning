d3.select('h1').style('color', 'red')
    .attr('class', 'heading')
    .text("You'll never guess what was here!")

d3.select('body').append('p')
    .text('Dynamic Paragraph')
    .style('font-family', "monospace")

var data = [10, 15, 20, 30]

d3.select('body').append('div')
    .attr('class', 'chart')

d3.select(".chart")
    .selectAll('div')
    .data(data)
        .enter()
        .append("div")
        .style("width", function(d) {return d + "px"})
        .text(function(d) { return d; })