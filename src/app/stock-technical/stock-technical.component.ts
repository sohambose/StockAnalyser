import { Component, OnInit } from '@angular/core';
import { StockTechnicalService } from './stock-technical.service';

@Component({
  selector: 'app-stock-technical',
  templateUrl: './stock-technical.component.html',
  styleUrls: ['./stock-technical.component.css']
})
export class StockTechnicalComponent implements OnInit {

  numDays: number = 10;
  isFetchingFromServer: boolean = false;
  arrcandles = [];

  constructor(private stocktechnicalservice: StockTechnicalService) { }

  ngOnInit(): void {
  }

  onStartTechnicalAnalysis() {
    //---------Fetch Data From Server and Display OHLCV Data---------------
    this.isFetchingFromServer = true;
    this.stocktechnicalservice.getHistoricalData().subscribe(data => {
      this.isFetchingFromServer = false;
      this.arrcandles = data;
    }, error => {
      console.log(error.message);
    });
    //----------------------------------------------------------------------

    /* this.stocktechnicalservice.dovolumneAnalysis(this.numDays).subscribe(IsVolIncreased=>{

    }) */


  }

}
