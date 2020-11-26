
const svg = d3.select('svg')

svg
  .attr("viewBox", "0 0 960 720")

const axisXGroup = svg
	.append("g")
	.attr("class", "x-axis")
	.attr("transform", "translate(0, 620)")


const axisYGroup = svg
	.append("g")
	.attr("class", "y-axis")
	.attr("transform", "translate(100, 0)")

const axisXText = svg
	.append ("text")
	.attr("class", "x-axis")
	.attr("transform", "translate(480, 670)")
	.text ("x axis")


const axisYText = svg
	.append ("text")
	.attr("class", "y-axis")
	.attr("transform", "translate(20, 360) rotate(-90)")
	.text ("y axis")


const placeTest = function() {
  let inputX = document.querySelector('select[name = valueX]')
  let inputY = document.querySelector('select[name = valueY]')

  let valueX = inputX.value
  let valueY = inputY.value

  let textX = inputX.options[inputX.selectedIndex].innerHTML
  let textY = inputY.options[inputY.selectedIndex].innerHTML

  axisXText.text(textX)
  axisYText.text(textY)


  let maxValueX = d3.max(data, (d, i) => {
    return d[valueX]
  })
  let maxValueY = d3.max(data, (d, i) => {
    return d[valueY]
  })

  let maxValueR = d3.max(data, (d, i) => {
    return d.tot_pop
  })


  const scaleX = d3
    .scaleLinear()
    .domain([0, maxValueX])
    .range([100, 860])

  const scaleY = d3
    .scaleLinear()
    .domain([0, maxValueY])
    .range([620, 100])

  const scaleR = d3
    .scaleSqrt()
    .domain([0, maxValueR])
    .range([0, 30])


  // axis
  const axisX = d3.axisBottom(scaleX)
  	.tickSizeInner (-520)
    .tickSizeOuter(0)
  	.tickPadding (10)
  	.ticks(10, "f")

  const axisY = d3.axisLeft(scaleY)
    .tickSizeInner (-760)
    .tickSizeOuter(0)
  	.tickPadding (10)
    .ticks(10, "f")

  axisXGroup.call(axisX)
  axisYGroup.call(axisY)


  const states = svg
    .selectAll('g.stabr')
    .data(data, (d,i) => { return d.stabr})
    .enter()
    .append('g')
    .attr('class', 'stabr')

  states
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 8)
    .transition()

    // ALTERNATIVE: Circle Size -> Data
    // .attr("r", (d, i) => {
    //   return scaleR(d.tot_pop)
    // })

// ALTERNATIVE: Circle Size -> Data
  // states
  // 	.append("rect")
  // 	.attr("x", -30)
  //   .attr("y", (d,i) => {return -1 * scaleR(d.tot_pop) -35 })
  //   .attr("width", 60)
  //   .attr("height", 30)

  states
    states
  	.append("text")
  	.attr("x", (d,i) => {return -0.5 * scaleR(d.tot_pop) +25 })
    .attr("y", 0)
  	.text((d,i) => { return d.stabr })


  svg
    .selectAll('g.stabr')
    .transition()
    .duration(500)
    .attr('transform', (d, i) => {
      const x = scaleX(d[valueX])
      const y = scaleY(d[valueY])
      return `translate(${x}, ${y})`
    })

  svg
  	.selectAll("g.stabr")
  	.on("mouseover", function(){
    	d3.select(this).raise()
  })


}

placeTest()

const selectTags = document.querySelectorAll('select')

selectTags.forEach(selectTag => {
  selectTag.addEventListener('change', function() {
    placeTest()
  })
})
