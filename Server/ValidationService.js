const validateLib = require('./ValidationLib');


function validateUser(userObj) {
    let result = validateLib.checkRequired("username", userObj.username);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("password", userObj.password);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("firstname", userObj.firstname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("lastname", userObj.lastname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("number", userObj.number);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("username",userObj.username, 3, 15);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("password", userObj.password, 6, 25);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("firstname", userObj.firstname, 2, 20);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("lastname", userObj.lastname, 2, 50);
    if (result.isNotValid) { return result; }

    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkNumber("number", userObj.number);
    if (result.isNotValid) { return result; }


    return false;
}


module.exports = {
    validateUser
};
