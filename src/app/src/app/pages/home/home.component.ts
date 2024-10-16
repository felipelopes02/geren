import { Component, AfterViewInit } from '@angular/core';
import { NavBarComponent } from '../../componentes/nav-bar/nav-bar.component';
import { Chart, registerables } from 'chart.js';

// Registrar os componentes do Chart.js
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [NavBarComponent] // Certifique-se de que o NavBarComponent está importado corretamente
})
export class HomeComponent implements AfterViewInit {
  public barChart!: Chart;
  public lineChart!: Chart;

  // Inicializar os gráficos após a visualização ser carregada
  ngAfterViewInit(): void {
    this.initializeCharts();
  }

  private initializeCharts() {
    console.log("Initializing charts");

    // Gráfico de barras
    this.barChart = new Chart('barChartCanvas', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          { data: [35, 40, 60, 70, 46, 55, 80, 90, 56, 70, 75, 65], label: 'Consumos' },
          { data: [50, 60, 70, 85, 75, 85, 90, 100, 95, 90, 100, 110], label: 'Compras' }
        ]
      },
      options: {
        responsive: true,
      }
    });

    // Gráfico de linha
    this.lineChart = new Chart('lineChartCanvas', {
      type: 'line',
      data: {
        labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
          { data: [100, 95, 80, 85, 90, 110], label: 'Compras' }
        ]
      },
      options: {
        responsive: true,
      }
    });
  }
}
