import NavBar from "./NavBar"
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS, BarElement, LineElement, PointElement, CategoryScale, LinearScale} from 'chart.js'

ChartJS.register(
    BarElement,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale
)


const Graficas = () => {

    const data = {
        labels: ['IPC1', 'IPC2', 'Inter 1'],
        datasets: [{
          label: 'Notas del Curso',
          data: [65, 59, 80],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
          ],
          borderWidth: 1
        }]
      };

    return (
        <>
            <NavBar/>
            <h1>Grafica 1</h1>
            <Bar data={data}/>
        </>
    )
}

export default Graficas