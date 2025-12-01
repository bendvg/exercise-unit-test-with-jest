const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    
    let total = sum(14, 9);
    
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);
    
    const expected = 3.5 * 1.07;
   
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test('1 dollar should be about 146.26 yen', () => {
    let yenes = fromDollarToYen(1);
    expect(yenes).toBeCloseTo(146.26);
});

test('156.5 yen should be about 0.87 pounds', () => {
    let pounds = fromYenToPound(156.5);
    expect(pounds).toBeCloseTo(0.87);
});