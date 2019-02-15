'use strict'
// Selecting a ul by it class name via the DOM 
var pikeUI = document.getElementById('first-pike');
console.log(pikeUI);

//Creating an object to hold properties for the 1st and Pike store location.
var firtPikeStore = {
    // Key for given values by the client: avg maxium customer, avg minium customer, and avg cookies sold.
    minCust: 23,
    maxCust: 65,
    avgCookiesSold: 6.3,

    //Creating a key for the store business hours.
    hoursOfOperation: [
        '6am',
        '7am',
        '8am',
        '9am',
        '10am',
        '11am',
        '12pm',
        '1pm',
        '2pm',
        '3pm',
        '4pm',
        '5pm',
        '6pm',
        '7pm',
        '8pm',
    ], 
    
    // Making a method and passing in min and max customers to generate a random number between a specified range.  
    makeRandom: function(minCust, maxCust) {
        // Returning the calculation of the randomized number.
        return Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    },

    // Empty key array to store the calculation of the average cookies sold per hour.
    cookiesPerHour: [],
    // Key set to zero to store the calculation of the random customers and the cookies sold.
    cookiesSold: 0,

    // Making a method for the calculation of the cookies sold per hour.
    calculate: function() {
        for(var i = 0; i < this.hoursOfOperation.length; i++) {
            // Making variable for randomized customers per hour.
            var randomCustomer = this.makeRandom();
            // Calculating cookies sold per hour, t.aCS = 6.3 * 100 / the amount of randomized customers.
            this.cookiesSold = Math.floor(this.avgCookiesSold * randomCustomer);
            // Pushing the calculation of the cookies sold to store in an empty key array.
            this.cookiesPerHour.push(this.cookiesSold);
        }
    }, 
    
    render: function () {
        this.calculate();
        for(var i = 0; i < this.hoursOfOperation.length; i++) {
            var firstPikeLi = document.createElement('li');
            firstPikeLi.textContent = `${this.hoursOfOperation[i]}: ${this.cookiesPerHour[i]}.`;
            pikeUI.appendChild(firstPikeLi);
        }
    }
}

firtPikeStore.render();
// Logging various properties for visual purposes.
console.log("Calculate function " + firtPikeStore.calculate());
console.log("Cookies per hour: " + firtPikeStore.cookiesPerHour);
console.log("Random number: " + firtPikeStore.makeRandom());
console.log("Hour of operation: " + firtPikeStore.hoursOfOperation);
console.log("Cookies sold in one hour "+ firtPikeStore.cookiesSold);
console.log("Render: " + firtPikeStore.render);