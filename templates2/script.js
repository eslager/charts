  function drawLineChart() {
    var jsonData = $.ajax({
        url: 'https://eslager.github.io/charts/templates2/covid.json',
        dataType: 'json',
      }).done(function (results) {

        var labels = [], data=[];
           results["packets"].forEach(function(packet) {
             labels.push(packet.country);
             data.push(packet.mortality_rate);
           });

        // var mortData = {
        //   labels: labels,
        //   datasets : [{
        //     data: data
        //   }]
        // };
     var ctx = document.getElementById("myLineChart2");
     var myLineChart2 = new Chart(ctx, {
       type: 'line',
       data: {
         labels: labels,
         datasets: [{
           data: data
         }]
       }
     });

  return myLineChart2;
     });
}
drawLineChart();
