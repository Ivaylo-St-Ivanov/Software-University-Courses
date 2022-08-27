function convertToJSON(name, lastName, hairColor) {

    let personInfo = {};
    personInfo['name'] = name;
    personInfo['lastName'] = lastName;
    personInfo['hairColor'] = hairColor;

    let personInfoJSON = JSON.stringify(personInfo);
    console.log(personInfoJSON);
}
convertToJSON('Peter', 'Smith', 'Blond');