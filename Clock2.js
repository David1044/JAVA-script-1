<html>
<head>
<title>Reloj using JS</title>
<script language="JavaScript">
function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("mueveReloj()",1000)
}
</script>
</head>

<body onload="mueveReloj()">

Clock that change the state when the hour is complete.

<form name="form_reloj">
<input type="text" name="reloj" size="10">
</form>

</body>
</html>
