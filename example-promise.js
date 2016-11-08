

function addPromise (a,b) {
    return new Promise( function(resolve,reject) {
       if (typeof a === 'number' && typeof b === 'number') {
           let sum = a + b;
           resolve(sum);
       }
       else {
           reject('not numbers');
       }
    });
}


addPromise(5,'fgf').then(function (temp) {
console.log('promis success', temp);
}, function (err) {
console.log('promis error', err);

});