function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return 'A';
  } else if(score >= 80 && score <= 89) {
    return 'B';
  } else if(score >= 70 && score <= 79) {
    return 'C';
  } else if(score >= 60 && score <= 69) {
    return 'D';
  } else if(score < 60 && score >= 0) {
    return 'F';
  } else if(score < 0) {
    return 'Nota inválida';
  } else if(score > 100) {
    return 'Nota inválida';
  }
}

//testing
console.log(getGrade(0));
console.log(getGrade(60));
console.log(getGrade(70));
console.log(getGrade(80));
console.log(getGrade(90));
console.log(getGrade(100));
console.log(getGrade(0));
console.log(getGrade(-20));
console.log(getGrade(101));
console.log(getGrade(230));