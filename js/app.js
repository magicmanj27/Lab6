'use strict'

//Setting global variable for the hours of the day to keep code DRY
var hoursOfOperation = [
    '6am: ',
    '7am: ',
    '8am: ',
    '9am: ',
    '10am: ',
    '11am: ',
    '12pm: ',
    '1pm: ',
    '2pm: ',
    '3pm: ',
    '4pm: ',
    '5pm: ',
    '6pm: ',
    '7pm: ',
    '8pm: ',
]

var pikeUI = document.getElementsByClassName('first-pike');
console.log(pikeUI);

var firtPikeStore = {
    minCust: 23,
    maxCust: 65,
    avgCookiesSold: 6.3,

    hoursOfOperation: '',

    calculate: function(min, max) {
        return Math.round(Math.random() * (this.max - this.min + 1) - this.min);
    },

}