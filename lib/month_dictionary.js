
const dictionary = require('./dictionary');

const monthDictionary = function(language, month) {
    
    if (arguments.length == 0) {
        return dictionary['en-au'];
    } 

    else if (arguments.length == 1) {

        var a0 = arguments[0];
    
        if (typeof a0 === 'number') {
           var a0mf = Math.floor(a0);
            
            if (a0mf <= 12 && a0mf >= 1) {
                return dictionary['en-au'][a0mf - 1];
            }
            else {
                throw new Error('Invalid month');
            }
        }
        else if (typeof a0 === 'string') {
            var check = dictionary[a0];

            if (check == undefined) {
                throw new Error('Invalid language');
            }
            else {
                return check;
            }
            
        }
        else {
            throw new Error('Invalid arguments');
        }
    }
    else if (arguments.length >= 2) {

        var a0 = arguments[0];  
        var a1 = arguments[1];
        var mon;
        var lan;
        var errMonth = false;
        var errLan = false;

        if (typeof a0 == 'number' && typeof a1 == 'number') {
            throw new Error('Two numbers is not valid');
        }
        else if (typeof a0 == 'string' && typeof a1 == 'string') {
            throw new Error('Two strings is not valid');
        }
        else if (typeof a0 != 'number' && typeof a0 != 'string') {
            throw new Error('Invalid arguments');
        }
        else if (typeof a1 != 'number' && typeof a1 != 'string') {
            throw new Error('Invalid arguments');
        }
        else {

            if (typeof a0 === 'number') {
                var a0mf = Math.floor(a0);
    
                if (a0mf <= 12 && a0mf >= 1) {
                    mon = a0mf - 1;
                }
                else {
                    errMonth = true;        
                }
                var check = dictionary[a1];
    
                if (check == undefined) {
                    errLan = true;
                }
                else {
                    lan = a1;
                }
                
                if (errLan == true) {
                    throw new Error('Invalid language');
                } 
                else if (errMonth == true) {
                    throw new Error('Invalid month');
                }
    
                if (errLan == false || errMonth == false) {
                
                    return dictionary[lan][mon];
                }
            }
            else if (typeof a0 === 'string') {
                var check = dictionary[a0];
    
                if (check == undefined) {
                    errLan = true;
                }
                else {
                    lan = a0;
                }
                var a1mf = Math.floor(a1);
    
                if (a1mf <= 12 && a1mf >= 1) {
                    mon = a1mf - 1;
                }
                else {
                    errMonth = true;        
                }
                
                if (errLan == true) {
                    throw new Error('Invalid language');
                } 
                else if (errMonth == true) {
                    throw new Error('Invalid month');
                }
    
                if (errLan == false || errMonth == false) {
                    return dictionary[lan][mon];
                }
            }
        }
    }
}

module.exports = monthDictionary;

