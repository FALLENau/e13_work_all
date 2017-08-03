var ColumnChart = function() {
  var container = document.querySelector('#column-chart')

  var chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: container
    },
    title: {
      text: 'Our Favourite Programming Languages'
    },
    series: [{
      name: "Cohort e13",
      data: [{y: 8, color: '#D13232'}, {y: 12, color: '#ff803e'}, {y: 3, color: '#37963C'}, {y: 1, color: '#586FC4'}]
    }],
    xAxis: {
      categories: ['Java', 'JavaScript', 'Ruby', 'Php']
    }
  })
}
