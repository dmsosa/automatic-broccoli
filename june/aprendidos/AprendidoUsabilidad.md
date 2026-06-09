El [Consorcio World Wide Web (W3C)](https://www.w3.org/) desarrolla estándares y directrices para ayudar a todos a construir una web basada en los principios de accesibilidad, internacionalización, privacidad y seguridad.

El W3C contiene principalmente documentos de referencia y especificaciones detalladas dirigidas a quienes necesitan implementar elementos como las especificaciones de HTML y CSS. Si bien a veces puede resultar útil para un desarrollador web leer la documentación de referencia o las especificaciones para comprender los matices de algún tema, en realidad no es aqui donde encontraremos un sitio central donde resolver nuestras dudas sobre como crear codigo HTML o CSS.

IMPORTANTE: W3C no debe confundirse con W3Cschools.com, un sitio web de tutoriales.

La alternativa mas cercana a una 'documentacion oficial' sin duda alguna es MDN Web Docs (anteriormente Mozilla Developer Network) es un repositorio líder, impulsado por la comunidad, que ofrece documentación completa, tutoriales y recursos de aprendizaje para desarrolladores web. Sirve como guía confiable para HTML, CSS, JavaScript y API web, y es mantenido por Mozilla, colaboradores y socios de la industria como Google y Microsoft.

RESUMEN: Se trata de una documentacion hecha por una entidad de gran confianza que está muy involucrada con el W3C.

Por ello, a la hora te investigar las mejores practicas para confeccionar paginas web con una accesibilidad optima para todos los usuarios, caben destacar los siguientes puntos aprendidos:

* Utilizar atributos que ayudan a la accesibilidad (atributos 'aria').

Por ejemplo, podemos escribir una tabla muy simple, por ejemplo:

<table>
  <tr>
    <td>Nombre</td>
    <td>Edad</td>
    <td>Pronombres</td>
  </tr>
  <tr>
    <td>Gabriel</td>
    <td>13</td>
    <td>él/él</td>
  </tr>
  <tr>
    <td>Elva</td>
    <td>8</td>
    <td>ella/ella</td>
  </tr>
  <tr>
    <td>Freida</td>
    <td>5</td>
    <td>ella/ella</td>
  </tr>
</table>

Pero esto tiene problemas — no hay forma de que un usuario lector de pantalla asocie filas o columnas como agrupaciones de datos. Para hacer esto, necesita saber cuáles son las filas de encabezado y si encabezan filas, columnas, etc. 

SOLUCION:

Los encabezados de tabla se definen utilizando elementos <th> — también puede especificar si son encabezados para filas o columnas utilizando el atributo de 'scope'.

Tanto el elemento <caption> como el atributo de 'summary' del elemento <table> realizan trabajos similares — actúan como texto alternativo para una tabla (el rol que cumple el atributo 'alt' en imagenes u elementos de input).


* Estructurar las secciones de la página de forma lógica, usar HTML semántico, por ejemplo, navegación (<nav>), pie de página (<footer>) y unidades de contenido repetidas (<article>). 

# ¿Qué son los atributos ARIA?
Accessible Rich Internet Applications (ARIA) es un conjunto de roles y atributos que definen formas de hacer que el contenido web y las aplicaciones web (especialmente aquellas desarrolladas con JavaScript) sean más accesibles para las personas con discapacidades.

Atributos ARIA mas frecuentes:

* aria-activedescendant
* aria-atomic
* aria-autocomplete
* aria-braillelabel
* aria-brailleroledescription
* aria-busy
* aria-checked
* aria-colcount
* aria-colindex
* aria-colindextext
* aria-colspan
* aria-controls
* aria-current
* aria-describedby
* aria-description
* aria-details
* aria-disabled