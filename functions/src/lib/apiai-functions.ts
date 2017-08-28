import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { apiai } from '../core'


export const dbTrigger = functions.database.ref('/chatbot/messages/{pushId}')
    .onWrite(event => {
        const data = event.data.val();
        if (data.to != undefined && data.text != undefined && data.from == 'bot') {
            console.log("no reply for bot message");
            return 0;
        }
        const query = data.text;
        console.log("you said: ", query);

        apiai.textQuery(query, {
            sessionId: "adfadff"
        }).then(function (response) {
            const reply = response.result.fulfillment.speech;
            console.log("reply is: ", reply);
            return event.data.ref.parent.push({
                text: reply,
                from: "bot",
                to: "zia"
            });
        });
    });

export const webhook = functions.https.onRequest(async (req, res) => {
    console.log("this is body: ", req.body);
    console.log("this is headers: ", req.headers);

    var response = {}

    // response = {
    //     speech: "this is speech from firebase",
    //     displayText: "this is displayText from firebase",
    //     data: { "this": "is data from firebase" },
    //     contextOut: [
    //         {
    //             "name": "weather",
    //             "lifespan": 2,
    //             "parameters": { "city": "Rome" }
    //         }
    //     ],
    //     source: "this is source from firebase",
    //     // followupEvent: {
    //     //     name: "signup",
    //     //     data: { 
    //     //         'givenname': "john",
    //     //         'lastname': "john"
    //     //      }
    //     // },
    // }
    console.log("response: ", response);
    res.json({
        speech: "working"
    });
});