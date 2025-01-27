# Comentarios Generales

Jaz, impecable trabajo!! 💕

En cuanto al TP, el Responsive se ve exactamente como es esperado que lo haga en las distintas pantallas!!! El único detalle a ajustar en que en grandes pantallas el texto de `Descargar meme` rebalsa el botón que es demasiado angosto y queda en dos líneas. Son detalles, nada grave! Lo más importante es que FUNCIONA! 💪

En cuanto al código, algunas pequeñas observaciones:

* HTML:
  * Recordá modificar el atributo `lang` al idioma en que este la página que estés desarrollando, en este caso sería 'es'. En este proyecto no pasa nada, pero si es una web laboral, afecta a la indexación y conduce a penalidades de Google.
  * En la línea 51 tenes un div comentado, si no se utiliza, mejor eliminarlo para no tener código innecesario. Recordá que todos los comentarios de código que no tengan función deben ser removidos antes de entregar un trabajo final.

* En el CSS:  
  * Qué bueno que incluiste variables! Estan muy bien implementadas, Congrats!
  * Ojo con el `height` en main, fijate que te rompe el alto. Te lo fuerza a más de lo que necesitas, quedando fuera de la visualización de pantalla. Siempre es mejor dejar que el contenido sea el que determina el `height` para evitar estos problemas, porque no podemos testear en todos los dispositivos del mundo... pero asi por algún motivo necesitas utilizarlo, las medidas absolutas no son las recomendads para eso. Es mejor práctica optar por medidas relativas (por ejemplo las viewport height) que se adaptan a la medida del dispositivo de visualización. Recomiendo que quites la linea 67 del CSS y si queres separar el boton del final de donde termina la ventana, agregale un `margin-bottom` a main.
  * Hay unos cuantos estilados sobre TAGS HTML. Recordá que hablamos mucho en clase que esta es una práctica muy desaconsejada que puede traer muchos dolores de cabeza. Mi recomendación siempre es que estilen utilizando clases, y según el caso, algún ID. 
  * Cuidado con el spanglish en las clases. Es buena práctica seguir un lineamiento claro, en inglés o en español o como quieras, pero consistente.

* En el JS:
  * En la línea 215 declaras `fontSelect` como variable para el elemento del DOM pero te falta en la declaración establecer `const` o `let`. JavaScript es JavaScript y funciona igual porque es un listener... pero cuidado con eso!

* En el README:
  * Muy bueno!!! Me encantó que agregaras la explicación de uso y también la estructura del proyecto.

Jaz, ¡Excelente trabajo! ¡A seguir aprendiendo!

## Nota final: 9 (nueve)

### Nota desagregada:

- **Menos de 6 (No aprobado)**
- **6 (Aprobado)**
    ✅ Respeta la consigna
    ✅ Estructura correcta de documento HTML
    ✅ Respeta el diseño dado
    ✅ Respeta el funcionamiento
    ✅ Responsive funciona correctamente
- **7 (Bueno)**
    ✅ Buena estructura de proyecto
    ✅ Código bien indentado
    ✅ Comentarios que permiten mejorar la legibilidad del código
- **8 (Muy bueno)**
    ✅ Uso correcto de etiquetas semánticas
    ❌ Buenos nombres de clases
    ✅ Buenos nombres de funciones y variables
- **9 (Muy bueno)**
    ✅ Reutilización de estilos
    ✅ Funciones pequeñas
- **10 (Excelente)**
    ✅ Cumple con las condiciones de accesibilidad avanzada
    ✅ Reutilización de lógica / funciones
    ✅ Commits con mensajes adecuados

❌ ✅