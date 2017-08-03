var PieChart = function() {
  var container = document.querySelector('#pie-chart')

  var chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: container
    },
    title: {
      text: "Pokemon Types I've Caught"
    },
    series: [{
      name: "Type",
      data: [{
        name: "Fire",
        y: 74,
        color: "#d13232"
      }, {
        name: "Water",
        y: 24,
        color: "#586fc4"
      }, {
        name: "Grass",
        y: 6,
        color: "#37963c",
        sliced: true
      }]
    }]
  })
}
