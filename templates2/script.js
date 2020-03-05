  function drawLineChart() {
    var jsonData = $.ajax({
        url: 'covid.json',
        dataType: 'json',
      }).done(function (results) {

        var labels = [], data=[];
           results["packets"].forEach(function(packet) {
             labels.push(String(packet.country));
             data.push(Number(packet.mortality_rate));
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
