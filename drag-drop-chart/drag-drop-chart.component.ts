import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import * as jQuery from 'jquery';
import * as _ from 'lodash';
import { Chart } from 'angular-highcharts';
declare var $: any;

import {ChartServiceService} from '../chart-service.service';
import {ChartItem} from '../chart-item';
import {ChartComponent} from '../chart.component';

@Component({
  selector: 'app-drag-drop-chart',
  templateUrl: './drag-drop-chart.component.html',
  styleUrls: ['./drag-drop-chart.component.css']
})
export class DragDropChartComponent implements OnInit {
  @Output() update = new EventEmitter<any>();

  constructor(private chartService: ChartServiceService) { }

  ngOnInit() {
    let self = this;
    $( ".drag-items li" ).each(function(){
        $(this).draggable({
            helper: "clone"
        });
    });

    $(".droppable" ).droppable({
          drop: function( event, ui ) {
            if($(ui.draggable[0]).attr('id') == 'line_chart'){
                self.chartService.setCharts();
                self.update.emit();
            }
        }
    })
  }

}
