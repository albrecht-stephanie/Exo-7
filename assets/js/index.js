function controle(){
  var shoeSize = document.getElementById("shoeSize").value;
  var yearOfBirth = document.getElementById("yearOfBirth").value;
  if ((isNaN(shoeSize)) || (isNaN(yearOfBirth))){ //verification que les champs contiennent des nombresss
    return ("J'ai dis des nombres !!!")

  }else {
    var result = (((((shoeSize * 2) + 5) * 50) - yearOfBirth) + 1766);
    return "Résultat :"+result;
  }
}
