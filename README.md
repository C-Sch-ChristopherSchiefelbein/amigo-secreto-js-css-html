Sorteo de Amigo Secreto


Este proyecto es un sistema web para realizar un sorteo de "amigo secreto". 
Permite agregar nombres de amigos a una lista, actualizar la visualización de la lista y, posteriormente, 
realizar un sorteo de forma aleatoria en el que cada persona recibe un "amigo secreto". 
El sistema se asegura de que nadie se asigne a sí mismo y muestra los resultados directamente en la página.

Características
Agregar Amigos: Permite añadir nombres mediante un campo de entrada, validando que el nombre no esté vacío ni duplicado.
Visualización de Lista: Muestra la lista de amigos agregados en el DOM.
Interactividad: Se pueden agregar amigos presionando la tecla "Enter".
Sorteo Aleatorio: Realiza un sorteo que asigna un amigo secreto a cada participante de manera aleatoria.
Control de Errores: Se requiere tener al menos dos amigos para realizar el sorteo y se evita que alguien se asigne a sí mismo.
Presentación de Resultados: Los emparejamientos se muestran en una lista en la página web.
Estructura del Proyecto


El proyecto se compone de los siguientes archivos:
style.css: contiene la apariencia de algunas secciones del codigo para visualizacion personalizada
index.html: Contiene la estructura básica de la página y los elementos (inputs, listas y botones) para interactuar con el sistema.
script.js: Incluye la lógica en JavaScript, la cual se divide en:
Función agregarAmigo(): Para agregar amigos a la lista.
Función actualizarListaAmigos(): Para actualizar el DOM con los amigos actuales.
Función sortearAmigo(): Para realizar el sorteo del amigo secreto y mostrar los resultados.
Listener para la tecla "Enter" en el campo de entrada, que permite agregar amigos de forma rápida.
Uso




Abrir la página:
Abre el archivo index.html en tu navegador web.
o ocupa el link de GitHub Pages

Agregar Amigos:
Escribe el nombre de un amigo en el campo de texto y presiona "Enter" o haz clic en el botón correspondiente para agregarlo a la lista.

Realizar el Sorteo:
Una vez que hayas agregado al menos 2 amigos, haz clic en el botón "Sortear".
El sistema asignará aleatoriamente un "amigo secreto" a cada persona y mostrará los resultados en una lista en la página.


Funcionamiento del Código
1. Captura y Validación de Datos
Se obtiene el valor del input, se elimina cualquier espacio innecesario y se valida que el nombre no esté vacío.
Se comprueba que el nombre no se encuentre ya en la lista de amigos para evitar duplicados.

2. Actualización del DOM
La función actualizarListaAmigos() recorre el arreglo de amigos y crea un elemento <li> por cada nombre, actualizando la lista visible en la página.

3. Lógica del Sorteo
La función sortearAmigo() primero verifica que existan al menos dos amigos.
Crea una copia del arreglo original para evitar modificarlo.
Para cada amigo, se filtra la lista de posibles asignaciones (excluyendo el propio nombre) y se selecciona un amigo secreto aleatoriamente.
Se almacena la asignación en un objeto de resultados y se actualiza la lista de amigos disponibles para evitar asignar un mismo nombre dos veces.
Finalmente, se recorre el objeto de resultados para crear elementos <li> que muestran cada emparejamiento en la página.

4. Interactividad Adicional
Se agrega un listener al campo de entrada que detecta cuando se presiona la tecla "Enter", lo que permite agregar un amigo sin necesidad de usar el mouse.
