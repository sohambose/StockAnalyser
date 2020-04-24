import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class StockTechnicalService {
    volume_sum: Number = 0;
    volume_avg: Number = 0;
    IsVolumeIncreased: boolean = false;
    arrStockHistoricalData = [];

    constructor(private http: HttpClient) {
    }

    //--Return Candles array from API.
    getHistoricalData() {
        console.log('Data Fetch From Server Started');
        return this.http
            .get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo')
            .pipe(
                map(responsedata => responsedata["Time Series (Daily)"])
            )
            .pipe(
                map(responseData => {
                    const HistoricalArray = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            HistoricalArray.push({ ...responseData[key], id: key });
                        }
                    }
                    console.log('Data Fetch From Server Completed');
                    this.arrStockHistoricalData = HistoricalArray;
                    return HistoricalArray;
                })
            )
    }

    dovolumneAnalysis(arrCandles: any[], days: number) {
        alert('In func');
        for (let i = 0; i < days - 1; i++) {
            console.log(arrCandles[i]["5. volume"]);
            this.volume_sum = Number(this.volume_sum) + Number(arrCandles[i]["5. volume"]);
        }
        alert(this.volume_sum);
        this.volume_avg = Number(this.volume_sum) / Number(days);
        if (this.volume_avg < Number(arrCandles[days - 1]["5. volume"])) {
            this.IsVolumeIncreased = true;
        }
        return this.IsVolumeIncreased;
    }
}