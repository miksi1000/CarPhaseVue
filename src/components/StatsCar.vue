
<template>
    <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" />
    </div> 
</template>

<script>
export default {
    
    data() {
        return {
            nummer: 55,
            methods: {
            },
            chartData: {
                labels: ['Autohuset Vestergaard'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [nummer],
                        backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                        borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                        borderWidth: 1
                    }
                ]
            },
            chartOptions: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };
    }
};
</script>
