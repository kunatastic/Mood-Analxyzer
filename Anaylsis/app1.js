// Load google charts
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var obj = sessionStorage.getItem("Face-data");
  obj = JSON.parse(obj);
  console.log(obj);

  var data = google.visualization.arrayToDataTable([
    ["Task", "Percentage"],
    ["Angry", obj.expression.angry],
    ["Disgusted", obj.expression.disgusted],
    ["Fearful", obj.expression.fearful],
    ["Happy", obj.expression.happy],
    ["Neutral", obj.expression.neutral],
    ["Sad", obj.expression.sad],
    ["Surprised", obj.expression.surprised],
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = { title: "Your Average Day", width: 550, height: 400 };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(
    document.getElementById("piechart-1")
  );
  chart.draw(data, options);
}
