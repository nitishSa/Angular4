import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropDirectiveModule} from "angular4-drag-drop";
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { GridStackModule } from 'ng4-gridstack';
import {WindowRef} from './windowRef';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { GridStackCompComponent } from './grid-stack-comp/grid-stack-comp.component';
import {ChartComponent} from './chart.component';
import {MainChartDirective} from './main-chart.directive';

import {ChartServiceService} from './chart-service.service';
import { DragDropChartComponent } from './drag-drop-chart/drag-drop-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    GridStackCompComponent,
    ChartComponent,
    MainChartDirective,
    DragDropChartComponent
  ],
  entryComponents: [ ChartComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    HttpModule,
    // Specify your library as an import
    GridStackModule,
     Ng2DragDropModule.forRoot()
  ],
  providers: [WindowRef,ChartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
