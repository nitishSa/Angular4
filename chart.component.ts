import { Component, Input,OnInit }  from '@angular/core';
import { MainChartComponent }       from './main-chart.component';
import * as jQuery from 'jquery';
import * as _ from 'lodash';
import { Chart } from 'angular-highcharts';
declare var $: any;

@Component({
  template: `
  <div class="grid-stack-item canvas_top draggable"  data-gs-height="6" data-gs-width="6" data-gs-x="4" data-gs-y="0">
  <div class="grid-stack-item-content">
  <div class="panel panel-default grid-stack-item-content " >
    <div class="panel-body">
        <div id="showchart">
          <div class="chart-componet">
            <div  [chart]="chart"></div>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
  `,
  styles : [`
    .chart-componet
    { display: table-cell;
      position: absolute;
      width: 100%;
    }
    .grid-stack-item {
      position: relative;
      z-index: 1;
      width: 400px;
    }
    .grid-stack-item[data-gs-width="3"]  { width: 100% }
    .grid-stack-item[data-gs-width="2"]  { width: 66.66666667% }
    .grid-stack-item[data-gs-width="1"]  { width: 33.33333333% }

    .grid-stack-item[data-gs-x="2"]  { left: 66.66666667% }
    .grid-stack-item[data-gs-x="1"]  { left: 33.33333333% }

    .grid-stack-item-content .draglist {
      color: #2c3e50;
      text-align: center;
      background-color: #18bc9c;
    }
    `
  ]
})
export class ChartComponent implements MainChartComponent {
  @Input() chart: any;
  ngOnInit(){

    this.chart = new Chart(this.chart);

  }
  chartInit : any;
}
