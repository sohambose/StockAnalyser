

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class ForexDataService {

    constructor(private http: HttpClient) {
    }

    fetchLiveFXRate() {
        return this.http
            .get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=INR&apikey=FANHHINXKLIQP36B')
            .pipe(
                map(responseData => {
                    const arrFxData = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            arrFxData.push({ ...responseData[key], id: key });
                        }
                    }
                    return arrFxData;
                })
            )
    }

    fetchCryptoCurrencyRate(){
        return this.http
            .get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=INR&apikey=FANHHINXKLIQP36B')
            .pipe(
                map(responseData => {
                    const arrCryptoRate = [];
                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            arrCryptoRate.push({ ...responseData[key], id: key });
                        }
                    }
                    return arrCryptoRate;
                })
            )
    }
}