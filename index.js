function gradingStudents(grades) {
    return grades.map(number => {
        let nextRound  = Math.ceil(number/5)*5;
        if(number >= 38){
            if( nextRound - number >= 3){
                return Math.floor(number);
            } else{
                return nextRound;
            }
        }else{
            return number;
        }
    });
}


//expext to log these numbers 75 67 40 33
console.log(gradingStudents([73,67,38,33]));
