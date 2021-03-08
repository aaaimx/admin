/* eslint-disable */
import { required, confirmed, email, min } from 'vee-validate/dist/rules'
import { extend } from 'vee-validate'

extend('required', {
  ...required,
  message: 'Este campo es obligatorio'
})

extend('email', {
  ...email,
  message: 'Ingrese un email válido'
})

extend('confirmed', {
  ...confirmed,
  message: 'Las contraseñas no coinciden'
})

extend('email-edu', value => {
  return /(E|e|le|LE)[0-9]+@((itmerida[.]edu[.]mx)|(merida[.]tecnm[.]mx))/.test(
    value
  )
    ? true
    : 'Este email no es institucional'
})

extend('matricula', value => {
  return /(E|LE|e|le)[0-9]{8}/.test(value)
    ? value[0] == 'E' || value[0] == 'e'
      ? value.length != '9'
        ? 'La matrícula debe tener una extensión de 9 caracteres'
        : true
      : value.length != '10'
      ? 'La matrícula debe tener una extensión de 10 caracteres'
      : true
    : value[0] == 'E' || value[0] == 'e'
    ? 'La matrícula debe tener el formato E12345678'
    : 'La matrícula debe tener el formato LE12345678'
})

/*extend('ingreso', value => {
  return (value <= 12) & (value > 0) ? true : 'Escriba un ingreso válido'
})*/

extend('img', value => {
  console.log(value.type)
  return value.type == 'image/jpeg' ||
    value.type == 'image/png' ||
    value.type == 'image/jpg'
    ? true
    : 'Solo se aceptan archivos .jpeg/.jpg/.png'
})

extend('pdf', value => {
  console.log(value.type)
  return value.type == 'application/pdf'
    ? true
    : 'Solo se aceptan archivos .pdf'
})

extend('password', value => {
  if (value.length >= 8) {
    var mayuscula = false
    var minuscula = false
    var numero = false
    var caracter_raro = false

    for (var i = 0; i < value.length; i++) {
      if (value.charCodeAt(i) >= 65 && value.charCodeAt(i) <= 90) {
        mayuscula = true
      } else if (value.charCodeAt(i) >= 97 && value.charCodeAt(i) <= 122) {
        minuscula = true
      } else if (value.charCodeAt(i) >= 48 && value.charCodeAt(i) <= 57) {
        numero = true
      } else {
        caracter_raro = true
      }
    }
    if (
      mayuscula == true &&
      minuscula == true &&
      caracter_raro == true &&
      numero == true
    )
      return true
    else {
      if (!mayuscula)
        return 'La contraseña debe contener al menos 1 letra mayúscula'
      else if (!minuscula)
        return 'La contraseña debe contener al menos 1 letra minúscula'
      else if (!caracter_raro)
        return 'La contraseña debe contener al menos 1 símbolo'
      else if (!numero) return 'La contraseña debe contener al menos 1 número'
    }
  }
  return 'La contraseña debe tener al menos 8 caracteres'
})

extend('min', min)