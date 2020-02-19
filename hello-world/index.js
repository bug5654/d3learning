d3.select('h1').style('color', 'red')
    .attr('class', 'heading')
    .text("You'll never guess what was here!")

d3.select('body').append('p')
    .text('Dynamic Paragraph')
    .style('font-family', "monospace")