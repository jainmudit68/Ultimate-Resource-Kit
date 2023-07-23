const ctx = document.getElementById('myChart');
      
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['20','','25','', '30','', '35','', '40','', '60','', '65'],
            datasets: [{
              label: 'Contributions',
              data: [80, 90, 100, 110, 150, 160,180,200,210,230,260, 280, 320],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });

        const pie1=document.getElementById('pie1');
        new Chart(pie1,{
            type: 'doughnut',
            data: {
                labels: [
                    'Top',
                ],
                datasets: [{
                    label: 'Top',
                    data: [78,22],
                    backgroundColor: [
                    'rgb(54, 162, 235)',
                    'white'
                    ],
                    hoverOffset: 4
                }]
            }
        });
        const pie2=document.getElementById('pie2');
        new Chart(pie2,{
            type: 'doughnut',
            data: {
                labels: [
                    'Average'
                ],
                datasets: [{
                    label: 'Average',
                    data: [95,5],
                    backgroundColor: [
                    
                    'rgb(54, 162, 235)',
                    'white'
                    ],
                    hoverOffset: 4
                }]
            }
        });
        const pie3=document.getElementById('pie3');
        new Chart(pie3,{
            type: 'doughnut',
            data: {
                labels: [
                    'Me'
                ],
                datasets: [{
                    label: 'Me',
                    data: [59,41],
                    backgroundColor: [
                    
                    'rgb(54, 162, 235)',
                    'white'
                    ],
                    hoverOffset: 4
                }]
            }
        });


//slider controls
var slider1 = document.getElementById("slider-1");
var output1 = document.getElementById("sliderValue-1");
output1.innerHTML = `${slider1.value}%`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function() {
  output1.innerHTML = `${this.value}%`;
}

var slider2 = document.getElementById("slider-2");
var output2 = document.getElementById("sliderValue-2");
output2.innerHTML = `${slider2.value}%`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function() {
  output2.innerHTML = `${this.value}%`;
}