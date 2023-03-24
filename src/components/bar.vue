<template>
    <div class="card">
        <div>Total cars: {{ carCount }}</div>
      <canvas id="myChart"></canvas>
      
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto'
  
  export default {
    data() {
      return {
        chart: null,
        chartData: null,
        chartOptions: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
        carCount: null,
      };
    },
    async mounted() {
      try {
        const response = await fetch('http://127.0.0.1:8000/cars/')
        const cars = await response.json()
  
        this.carCount = cars.length
  
        this.chartData = {
          labels: ["Cars"],
          datasets: [
            {
              label: 'Price per day',
              data: cars.map((car) => this.carCount * 240),
              backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
              ],
              borderColor: [
                'rgb(54, 162, 235)',
              ],
              borderWidth: 1,
            },
          ],
        }
  
        const ctx = document.querySelector('#myChart').getContext('2d')
        if (this.chart) {
          this.chart.destroy();
        }
        this.chart = new Chart(ctx, {
          type: 'bar',
          data: this.chartData,
          options: this.chartOptions,
        })
      } catch (e) {
        console.error(e)
      }
    },
  }
  </script>
  