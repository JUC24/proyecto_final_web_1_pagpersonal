alert ("Bienevenido a nuestro indicador de compatibilidad Socdiacal en el amor ")

/* ingreso de datos */
let dia1 = prompt("Primer usuario, digite su dia de nacimiento: ")
let mes1 = prompt("Primer usuario, digite su mes de nacimiento: ")
let dia2 = prompt("Segundo usuario, digite su dia de nacimiento: ")
let mes2 = prompt("Segundo usuario, digite su mes de nacimiento: ")

let signo1 = ""
let signo2 = ""
let signo1cuspide = ""
let signo2cuspide = ""

/* signos  */

/*1. aries*/
if(dia1 >= 21 && mes1.toLowerCase() == "marzo" || dia1 <= 20 && mes1.toLowerCase() == "abril"){
  alert("Primer usuario, su signo zodiacal es Aries")
  signo1 = "aries"
}
if (dia2 >= 21  && mes2.toLowerCase() == "marzo" || dia2 <= 20 && mes2.toLowerCase() == "abril"){
  alert("segundo usuario, su signo zodiacal es Aries")
  signo2 = "aries"
}

/*2. Tauro*/
if (dia1 >= 21  && mes1.toLowerCase() == "abril" || dia1 <= 21 && mes1.toLowerCase() == "mayo"){
  alert("Primer usuario, su signo zodiacal es Tauro")
  signo1 = "tauro"
}
if (dia2 >= 21  && mes2.toLowerCase() == "abril" || dia2 <= 21 && mes2.toLowerCase() == "mayo"){
  alert("segundo usuario, su signo zodiacal es Tauro")
  signo2 = "tauro"
}

/*3. geminis*/
if(dia1 >= 22  && mes1.toLowerCase() == "mayo" || dia1 <= 21 && mes1.toLowerCase() == "junio"){
  alert("Primer usuario, su signo zodiacal es Géminis")
  signo1 = "geminis"
}
if (dia2 >= 22  && mes2.toLowerCase() == "mayo" || dia2 <= 21 && mes2.toLowerCase() == "junio"){
  alert("segundo usuario, su signo zodiacal es Géminis")
  signo2 = "geminis"
}

/*4. cancer */
if(dia1 >= 22  && mes1.toLowerCase() == "junio" || dia1 <= 22 && mes1.toLowerCase() == "julio"){
  alert("Primer usuario, su signo zodiacal es Cáncer")
  signo1 = "cancer"
}
if (dia2 >= 22  && mes2.toLowerCase() == "junio" || dia2 <= 22 && mes2.toLowerCase() == "julio"){
  alert("segundo usuario, su signo zodiacal es Cáncer")
  signo2 = "cancer"
}

/*5. leo */
if(dia1 >= 23  && mes1.toLowerCase() == "julio" || dia1 <= 22 && mes1.toLowerCase() == "agosto"){
  alert("Primer usuario, su signo zodiacal es Leo")
  signo1 = "leo"
}
if (dia2 >= 23  && mes2.toLowerCase() == "julio" || dia2 <= 22 && mes2.toLowerCase() == "agosto"){
  alert("segundo usuario, su signo zodiacal es Leo")
  signo2 = "leo"
}

/*6. Virgo */ 
if(dia1 >= 23  && mes1.toLowerCase() == "agosto" || dia1 <= 22 && mes1.toLowerCase() == "septiembre"){
  alert("Primer usuario, su signo zodiacal es Virgo")
  signo1 = "virgo"
}
if (dia2 >= 23  && mes2.toLowerCase() == "agosto" || dia2 <= 22 && mes2.toLowerCase() == "septiembre"){
  alert("segundo usuario, su signo zodiacal es Virgo")
  signo2 = "virgo"
}

/*7. libra */
if(dia1 >= 23  && mes1.toLowerCase() == "septiembre" || dia1 <= 22 && mes1.toLowerCase() == "octubre"){
  alert("Primer usuario, su signo zodiacal es Libra")
  signo1 = "libra"
}
if (dia2 >= 23  && mes2.toLowerCase() == "septiembre" || dia2 <= 22 && mes2.toLowerCase() == "octubre"){
  alert("segundo usuario, su signo zodiacal es Libra")
  signo2 = "libra"
}

/*8. escorpio */
if(dia1 >= 23  && mes1.toLowerCase() == "octubre" || dia1 <= 22 && mes1.toLowerCase() == "noviembre"){
  alert("Primer usuario, su signo zodiacal es Escorpio")
  signo1 = "escorpio"
}
if (dia2 >= 23  && mes2.toLowerCase() == "octubre" || dia2 <= 22 && mes2.toLowerCase() == "noviembre"){
  alert("segundo usuario, su signo zodiacal es Escorpio")
  signo2 = "escorpio"
}

/*9. sagitario */
if(dia1 >= 23  && mes1.toLowerCase() == "noviembre" || dia1 <= 21 && mes1.toLowerCase() == "diciembre"){
  alert("Primer usuario, su signo zodiacal es Sagitario")
  signo1 = "sagitario"
}
if (dia2 >= 23  && mes2.toLowerCase() == "noviembre" || dia2 <= 21 && mes2.toLowerCase() == "diciembre"){
  alert("segundo usuario, su signo zodiacal es Sagitario")
  signo2 = "sagitario"
}

/*10. capricornio */
if(dia1 >= 22  && mes1.toLowerCase() == "diciembre" || dia1 <= 20 && mes1.toLowerCase() == "enero"){
  alert("Primer usuario, su igno zodiacal es Capricornio")
  signo1 = "capricornio"
}
if (dia2 >= 22  && mes2.toLowerCase() == "diciembre" || dia2 <= 20 && mes2.toLowerCase() == "enero"){
  alert("segundo usuario, su signo zodiacal es Capricornio")
  signo2 = "capricornio"
}

/*11. acuario */
if(dia1 >= 21  && mes1.toLowerCase() == "enero" || dia1 <= 19 && mes1.toLowerCase() == "febrero"){
  alert("Primer usuario, su signo zodiacal es Acuario")
  signo1 = "acuario"
}
if (dia2 >= 21  && mes2.toLowerCase() == "enero" || dia2 <= 19 && mes2.toLowerCase() == "febrero"){
  alert("segundo usuario, su signo zodiacal es Acuario")
  signo2 = "acuario"
}

/*12. piscis */
if(dia1 >= 20  && mes1.toLowerCase() == "febrero" || dia1 <= 20 && mes1.toLowerCase() == "marzo"){
  alert("Primer usuario, su signo zodiacal es Piscis")
  signo1 = "piscis"
}
if (dia2 >= 20  && mes2.toLowerCase() == "febrero" || dia2 <= 20 && mes2.toLowerCase() == "marzo"){
  alert("segundo usuario, su signo zodiacal es Piscis")
  signo2 = "piscis"
}

/* dias cuspide del zodiaco */
 
/** aries y tauro */

if(19 <= dia1 && dia1 <= 23 && mes1.toLowerCase() == "abril" ){
  alert("Hey primer usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 19 y 23 de abril, tus signos zodiacales son Aries y Tauro")
  signo1 = "aries"
  signo1cuspide = "tauro"
}
if (19 <= dia2 && dia2 <= 23 && mes2.toLowerCase() == "abril"){
  alert("Hey segundo usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 19 y 23 de abril, tus signos zodiacales son Aries y Tauro")
  signo2 = "aries"
  signo2cuspide = "tauro"
}


if(19 <= dia1 && dia1 <= 23 && mes1.toLowerCase() == "mayo"){
  alert("Hey primer usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 19 y 23 de mayo, tus signos zodiacales son Tauro y Géminis")
  signo1 = "tauro"
  signo1cuspide = "geminis"
}
if (19 <= dia2  && dia2 <= 23 && mes2.toLowerCase() == "mayo"){
  alert("Hey segundo usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 19 y 23 de mayo, tus signos zodiacales son Tauro y Géminis")
  signo2 = "tauro"
  signo2cuspide = "geminis"
}

if(19 <= dia1 && dia1 <= 23 && mes1.toLowerCase() == "junio"){
  alert("Hey primer usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 19 y 23 de junio, tus signos zodiacales son Géminis y Cáncer")
  signo1 = "geminis"
  signo1cuspide = "cancer"
}
if (19 <= dia2 && dia2 <= 23 && mes2.toLowerCase() == "junio"){
  alert("Hey segundo usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 19 y 23 de junio, tus signos zodiacales son Géminis y Cáncer")
  signo2 = "geminis"
  signo2cuspide = "cancer"
}

if(20 <= dia1 && dia1 <= 24 && mes1.toLowerCase() == "julio" ){
  alert("Hey primer usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 20 y 24 de julio, tus signos zodiacales son Cáncer y Leo")
  signo1 = "cancer"
  signo1cuspide = "leo"
}
if (20 <= dia2 && dia2 <= 24 && mes2.toLowerCase() == "julio"){
  alert("Hey segundo usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 20 y 24 de julio, tus signos zodiacales son Cáncer y Leo")
  signo2 = "cancer"
  signo2cuspide = "leo"
}

if(20 <= dia1 && dia1 <= 24 && mes1.toLowerCase() == "agosto"){
  alert("Hey primer usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 20 y 24 de agosto, tus signos zodiacales son Leo y Virgo")
  signo1 = "leo"
  signo1cuspide = "virgo"
}
if(20 <= dia2  && dia2 <= 24 && mes2.toLowerCase() == "agosto"){
  alert("Hey segundo usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 20 y 24 de agosto, tus signos zodiacales son Leo y Virgo")
  signo2 = "leo"
  signo2cuspide = "virgo"
}

if(20 <= dia1 && dia1 <= 24 && mes1.toLowerCase() == "septiembre"){
  alert("Hey primer usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 20 y 24 de septiembre, tus signos zodiacales son Virgo y Libra")
  signo1 = "virgo"
  signo1cuspide = "libra"
}
if (20 <= dia2  && dia2 <= 24 && mes2.toLowerCase() == "septiembre"){
  alert("Hey segundo usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 20 y 24 de septiembre, tus signos zodiacales son Virgo y Libra")
  signo2 = "virgo"
  signo2cuspide = "libra"
}

if(20 <= dia1 && dia1 <= 24 && mes1.toLowerCase() == "octubre"){
  alert("Hey primer usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 20 y 24 de octubre, tus signos zodiacales son Libra y Escorpio")
  signo1 = "libra"
  signo1cuspide = "escorpio"
}
if(20 <= dia2 && dia2 <= 24 && mes2.toLowerCase() == "octubre"){
  alert("Hey segundo usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 20 y 24 de octubre, tus signos zodiacales son Libra y Escorpio")
  signo2 = "libra"
  signo2cuspide = "escorpio"
}


if(20 <= dia1 && dia1 <= 24 && mes1.toLowerCase() == "noviembre"){
  alert("Hey primer usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 20 y 24 de noviembre, tus signos zodiacales son Escorpio y Sagitario")
  signo1 = "escorpio"
  signo1cuspide = "sagitario"
}
if (20 <= dia2 && dia2 <= 24 && mes2.toLowerCase() == "noviembre"){
  alert("Hey segundo usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 20 y 24 de noviembre, tus signos zodiacales son Escorpio y Sagitario")
  signo2 = "escorpio"
  signo2cuspide = "sagitario"
}

if(19 <= dia1 && dia1 <= 23 && mes1.toLowerCase() == "diciembre"){
  alert("Hey primer usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 19 y 23 de diciembre, tus signos zodiacales son Sagitario y Capricornio")
  signo1 = "sagitario"
  signo1cuspide = "capricornio"
}
if (19 <= dia2 && dia2 <= 23 && mes2.toLowerCase() == "diciembre"){
  alert("Hey segundo usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 19 y 23 de diciembre, tus signos zodiacales son Sagitario y Capricornio")
  signo2 = "sagitario"
  signo2cuspide = "capricornio"
}

if(18 <= dia1 && dia1 <= 22 && mes1.toLowerCase() == "enero"){
  alert("Hey primer usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 18 y 22 de enero, tus signos zodiacales son Capricornio y Acuario")
  signo1 = "capricornio"
  signo1cuspide = "acuario"
}
if (18 <= dia2 && dia2 <= 22 && mes2.toLowerCase() == "enero"){
  alert("Hey segundo usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 18 y 22 de enero, tus signos zodiacales son Capricornio y Acuario")
  signo2 = "capricornio"
  signo2cuspide = "acuario"
}

if(17 <= dia1 && dia1 <= 22 && mes1.toLowerCase() == "febrero"){
  alert("Hey primer usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 17 y 22 de febrero, tus signos zodiacales son Acuario y Piscis")
  signo1 = "acuario"
  signo1cuspide = "piscis"
}
if (17 <= dia2 && dia2 <= 22 && mes2.toLowerCase() == "febrero"){
  alert("Hey segundo usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 17 y 22 de febrero, tus signos zodiacales son Acuario y Piscis")
  signo2 = "acuario"
  signo2cuspide = "piscis"
}

if(18 <= dia1 && dia1 <= 22 && mes1.toLowerCase() == "marzo"){
  alert("Hey primer usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 18 y 22 de marzo, tus signos zodiacales son Piscis y Aries")
  signo1 = "piscis"
  signo1cuspide = "aries"
}
if (18 <= dia2 && dia2 <= 22 && mes2.toLowerCase() == "marzo"){
  alert("Hey segundo usuario hay una excepción contigo, nacisté en un día cuspide del zodiaco, entre el 18 y 22 de marzo, tus signos zodiacales son Piscis y Aries")
  signo2 = "piscis"
  signo2cuspide = "aries"
}

/* compatibilidad */


if (signo1 == signo2){
  alert(signo1 + " y " + signo2 + ": compatibles. Se recomienda iniciar una relación")
}

/* aries */

if (signo1 == "aries"  && signo2 == "capricornio"){
  alert("Aries y Capricornio: Incompatibles. No se recomienda iniciar una relación.")
}

if (signo1 == "aries" && signo2 == "virgo"){
  alert("Aries y Virgo: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "aries" && signo2 == "acuario"){
  alert("Aries y Acuario: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "aries" && signo2 == "leo"){
  alert("Aries y Leo: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "aries" && signo2 == "sagitario"){
  alert("Aries y Sagitario: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "aries" && signo2 == "cancer"){
  alert("Aries y Cáncer: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "aries" && signo2 == "libra"){
  alert ("Aries y Libra: mediamente compaltibles. Queda a su desición iniciar una relación")
}

if (signo1 == "aries" && signo2 == "tauro"){
  alert("Aries y Tauro: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "aries" && signo2 == "escorpio"){
  alert ("Aries y Escorpio: mediamente compaltibles. Queda a su desición iniciar una relación")
}

if (signo1 == "aries" && signo2 == "piscis"){
  alert ("Aries y Piscis: mediamente compaltibles. Queda a su desición iniciar una relación")
}

if (signo1 == "aries" && signo2 == "geminis"){
  alert("Aries y Geminis: compatibles en el amor. Se recomienda iniciar una relación")
}

/* geminis */

if (signo1 == "geminis" && signo2 == "piscis"){
  alert("Geminis y Piscis: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "geminis" && signo2 == "escorpio"){
  alert("Geminis y Escorpio: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "geminis" && signo2 == "tauro"){
  alert("Geminis y Tauro: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "geminis" && signo2 == "libra"){
  alert("Geminis y Libra: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "geminis" && signo2 == "Cancer"){
  alert("Geminis y Cancer: incompatibles. no se recomienda iniciar una relacion")
}

if (signo1 == "geminis" && signo2 == "sagitario"){
  alert("Geminis y Sagitario: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "geminis" && signo2 == "Leo"){
  alert("Geminis y Leo: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "geminis" && signo2 == "acuario"){
  alert("Geminis y Acuario: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "geminis" && signo2 == "aries"){
  alert("Geminis y Aries: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "geminis" && signo2 == "virgo"){
  alert("Geminis y Virgo: incompatible. No se recomienda iniciar una relación")
}

if (signo1 == "geminis" && signo2 == "capricornio"){
  alert("Geminis y Capricornio: incompatible. No se recomienda iniciar una relación")
}

/* piscis */

if (signo1 == "piscis" && signo2 == "geminis"){
  alert("Piscis y Geminis: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "piscis" && signo2 == "escorpio"){
  alert("Piscis y Escorpio: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "piscis" && signo2 == "tauro"){
  alert ("Pisicis y Tauro: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "piscis" && signo2 == "libra"){
  alert ("Piscis y Libra: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "piscis" && signo2 == "cancer"){
  alert("Pisicis y Cancer: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "piscis" && signo2 == "sagitario"){
  alert ("Piscis y Sagitario: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "piscis" && signo2 == "leo"){
  alert ("Piscis y Leo: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "piscis" && signo2 == "acuario"){
  alert ("Piscis y Acuario: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "piscis" && signo2 == "aries"){
  alert ("Piscis y Aries: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "piscis" && signo2 == "virgo"){
  alert ("Pisicis y Virgo: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "piscis" && signo2 == "capricornio"){
  alert ("Pisicis y Capricornio: compatibles. Se recomienda iniciar una relación")
}

/* escorpio */

if (signo1 == "escorpio" && signo2 == "geminis"){
  alert("Escorpio y Geminis: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "escorpio" && signo2 == "piscis"){
  alert("Escopio y Piscis: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "escorpio" && signo2 == "tauro"){
  alert("Escorpio y Tauro: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "escorpio" && signo2 == "libra"){
  alert("Escorpio y Libra: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "escorpio" && signo2 == "cancer"){
  alert("Escorpio y Cancer: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "escorpio" && signo2 == "sagitario"){
  alert ("Escorpio y Sagitario: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "escorpio" && signo2 == "leo"){
  alert ("Escorpio y Leo: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "escorpio" && signo2 == "acuario"){
  alert ("Escorpio y Acuario: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "escorpio" && signo2 == "aries"){
  alert("Escorpio y Aries: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "escorpio" && signo2 == "virgo"){
  alert("Escorpio y Virgo: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "escorpio" && signo2 == "capricornio"){
  alert("Escorpio y Capricornio: compatibles. Se recomienda iniciar una relación")
}

/* tauro */

if (signo1 == "tauro" && signo2 == "geminis"){
  alert("Tauro y Geminis: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "tauro" && signo2 == "piscis"){
  alert("Tauro y Piscis: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "tauro" && signo2 == "escorpio"){
  alert("Tauro y Escorpio: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "tauro" && signo2 == "libra"){
  alert ("Tauro y Libra: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "tauro" && signo2 == "cancer"){
  alert("Tauro y Cancer: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "tauro" && signo2 == "sagitario"){
  alert("Tauro y Sagitario: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "tauro" && signo2 == "leo"){
  alert ("Tauro y Leo: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "tauro" && signo2 == "acuario"){
  alert("Tauro y Acuario: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "tauro" && signo2 == "aries"){
  alert("Tauro y sagitario: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "tauro" && signo2 == "virgo"){
  alert("Tauro y Acuario: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "tauro" && signo2 == "capricornio"){
  alert("Tauro y Capricornio: compatibles. Se recomienda iniciar una relación")
}

/* libra */

if (signo1 == "libra" && signo2 == "geminis"){
  alert("Libra y Geminis: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "libra" && signo2 == "piscis"){
  alert("Libra y Piscis: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "libra" && signo2 == "escorpio"){
  alert("Libra y Escorpio: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "libra" && signo2 == "tauro"){
  alert ("Libra y Tauro: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "libra" && signo2 == "cancer"){
  alert("Libra y Cancer: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "libra" && signo2 == "sagitario"){
  alert("Libra y Sagitario: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "libra" && signo2 == "leo"){
  alert("Libra y Leo: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "libra" && signo2 == "acuario"){
  alert("Libra y Acuario: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "libra" && signo2 == "aries"){
  alert("Libra y Aries: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "libra" && signo2 == "virgo"){
  alert("Libra y Virgo: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "libra" && signo2 == "capricornio"){
  alert ("Libra y Capricornio: mediamente compatibles. Queda a su desición iniciar una relación")
}

/* cancer */

if (signo1 == "cancer" && signo2 == "geminis"){
  alert("Cancer y Geminis: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "cancer" && signo2 == "piscis"){
  alert("Cancer y piscis: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "cancer" && signo2 == "escorpio"){
  alert("Cancer y Escorpio: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "cancer" && signo2 == "Tauro"){
  alert("Cancer y Tauro: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "cancer" && signo2 == "Libra"){
  alert("Cancer y Libra: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "cancer" && signo2 == "sagitario"){
  alert ("Cancer y Sagitario: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "cancer" && signo2 == "leo"){
  alert ("Cancer y Leo: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "cancer" && signo2 == "acuario"){
  alert("Cancer y Acuario: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "cancer" && signo2 == "aries"){
  alert("Cancer y Aries: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "cancer" && signo2 == "virgo"){
  alert("Cancer y Virgo: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "cancer" && signo2 == "capricornio"){
  alert("Cancer y Capricornio: compatibles. Se recomienda iniciar una relación")
}

/* sagitario */

if (signo1 == "sagitario" && signo2 == "geminis"){
  alert ("Sagitario y Geminis: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "sagitario" && signo2 == "piscis"){
  alert ("Sagitario y Piscis: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "sagitario" && signo2 == "escorpio"){
  alert("Sagitario y Escorpio: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "sagitario" && signo2 == "tauro"){
  alert("Sagitario y Tauro: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "sagitario" && signo2 == "libra"){
  alert("Sagitario y Libra: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "sagitario" && signo2 == "cancer"){
  alert ("Sagitario y Cancer: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "sagitario" && signo2 == "leo"){
  alert("Sagitario y Leo: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "sagitario" && signo2 == "acuario"){
  alert("Sagitario y Acuario: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "sagitario" && signo2 == "aries"){
  alert("Sagitario y Aries: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "sagitario" && signo2 == "virgo"){
  alert("Sagitario y Virgo: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "sagitario" && signo2 == "capricornio"){
  alert("Sagitario y Capricornio: incompatibles. No se recomienda iniciar una relación")
}

/* leo */

if (signo1 == "leo" && signo2 == "geminis"){
  alert ("Leo y Geminis: compatibles. Se recomnienda iniciar una relación")
}

if (signo1 == "leo" && signo2 == "piscis"){
  alert ("Leo y Piscis: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "leo" && signo2 == "escorpio"){
  alert("leo y Escorpio: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "leo" && signo2 == "tauro"){
  alert("Leo y Tauro: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "leo" && signo2 == "libra"){
  alert("Leo y Libra: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "Leo" && signo2 == "cancer"){
  alert ("Leo y Cancer: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "leo" && signo2 == "sagitario"){
  alert("Leo y Sagitario: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "leo" && signo2 == "acuario"){
  alert("Leo y Acuario: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "leo" && signo2 == "aries"){
  alert("Leo y Aries: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "leo" && signo2 == "virgo"){
  alert("leo y Virgo: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "leo" && signo2 == "capricornio"){
  alert("Leo y Capricornio: mediamente compatibles. Queda a su desición iniciar una relación")
}

/* acuario */

if (signo1 == "acuario" && signo2 == "geminis"){
  alert ("Acuario y Geminis: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "acuario" && signo2 == "piscis"){
  alert ("Acuario y Piscis: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "acuario" && signo2 == "escorpio"){
  alert("Acuario y Escorpio: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "acuario" && signo2 == "tauro"){
  alert("Acuario y Tauro: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "acuario" && signo2 == "libra"){
  alert("Acuario y Libra: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "acuario" && signo2 == "cancer"){
  alert ("Acuario y Cancer: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "acuario" && signo2 == "sagitario"){
  alert("Acuario y Sagitario: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "acuario" && signo2 == "leo"){
  alert("Acuario y Leo: mediamente compatibles. Quea a su desición iniciar una relación")
}

if (signo1 == "acuario" && signo2 == "aries"){
  alert("Acuario y Aries: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "acuario" && signo2 == "virgo"){
  alert("Acuario y Virgo: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "acuario" && signo2 == "capricornio"){
  alert("Acuario y Capricornio: incompatibles. No se recomienda iniciar una relación")
}

/* virgo */

if (signo1 == "virgo" && signo2 == "geminis"){
  alert ("Virgo y Geminis: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "virgo" && signo2 == "piscis"){
  alert ("Virgo y Piscis: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "virgo" && signo2 == "escorpio"){
  alert("Sagitario y Escorpio: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "virgo" && signo2 == "tauro"){
  alert("Virgo y Tauro: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "virgo" && signo2 == "libra"){
  alert("Virgo y Libra: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "virgo" && signo2 == "cancer"){
  alert ("Virgo y Cancer: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "virgo" && signo2 == "sagitario"){
  alert("Virgo y Leo: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "virgo" && signo2 == "leo"){
  alert("Virgo y Leo: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "virgo" && signo2 == "acuario"){
  alert("Virgo y Acuario: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "virgo" && signo2 == "aries"){
  alert("Virgo y Aries: mediamente compatibles. Queda a su desicion iniciar una relación")
}

if (signo1 == "virgo" && signo2 == "capricornio"){
  alert("Virgo y Capricornio: compatibles. Se recomienda iniciar una relación")
}

/* capricornio */

if (signo1 == "capricornio" && signo2 == "geminis"){
  alert ("Capricornio y Geminis: mediamente compatibles. Queda a su desición iniciar una relación")
}

if (signo1 == "capricornio" && signo2 == "piscis"){
  alert ("Capricornio y Piscis: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "capricornio" && signo2 == "escorpio"){
  alert("Capricornio y Escorpio: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "capricornio" && signo2 == "tauro"){
  alert("Capricornio y Tauro: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "capricornio" && signo2 == "libra"){
  alert("Capricornio y Libra: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "capricornio" && signo2 == "cancer"){
  alert ("Capricornio y Cancer: compatibles. Se recomienda iniciar una relación")
}

if (signo1 == "capricornio" && signo2 == "sagitario"){
  alert("Capricornio y Sagitario: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "capricornio" && signo2 == "leo"){
  alert("Capricornio y Leo: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "capricornio" && signo2 == "acuario"){
  alert("Capricornio y Acuario: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "capricornio" && signo2 == "aries"){
  alert("Capricornio y Aries: incompatibles. No se recomienda iniciar una relación")
}

if (signo1 == "capricornio" && signo2 == "virgo"){
  alert("Capricornio y Virgo: compatibles. Se recomienda iniciar una relación")
}