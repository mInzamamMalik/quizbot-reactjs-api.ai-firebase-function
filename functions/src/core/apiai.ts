import * as functions from 'firebase-functions'
import * as _apiai from 'apiai';
import { TextRequestOptions, Event, EventRequestOptions } from 'apiai';

let app = _apiai(functions.config().apiai.access_token);

export class apiai {

    static textQuery = (text: [string] | string, options: { sessionId: string, originalRequest?: object }): Promise<any> => {
        return new Promise((resolve, reject) => {
            let request = app.textRequest(text, options);
            request.on('response', function (response) {
                // console.log(response);
                resolve(response);
            });
            request.on('error', function (error) {
                // console.log(error);
                reject(error);
            });
            request.end();
        })
    }

    static eventQuery = (event: Event, options: { sessionId: string }): Promise<any> => {
        return new Promise((resolve, reject) => {
            let request = app.eventRequest(event, options);
            request.on('response', function (response) {
                //console.log(response);
                resolve(response);
            });
            request.on('error', function (error) {
                //console.log(error);
                reject(error);
            });
            request.end();
        })
    }
}
