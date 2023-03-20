<template>
    <div>
        <div class="card">
            <h5>Basic</h5>
            <Chart type="line" :data="basicData" :options="basicOptions" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            Cars:[100],
            basicData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Price per day',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: true,
                        borderColor: '#42A5F5',
                        tension: .4,
                        
                    },
                    
                ]},
        }
    }
}
            
</script>


