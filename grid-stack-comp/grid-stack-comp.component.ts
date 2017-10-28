import { Component, OnInit,AfterViewInit,Input,ViewChildren,ComponentFactoryResolver,QueryList,ViewChild,ElementRef,OnChanges,SimpleChanges } from '@angular/core';
import * as jQuery from 'jquery';
import * as _ from 'lodash';
import { Chart } from 'angular-highcharts';
import { NgModel } from '@angular/forms';

import {MainChartDirective} from '../main-chart.directive';
import {MainChartComponent} from '../main-chart.component';
import {ChartServiceService} from '../chart-service.service';
import {ChartItem} from '../chart-item';
declare var $: any;


@Component({
  selector: 'app-grid-stack-comp',
  templateUrl: './grid-stack-comp.component.html',
  styleUrls: ['./grid-stack-comp.component.css']
})
export class GridStackCompComponent implements AfterViewInit,OnInit,OnChanges {
  @Input() chart: ChartItem[];
  @ViewChildren(MainChartDirective) adHost: MainChartDirective[];
  @ViewChild("chartContainer") headerEl: ElementRef;
  @ViewChild(MainChartDirective) chartDirective: MainChartDirective;
  interval: any;
  noOfCharts = 0;


  constructor(private componentFactoryResolver: ComponentFactoryResolver, private chartService:ChartServiceService) { }

  ngOnInit() {
    this.noOfCharts = this.chart.length;

  }

  ngAfterViewInit() {

    for(let i=0;i<this.chart.length;i++){
      this.loadComponent(this.chart[i]);
    }

  }

  onUpdate(event){
    let charts = this.chartService.getCharts();
      this.loadComponent(charts[this.chart.length-1]);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("DO check called");
  }

  loadComponent(chartItemArg: ChartItem) {
    //this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    let that = this;
    let componentFactory = that.componentFactoryResolver.resolveComponentFactory(chartItemArg.component);
    //let viewContainerRef = that.adHost['_results'][index].viewContainerRef;
    let viewContainerRef = that.chartDirective.viewContainerRef;
    let componentRef = viewContainerRef.createComponent(componentFactory);
    that.updateGridStack();
      (<MainChartComponent>componentRef.instance).chart = chartItemArg.data;
  }

  updateGridStack(){
    var listOfGridStackEle = $('.grid-stack').find('.grid-stack-item');
    for(let indexOfGrid=0; indexOfGrid<listOfGridStackEle.length; indexOfGrid++){
      let ref = $('.grid-stack').gridstack();
      // ref.gridstack(options);
      let gridStackRef = ref.data('gridstack');
      let str = $(listOfGridStackEle[indexOfGrid]);//'<div id="gsi-1" class="grid-stack-item canvas_top draggable" data-gs-x="0" data-gs-y="0" data-gs-width="3" data-gs-height="2" data-gs-auto-position="1"><div class="grid-stack-item-content"><ng-template chart-host></ng-template></div></div>';
       gridStackRef.makeWidget(str);

    }

  }
}
