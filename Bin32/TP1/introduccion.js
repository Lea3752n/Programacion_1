/*
//1. Obtener el área de un triángulo. 
let b = parseFloat(prompt("Ingrese la base del triangulo"));
let al = parseFloat(prompt("Ingrese la altura del triangulo"));
let area = (b * al) / 2
alert("El area del triangulo es " + area);
*/
/* 
2. Una empresa importadora desea determinar cuántos dólares puede adquirir con una (X) cantidad 
de dinero en pesos argentinos. 
let pesos = parseFloat(prompt("¿Cuantos pesos argentinos tiene?"));
let dolar = parseFloat(prompt("¿Cuanto vale el dolar?"));
let adq = pesos/dolar;
alert("Usted puede adquirir $"+adq);
*/
/* 
3. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan
trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron. 
let anonac = parseInt(prompt("Ingrese su año de nacimiento"));
let anoact = parseInt(prompt("¿Que año es?"));
let edad = anoact-anonac;
alert("Usted tiene "+edad+" años");
*/
/*
4. Un estacionamiento requiere determinar el cobro que debe aplicar a las personas que lo utilizan. 
Considere que el cobro es con base en las horas que lo disponen y que las fracciones de hora 
se toman como completas. 
let horas = parseFloat(prompt("¿Cuantas horas estuvo estacionado?"));
horas = Math.ceil(horas)
let cobro = parseFloat(prompt("¿Cuanto vale la hora?"));
let pago = horas*cobro;
alert("Usted debe pagar $"+pago);
*/
/*
5. Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura. 
Considere que se cobra por m2 y realice un pseudocódigo que representen el algoritmo que le 
permita ir generando presupuestos para cada cliente.
let largo = parseFloat(prompt("¿Cuanto de alto es la pared?"));
let ancho = parseFloat(prompt("¿Cuanto de largo es la pared?"));
let m2 = largo*ancho;
let cobro = parseFloat(prompt("¿Cuanto vale el m2?"));
let pago = cobro*m2;
alert("Su presupuesto es de $"+pago);
*/
/*
6. Se requiere determinar la hipotenusa de un triángulo rectángulo. ¿Cómo sería el pseudocódigo que 
represente el algoritmo para obtenerla? Recuerde que por Pitágoras se tiene que: C2 = A2 + B2
let cat1 = parseFloat(prompt("Ingrese el cateto 1"));
let cat2 = parseFloat(prompt("Ingrese el cateto 2"));
let h = Math.sqrt(cat1**2 + cat2**2);
alert("La hipotenusa es "+h.toFixed(2));
*/
/*
7. La compañía de autobuses “La curva loca” requiere determinar el costo que tendrá el boleto de un viaje 
sencillo, esto basado en los kilómetros por recorrer y en el costo por kilómetro. 
let km = parseFloat(prompt("¿Cuantos kilometros va a recorrer?"));
let costo = parseFloat(prompt("¿Cuantos vale el kilometro?"));
let pago = km*costo;
alert("El voleto de su viaje vale $"+pago);
*/
/*
8. Se requiere determinar el tiempo que tarda una persona en llegar de una ciudad a otra en bicicleta,
considerando que lleva una velocidad constante. 
let d = parseFloat(prompt("¿A cuantos kilometros esta de la otra ciudad?"));
let v = parseFloat(prompt("¿A cuantos kilometros por hora se traslada?"));
let t = d/v;
alert("Usted va a tardar "+t.toFixed(1)+" horas");
*/
/*
9. Se requiere determinar el costo que tendrá realizar una llamada telefónica con base en el tiempo que 
dura la llamada y en el costo por minuto. 
let tiempo = parseFloat(prompt("¿Cuantas minutos duro su llamada?"));
let costo = parseFloat(prompt("¿Cuanto vale el minuto?"));
let pago = costo*tiempo;
alert("El costo de su llamada es $"+pago);
*/
/*
10. Aguas Rionegrinas requiere determinar el pago que debe realizar una persona por el total de metros 
cúbicos que consume de agua.
let m3 = parseFloat(prompt("¿Cuantos m3 de agua consume?"));
let costo = parseFloat(prompt("¿Cuanto cuesta el m3?"));
let pago = m3*costo;
alert("Su pago es de $"+pago);
*/
/*
11. EDERSA requiere determinar el pago que debe realizar una persona por el consumo de energía eléctrica,
la cual se mide en kilowatts (KW). 
let kw = parseFloat(prompt("¿Cuanto consume de electricidad en kw?"));
let costo = parseFloat(prompt("¿Cuanto vale el kilowatt?"));
let pago = kw*costo;
alert("Su pago es de $"+pago);
*/
/*
12. Determinar cuánto pagará finalmente una persona por un artículo (X), considerando que tiene un 
descuento de 20%, y debe pagar 15% de IVA (debe mostrar el precio con descuento y el precio final).
let precio = parseFloat(prompt("¿Cuanto vale su articulo?"));
let descuento = precio-(precio*0.2);
let final = (descuento*0.15)+descuento;
alert("El precio con descuento es $"+descuento+" \nEl precio final es $"+final);
*/
/*
13. Determinar cuánto dinero ahorra una persona en un año si considera que cada semana ahorra 15% de su
sueldo (considere cuatro semanas por mes y que no cambia el sueldo).
let sueldo = parseFloat(prompt("¿Cuanto cobra por mes?"));
let ahorro = (sueldo*0.15)*48;
alert("Usted ahorraria $"+ahorro);
*/
/*
14. Una empresa desea determinar el monto de un cheque que debe proporcionar a uno de sus empleados que
tendrá que ir por (X) número de días a la ciudad de Monterrey; los gastos que cubre la empresa son: hotel,
comida y 100.00 pesos diarios para otros gastos. El monto debe estar desglosado para cada concepto. 
let dias = parseInt(prompt("¿Cuantos dias estara en la ciudad?"));
let comida = parseFloat(prompt("¿Cuanto vale la comida?"));
let comidafin = comida * dias;
let hotel = parseFloat(prompt("¿Cuanto cuesta un dia en el hotel?"));
let hotelfin = hotel * dias;
let pesosdiarios = 100.000 * dias;
total = comida + hotel + pesosdiarios;
alert("El monto del cheque va a ser de $" + total + 
"\nComida: $" + comidafin + 
"\nHotel: $" + hotelfin + 
"\nPesos diarios: $" + pesosdiarios);
*/