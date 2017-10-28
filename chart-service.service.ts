import { Injectable } from '@angular/core';
import {ChartItem} from './chart-item';
import {ChartComponent} from './chart.component';
import * as jQuery from 'jquery';
import * as _ from 'lodash';
import { Chart } from 'angular-highcharts';
declare var $: any;


@Injectable()
export class ChartServiceService {
  items : ChartItem[] = [];
  constructor() { }
  getCharts(){
    return this.items;
  }

  setCharts(){
      this.items.push(new ChartItem(ChartComponent, {
            chart: {
              type: 'line'
            },
            title: {
              text: 'Linechart'
            },
            credits: {
              enabled: false
            },
            series: [{
              name: 'Line 1',
              data: [1, 2, 3]
            }]
          }));
  }

}
