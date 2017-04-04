function validateForm(){
  /* Escribe tú código aquí */
  var name = document.getElementById('name');
  var lastname = document.getElementById('lastname');
  var email = document.getElementById('input-email');
  var pass = document.getElementById('input-password')
  var selector = document.getElementsByTagName("select")[0];

  if( validateName() != "" ){
    getSpan(name,validateName,5);
  }
  else{
    removeSpan(name,6);
  }

  if( validateLastName() != "" ){
    getSpan(lastname,validateLastName,5);
  }
  else{
    removeSpan(lastname,6);
  }

  if( validateEmail() != "" ){
    getSpan(email,validateEmail,5);
  }
  else{
    removeSpan(email,6);
  }

  if( validatePassword() != "" ){
    getSpan(pass,validatePassword,5);
  }
  else{
    removeSpan(pass,6);
  }

  if( validateSelect() != "" ){
    getSpan(selector,validateSelect,3);
  }
  else{
    removeSpan(selector,4);
  }

  function getSpan(valor, validateValor,max){
    if(valor.parentNode.childNodes.length == max ){
      span = document.createElement("span");
      span.setAttribute("class","mensaje-error");
      span.innerHTML = validateValor();
      valor.parentNode.insertBefore(span,valor.parentNode.childNodes[2]);
    }
    else{
      span = valor.parentNode.childNodes[2];
      span.innerHTML = validateValor();
    }
    valor.style.backgroundColor =  "#FDD";
    valor.border =  "solid 1px #C66";
  }

  function removeSpan(valor, max){
    if(valor.parentNode.childNodes.length == max){
      valor.parentNode.removeChild(valor.parentNode.childNodes[2]);
    }
    valor.style.backgroundColor =  "#DFD";
    valor.border =  "solid 1px #6C6";
  }

  function validateName(){
    if(name.value.length == 0 || name  == null || /^\s+$/.test(name.value)){
      return "Debe ingresar su nombre";
    }
    else if(name.value.length<=2){
      return "El nombre debe contener al 3 menos carácteres";
    }
    else if(name.value.search(/^[a-zA-Z]*$/) == -1){
      return "El nombre debe ser letras y/o no debe contener espacios vacíos";
    }
    else if(name.value.search(/^[a-zA-Z]*$/) == -1){
      return "El nombre debe contener sólo letras";
    }
    else if(name.value.search(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/) == -1){
      return "La primera letra debe ser mayúscula";
    }
    return "";
  }

  function validateLastName(){
    if(lastname.value.length == 0 || lastname  == null || /^\s+$/.test(lastname.value)){
      return "Debe ingresar su apellido";
    }
    else if(lastname.value.length<=2){
      return "El apellido debe contener al 3 menos carácteres";
    }
    else if(lastname.value.search(/^[a-zA-Z]*$/) == -1){
      return "El apellido debe ser letras y/o no debe contener espacios vacíos";
    }
    else if(lastname.value.search(/^[a-zA-Z]*$/) == -1){
      return "El apellido debe contener sólo letras";
    }
    else if(lastname.value.search(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/) == -1){
      return "La primera letra debe ser mayúscula";
    }
    return "";
  }

  function validateEmail(){
    if(email.value.length == 0 || email  == null || /^\s+$/.test(email.value)){
      return "Debe ingresar su email";
    }
    else if(!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value))){
      return "Verifique su email";
    }
    return "";
  }

  function validatePassword(){
    if( pass.value.length == 0 || pass  == null || /^\s+$/.test(pass.value) ){
      return "Debe ingresar su password";
    }
    else if( pass.value.length <=5 ){
      return "La contraseña debe tener al menos 6 carácteres";
    }
    else if( pass.value == "password" ||  pass.value == "123456" ||  pass.value == "098754" ){
      return 'La contraseña no puede ser igual a "password" ó "123456" ó "098754"';
    }
    return "";
  }

  function validateSelect(){
    if( selector.value == 0 || selector  == null ){
      return "Debe seleccionar al menos un tipo de bici";
    }
    return "";
  }

}
