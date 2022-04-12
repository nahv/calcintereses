//Toggler
function toggleUp() {
    let f2style = document.getElementById("f2").style.display
    let f3style = document.getElementById("f3").style.display
    if (f3style === "none") {
        if (f2style === "none") {
        document.getElementById("f2").style.display = "block";
        return}
        document.getElementById("f3").style.display = "block";
    }
} 
function toggleDown() {
    let f2style = document.getElementById("f2").style.display
    let f3style = document.getElementById("f3").style.display
    if (f3style === "block") {
        document.getElementById("f3").style.display = "none";
        return}
        document.getElementById("f2").style.display = "none";
}

function calcular() {
    let f2style = document.getElementById("f2").style.display
    let f3style = document.getElementById("f3").style.display
    if (f2style === "none") {
        //1 período
        let tiempo = ((new Date(document.getElementById("fechaCorte1").value) - new Date(document.getElementById("fechaInicio").value))/(1000 * 3600 * 24))/30;
        let capital = document.getElementById("capital").value;
        let tasa = (document.getElementById("tasa1").value)/100;
        let incremento = (tiempo * 30 / 365) * (tasa * 1200);//Incremento en %
        let interes = (capital * incremento / 100).toFixed(2);//Incremento en $
        let total = formatter.format(parseFloat(capital) + parseFloat(interes));
        document.getElementById("resultado").innerHTML = 
        `Capital: $ ${formatter.format(capital)}<br>
        <p style="font-size:2vh; margin-bottom:1vh">(desde el ${document.getElementById("fechaInicio").value.split("-").reverse().join("-")} 
        hasta el ${document.getElementById("fechaCorte1").value.split("-").reverse().join("-")} al ${document.getElementById("tasa1").value}% mensual)</p>
        ${tiempo.toFixed(2)} meses | ${(tiempo*30).toFixed(0)} días.<br>
        Interés: $ ${formatter.format(interes)} | ${incremento.toFixed(2)} % <br>
        <b>TOTAL:</b> $ ${total}`
        document.getElementById('resultado').scrollIntoView();
        return
    }
    if (f3style === "none") {
        //2 períodos
        let capital = document.getElementById("capital").value;
	let tiempo1 = ((new Date(document.getElementById("fechaCorte1").value) - new Date(document.getElementById("fechaInicio").value))/(1000 * 3600 * 24))/30;
	let tiempo2 = (((new Date(document.getElementById("fechaCorte2").value) - new Date(document.getElementById("fechaCorte1").value))/(1000 * 3600 * 24))/30)-0.0333333333333333;//menos 1 día;
	let tasa1 =  (document.getElementById("tasa1").value)/100;
	let tasa2 = (document.getElementById("tasa2").value)/100;
	let incremento1 = (tiempo1*30/365) * (tasa1 * 1200);
    let incremento2 = (tiempo2*30/365) * (tasa2 * 1200);//Incremento en %
	let interes1 = (capital * incremento1 / 100).toFixed(2);
	let interes2 = (capital * incremento2 / 100).toFixed(2);//Incremento en $
	let interesTotal = parseFloat((parseFloat(interes1) + parseFloat(interes2)).toFixed(2));
	let total = formatter.format(parseFloat(capital) + parseFloat(interesTotal));
	document.getElementById("resultado").innerHTML = 
  `1er período 
  <p style="font-size:2vh; margin-bottom:-6vh">(desde el ${document.getElementById("fechaInicio").value.split("-").reverse().join("-")} 
  				hasta el ${document.getElementById("fechaCorte1").value.split("-").reverse().join("-")} al ${document.getElementById("tasa1").value}% mensual)</p> <br>
  Interés: ${incremento1.toFixed(2)} % | ${parseInt(tiempo1*30)} días | $ ${formatter.format(interes1)}.<br>
  <br>
  2do período 
  <p style="font-size:2vh; margin-bottom:-6vh">(desde el ${document.getElementById("fechaCorte1").value.split("-").reverse().join("-")} 
  				hasta el ${document.getElementById("fechaCorte2").value.split("-").reverse().join("-")} al ${document.getElementById("tasa2").value}% mensual)</p><br>
  Interés: ${incremento2.toFixed(2)} % | ${parseInt(tiempo2*30)} días | $ ${formatter.format(interes2)}.<br>
  <br>
  <b>TOTAL</b> <br>
  Capital: $ ${formatter.format(capital)} <br>
  Interés: ${(incremento1+incremento2).toFixed(2)} % | ${((tiempo1+tiempo2)*30).toFixed(0)} días. | $ ${formatter.format(interesTotal)} <br>
  ${(tiempo1+tiempo2).toFixed(2)} meses. <br> 
  Total: <b>$ ${total}</b> (capital + intereses) <br>`
  document.getElementById('resultado').scrollIntoView();
  return
    }
    else {
        //3 períodos
        let capital = document.getElementById("capital").value;
        let tiempo1 = ((new Date(document.getElementById("fechaCorte1").value) - new Date(document.getElementById("fechaInicio").value))/(1000 * 3600 * 24))/30;
        let tiempo2 = (((new Date(document.getElementById("fechaCorte2").value) - new Date(document.getElementById("fechaCorte1").value))/(1000 * 3600 * 24))/30)-0.0333333333333333;//menos 1 día;
        let tiempo3 = (((new Date(document.getElementById("fechaCorte3").value) - new Date(document.getElementById("fechaCorte2").value))/(1000 * 3600 * 24))/30)-0.0333333333333333;//menos 1 día;
        let tasa1 = (document.getElementById("tasa1").value)/100;
        let tasa2 = (document.getElementById("tasa2").value)/100;
        let tasa3 = (document.getElementById("tasa2").value)/100;
        let incremento1 = (tiempo1*30/365) * (tasa1 * 1200);
      let incremento2 = (tiempo2*30/365) * (tasa2 * 1200);
      let incremento3 = (tiempo3*30/365) * (tasa3 * 1200);//Incremento en %
        let interes1 = (capital * incremento1 / 100).toFixed(2);
        let interes2 = (capital * incremento2 / 100).toFixed(2);
        let interes3 = (capital * incremento3 / 100).toFixed(2);//Incremento en $
        let interesTotal = parseFloat((parseFloat(interes1) + parseFloat(interes2)) + parseFloat(interes3)).toFixed(2);
        let total = formatter.format(parseFloat(capital) + parseFloat(interesTotal));
        document.getElementById("resultado").innerHTML = 
      `1er período 
      <p style="font-size:2vh; margin-bottom:-6vh">(desde el ${document.getElementById("fechaInicio").value.split("-").reverse().join("-")}
      hasta el ${document.getElementById("fechaCorte1").value.split("-").reverse().join("-")} al ${document.getElementById("tasa1").value}% mensual)</p><br>
      Interés: ${incremento1.toFixed(2)} % | ${parseInt(tiempo1*30)} días | $ ${formatter.format(interes1)}.<br>
      <br>
      2do período 
      <p style="font-size:2vh; margin-bottom:-6vh">(desde el ${document.getElementById("fechaCorte1").value.split("-").reverse().join("-")} 
                      hasta el ${document.getElementById("fechaCorte2").value.split("-").reverse().join("-")} al ${document.getElementById("tasa2").value}% mensual)</p><br>
      Interés: ${incremento2.toFixed(2)} % | ${parseInt(tiempo2*30)} días | $ ${formatter.format(interes2)}.<br>
      <br>
      3er período 
      <p style="font-size:2vh; margin-bottom:-6vh">(desde el ${document.getElementById("fechaCorte2").value.split("-").reverse().join("-")} 
                      hasta el ${document.getElementById("fechaCorte3").value.split("-").reverse().join("-")} al ${document.getElementById("tasa3").value}% mensual)</p><br>
      Interés: ${incremento3.toFixed(2)} % | ${parseInt(tiempo3*30)} días | $ ${formatter.format(interes3)}.<br>
      <br>
      <b>TOTAL</b> <br>
      Capital: $ ${formatter.format(capital)} <br>
      Interés: ${(incremento1+incremento2+incremento3).toFixed(2)} % | ${((tiempo1+tiempo2+tiempo3)*30).toFixed(0)} días | $ ${formatter.format(interesTotal)}.<br>
      ${(tiempo1+tiempo2+tiempo3).toFixed(2)} meses. <br>
      Total: <b>$${total}</b> (capital + intereses) <br>`
      document.getElementById('resultado').scrollIntoView();
    }
}