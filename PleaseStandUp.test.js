
const PleaseStandUp = require('./PleaseStandUp.js');

test("timeConvert test01", () => {

    let pleaseStandUp = new PleaseStandUp();
    let expected = "2:6:0";

    let actual = pleaseStandUp.timeConvert(126);

    expect(actual).toEqual(expected);
});

test("timeConvert test02", () => {

    let pleaseStandUp = new PleaseStandUp();
    let expected = "0:45:0";

    let actual = pleaseStandUp.timeConvert(45);

    expect(actual).toEqual(expected);
});

test("timeConvert test03", () => {

    let pleaseStandUp = new PleaseStandUp();
    let expected = "1:0:15";

    let actual = pleaseStandUp.timeConvert(60.25);

    expect(actual).toEqual(expected);
});

test("timeConvert test04", () => {

    let pleaseStandUp = new PleaseStandUp();
    let expected = "0:45:12";

    let actual = pleaseStandUp.timeConvert(45.2);

    expect(actual).toEqual(expected);
});

test("howOld test01", () => {

    // Created 3/10/2021 
    // Answer will change with time
    let pleaseStandUp = new PleaseStandUp();
    let expected = 25;

    let actual = pleaseStandUp.howOld("October 10, 1995");

    expect(actual).toEqual(expected);

});

test("howOld test02", () => {

    // Created 3/10/2021 
    // Answer will change with time
    let pleaseStandUp = new PleaseStandUp();
    let expected = 41;

    let actual = pleaseStandUp.howOld("Janurary 19, 1980");

    expect(actual).toEqual(expected);
    
});

test("howOld test03", () => {

    // Created 3/10/2021 
    // Answer will change with time
    let pleaseStandUp = new PleaseStandUp();
    let expected = -1;

    let actual = pleaseStandUp.howOld("December 21, 2023");

    expect(actual).toEqual(expected);
    
});
