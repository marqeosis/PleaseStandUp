class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */

   howOld(birthday){
       
    //calculate the month difference from the current month
       //calculate the day difference from the current date
       //calculate year difference from the current year
       //put calculation in date format
       //calculate the age person
       //return the age of the person

        return -1;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */

    timeConvert(numOfMins){
        //create a variable to for hours and make it round down and divide it by 3600 seconds
        var hours = Math.floor(numOfMins/3600);
        //create a variable for minutes. Once you get hours, then divide it by 60 minutes to get minutes
        var minutes = Math.floor((numOfMins % 3600)/60);
        //create a variable. Initial # minus the hours times the total seconds minus the minutes times by 60 to get seconds
        var seconds = numOfMins - hours * 3600 - minutes * 60;
        //After calculation, make sure it returns the proper time format
        return hours + ":" + minutes + ":" + seconds;
    }
    //Be able to plug any number in the console so it can convert(example numbers below)
    console.log(timeConvert(77));
    console.log(timeConvert(344));
    console.log(timeConvert(1299));
}

 module.exports = PleaseStandUp;
