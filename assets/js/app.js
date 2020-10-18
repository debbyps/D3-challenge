// @TODO: YOUR CODE HERE!
// load in the csv
d3.csv('./data/data.csv').then((data) => {
    console.log(data);
}).catch(error => console.log(error))