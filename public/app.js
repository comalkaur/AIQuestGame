import { useRef, useEffect } from "react";
import * as d3 from "d3";

// Sample historical data
const historicalData = [
  { year: 1492, event: "Christopher Columbus Discovers America", significance: 9 },
  { year: 1776, event: "American Declaration of Independence", significance: 10 },
  { year: 1914, event: "Start of World War I", significance: 8 },
  { year: 1945, event: "End of World War II", significance: 10 },
  { year: 1969, event: "First Man on the Moon", significance: 7 },
  { year: 2001, event: "9/11 Attacks", significance: 9 },
];

const App = () => {
  const svgRef = useRef();
  const width = 800;
  const height = 400;

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid black");

    const x = d3.scaleBand()
      .domain(historicalData.map(d => d.year))
      .range([0, width])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, 10])
      .range([height, 0]);

    svg.selectAll(".bar")
      .data(historicalData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.year))
      .attr("y", d => y(d.significance))
      .attr("width", x.bandwidth())
      .attr("height", d => height - y(d.significance))
      .attr("fill", "steelblue");

    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append("g")
      .call(d3.axisLeft(y));
  }, []);

  // Make sure the return statement is inside the component function
  return (
    <div className="App">
      <header>
        <h1>Historical Events & Their Significance</h1>
      </header>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default App;
