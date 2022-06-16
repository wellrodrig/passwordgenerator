function gerarSenha(length) {
  var result = '';
  var characters1 = 'zbs!*iqwh!tL%@CdTypNUQ*jXG@nclEFoD!%H6OMux#Z#JgV$r47K5&1W2e%IvaBP$0S98$3&fAR@*k&Y#m';

  //var charactersLength = characters.length;
  for (var i = 0; i < 300; i++) {
    result += characters1.charAt(Math.floor(Math.random() * characters1.length));
  }


  if (!upper.checked) {
    result = result.replace(/[A-Z]/g, '')
  }
  if (!lower.checked) {
    result = result.replace(/[a-z]/g, '')
  }
  if (!numbers.checked) {
    result = result.replace(/[0-9]/g, "");
  }
  if (!symbols.checked) {
    result = result.replace(/[!@#$%&*]/g, "");
  }

  if (easy2read.checked) {
    result = result.replace(/[OoliI0Oo]/g, "");
  }
  if (easy2pron.checked) {
    result = result.replace(/[!@#$%&*0-9]/g, "");
  }

  result = result.substring(0, length)

  document.getElementById("verificador").style.transition = "all 1s";

  if (result.length <= 3) {
    document.getElementById("verificador").style.backgroundColor = "gray";
    console.log('senha inexistente');
  }
  if (result.length >= 4 && result.length <= 6) {
    document.getElementById("verificador").style.backgroundColor = "#cc3300";
    console.log('senha inexistente');
  }
  if (result.length >= 7 && result.length <= 8) {
    document.getElementById("verificador").style.backgroundColor = "#ffcc00";
    console.log('senha inexistente');
  }
  if (result.length >= 9 && result.length <= 10) {
    document.getElementById("verificador").style.backgroundColor = "#99cc33";
    console.log('senha inexistente');
  }
  if (result.length > 10) {
    document.getElementById("verificador").style.backgroundColor = "#339900";
    console.log('senha inexistente');
  }

  

  document.getElementById('senhaTexto').value = result;
  document.getElementById('numero').value = result.length;
  document.getElementById('rangeSlider').value = result.length;

  

  result = ''
}



//#cc3300	(204,51,0) dark red
//#ff9966	(255,153,102) red
//#ffcc00	(255,204,0) yellow
//#99cc33	(153,204,51) green 
//#339900	(51,153,0) dark green