import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class HistoricalDataService {

    constructor(private http: HttpClient) {
    }

    fetchHistoricalData() {
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
                    return HistoricalArray;
                })
            )
        /*    map(responseData => {
                const HistoricalArray = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        HistoricalArray.push({ ...responseData[key], id: key });
                    }
                }
                return HistoricalArray[1];
            })
        ) */
    }
}