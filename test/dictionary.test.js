const expect = require('chai').expect;
const monthDictionary = require('../lib/month_dictionary');
const dictionary = require('../lib/dictionary');

describe("When I call monthDictionary with 0 arguments return all months in 'en-au'", function () {
    
    it("It should return all months in 'en-au'", function () {

        expect(monthDictionary()).to.be.equals(dictionary['en-au']);

    });

});

describe("When I call monthDictionary with 1 arguments typeof = 'number' (5)", function () {
    
    it("It should return month 5 in 'en-au'(May)", function () {

        expect(monthDictionary(5)).to.be.equals('May');

    });

});

describe("When I call monthDictionary with 1 arguments typeof == 'string' ('pt-br')", function () {
    
    it("It should return all months in 'pt-br'", function () {

        expect(monthDictionary('pt-br')).to.be.equals(dictionary['pt-br']);

    });

});

describe("When I call monthDictionary with 1 arguments typeof == 'string' and in uppercase ('PT-BR')", function () {
    it("It should return all months in 'PT-BR'", function () {

        expect(monthDictionary('PT-BR')).to.be.equals(dictionary['pt-br']);

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

describe("When I call monthDictionary with 2 arguments typeof == 'number'(3,10)", function () {
    
        it("It should throws error 'Two numbers is not valid'", function () {
    
            expect(monthDictionary.bind(monthDictionary, 3, 10)).to.throw('Two numbers is not valid');
    
    });

});

describe("When I call monthDictionary with 2 arguments typeof == 'string'('pt-br','en-au')", function () {
    
        it("It should throws error 'Two numbers is not valid'", function () {
    
            expect(monthDictionary.bind(monthDictionary, 'pt-br', 'en-au')).to.throw('Two strings is not valid');
    
    });

});

describe("When I call monthDictionary with 2 arguments typeof != 'string' or typeof != 'number'(true ,null)", function () {
    
        it("It should throws error 'Invalid arguments'", function () {
    
            expect(monthDictionary.bind(monthDictionary, true, null)).to.throw('Invalid arguments');
    
    });

});

describe("When I call monthDictionary with 2 valid arguments with string is in first position ('en-au', 4)", function () {
    
    it("It should return ('en-au', 4)", function () {

        expect(monthDictionary('en-au', 4)).to.be.equals('April');

    });

});

describe("When I call monthDictionary with 2 valid arguments with number is in first position(4, 'en-au')", function () {
    
    it("It should return (4, 'en-au')", function () {

        expect(monthDictionary(4, 'en-au')).to.be.equals('April');

    });

});

describe("When I call monthDictionary with 2 valid arguments but the string is uppercase(4, 'EN-AU')", function () {
    
    it("It should return (4, 'EN-AU')", function () {

        expect(monthDictionary(4, 'EN-AU')).to.be.equals('April');

    });

});

describe("When I call monthDictionary with 2 valid arguments but the string is uppercase ('EN-AU', 4)", function () {
    
    it("It should return ('EN-AU', 4)", function () {

        expect(monthDictionary('EN-AU', 4)).to.be.equals('April');

    });

});

describe("When I call monthDictionary with 3 or more arguments only the first and second are considered (7, 'en-au', 'foo', 56)", function () {
    
    it("It should return (7, 'en-au', 'foo', 56)", function () {

        expect(monthDictionary(7, 'en-au', 'foo', 56)).to.be.equals('July');

    });

});


