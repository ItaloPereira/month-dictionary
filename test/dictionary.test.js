const expect = require('chai').expect;
const monthDictionary = require('../lib/month_dictionary');
const dictionary = require('../lib/dictionary');

describe("When I call monthDictionary with 0 arguments return all months in 'en-us'", function () {
    
    it("It should return all months in 'en-us'", function () {

        expect(monthDictionary()).to.be.equals(dictionary['en-us']);

    });

});

describe("When I call monthDictionary with 1 arguments typeof = 'number' (5)", function () {
    
    it("It should return month 5 in 'en-us'(May)", function () {

        expect(monthDictionary(5)).to.be.equals('May');

    });

});

describe("When I call monthDictionary with 1 arguments typeof == 'string' ('pt-br')", function () {
    
    it("It should return all months in 'pt-br'", function () {

        expect(monthDictionary('pt-br')).to.be.equals(dictionary['pt-br']);

    });

});


describe("When I call monthDictionary with 1 arguments that is not 'number' or 'string' (true)", function () {
    
        it("It should throws error 'Invalid arguments'", function () {
    
            expect(monthDictionary.bind(monthDictionary, true)).to.throw('Invalid arguments');
    
    });

});

describe("When I call monthDictionary with 1 arguments that is not a valid number (15)", function () {
    
        it("It should throws error 'Invalid month'", function () {
    
            expect(monthDictionary.bind(monthDictionary, 15)).to.throw('Invalid month');
    
    });

});

describe("When I call monthDictionary with 1 arguments that is not a valid number (Infinity)", function () {
    
        it("It should throws error 'Invalid month'", function () {
    
            expect(monthDictionary.bind(monthDictionary, Infinity)).to.throw('Invalid month');
    
    });

});

describe("When I call monthDictionary with 1 arguments typeof == 'number' and is decimal (3.14)", function () {
    
    it("It should return the 'number' with 'Math.floor' (3) => 'March'", function () {

        expect(monthDictionary(3.14)).to.be.equals('March');

    });

});

describe("When I call monthDictionary with 1 arguments typeof == 'number' and is inside parenthesis ((3))", function () {
    
    it("It should return the 'number' inside parenthesis (3) => 'March'", function () {

        expect(monthDictionary((3))).to.be.equals('March');

    });

});

describe("When I call monthDictionary with 1 arguments that is not a valid string ('en-uss')", function () {
    
        it("It should throws error 'Invalid language'", function () {
    
            expect(monthDictionary.bind(monthDictionary, 'en-uss')).to.throw('Invalid language');
    
    });

});

describe("When I call monthDictionary with 1 arguments that is not a valid string ('eruneugeurgbreug')", function () {
    
        it("It should throws error 'Invalid language'", function () {
    
            expect(monthDictionary.bind(monthDictionary, 'eruneugeurgbreug')).to.throw('Invalid language');
    
    });

});


