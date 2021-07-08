function convert(temp) {
  const isCelsius = temp.toUpperCase().includes('C');
  const isFahrenheit = temp.toUpperCase().includes('F');
  let tempNumber;

  if(!isCelsius && !isFahrenheit) {
    throw new Error('Unidade de medida não identificada');
  }

  else if(isCelsius) {
    tempNumber = temp.replace('C'||'c', '');
    console.log((tempNumber * 9/5) + 32 + ' Cº');
  } 
  
  else if(isFahrenheit) {
    tempNumber = temp.replace('F'||'f', '');
    console.log((tempNumber - 32) * 5/9 + ' Fº') ;
  }
}

try {
  convert('50F');
  convert('60C');
} catch(error) {
  console.log(error);
}