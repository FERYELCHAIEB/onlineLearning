import React,{useState,useEffect} from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
import {Bar} from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)
const Chart = () => {
const [chart,setChart] = useState([])


    var baseUrl ="http://api.coinranking.com/v2/coins/?limit=10"
    var proxyUrl ='http://cors-anywhere.herokuapp.com/'
    var apiKey = 
    "coinranking23c07bc58274ded7003a9fa26534b4da74dfd4141ce11b03"
  
  useEffect(()=>{
const fetchCounter= async()=>{
    await fetch(`${proxyUrl}${baseUrl}`,{
        method:'GET',
        headers: {
            'Accept' :'application/json',
            'Content-Type': 'application/json',
            'x-access-token': `${apiKey}`,
            'Access-Control-Allow-Origin': '*'
        }
    }).then((response)=>{
      response.json().then((json)=>{
        console.log(json)
      })
    }) .catch(err=>{
        console.log(err);
    })


}
fetchCounter()   
},[baseUrl,proxyUrl,apiKey])
  
  
  
    var  data= {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    var  options= {
        maintainAspectRation:false,
        scales: {
            y: {
                beginAtZero: true
            } 
        },
        legend:{
            labels:{
                fontSize: 2
            }
        }
    }
  return (
    <div>
        <Bar
        data={data}
        height={400}
        options={options}
        />
    </div>
  )
}

export default Chart