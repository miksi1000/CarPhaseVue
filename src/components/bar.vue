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
      const response = await fetch('https://carphase-api.azurewebsites.net/cars/')
      const data = await response.json()

      // Get the count of cars
      const carCount = data.count;
      this.carCount = carCount;

      this.chartData = {
        labels: ["Cars"],
        datasets: [
          {
            label: 'Price per day',
            data: data.results.map((car) => carCount * 240),
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
