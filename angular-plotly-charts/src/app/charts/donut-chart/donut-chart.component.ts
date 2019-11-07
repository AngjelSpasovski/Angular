import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


import * as Plotly from 'plotly.js';
import {Config, Data, Layout} from 'plotly.js';

@Component({
  selector: 'plotly-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  @ViewChild('chart') el: ElementRef;

  constructor() { }

  ngOnInit() {
    this.basicChart();

  }

  basicChart(){

    const data = [{
      x: [1,2,3,4,5],
      y: [1,2,4,8,16]
    }]

    const style = {
      margin: { t: 0  }
    }

    Plotly.plot( 'myPlotlyDiv', data, style );
  }
}
