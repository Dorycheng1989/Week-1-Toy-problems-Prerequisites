function getGrade() {
    let mark = parseFloat(prompt("Enter the student's mark (between 0 and 100): "));

    if (mark >= 80) {
        return "A";
    } else if (mark >= 60 && mark <= 79) {
        return "B";
        
     } else if (mark >= 50 && mark <= 59) {
     return "C";
     } else {
        return "E";
     }
        
    }
