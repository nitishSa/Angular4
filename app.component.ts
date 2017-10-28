import { Component, OnInit,ViewChildren, QueryList, ViewChild, ChangeDetectorRef } from '@angular/core';
import {GridStackCompComponent} from './grid-stack-comp/grid-stack-comp.component';
import { FormGroup, FormControl} from '@angular/forms';
import {WindowRef} from  './windowRef';
import { DragDropDirectiveModule} from "angular4-drag-drop";
import { Ng2DragDropModule } from 'ng2-drag-drop';
import * as jQuery from 'jquery';
import * as _ from 'lodash';
import { Chart } from 'angular-highcharts';
import {ChartItem} from './chart-item';
import {ChartServiceService} from './chart-service.service';
declare var $: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    chart : ChartItem[];
    constructor(private chartServiceService:ChartServiceService){}
     @ViewChild(GridStackCompComponent ) child: GridStackCompComponent;
    ngOnInit() {
        this.chart = this.chartServiceService.getCharts();
      }
     ngAfterViewInit(){

    }
}
