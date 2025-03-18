Documentación del Proyecto: Amigo Secreto

Descripción General
Este proyecto es una aplicación web simple que permite a los usuarios organizar un sorteo de "Amigo Secreto". Los usuarios pueden agregar nombres de participantes, ver la lista de amigos agregados y realizar un sorteo aleatorio para asignar un amigo secreto a cada participante.

Funcionalidades Principales

Agregar Amigos:

Los usuarios pueden ingresar nombres en un campo de texto y agregarlos a la lista de participantes.

Se valida que el campo no esté vacío y que no se ingresen nombres duplicados.

Mostrar Lista de Amigos:

Los nombres agregados se muestran en una lista debajo del campo de entrada.

La lista se actualiza automáticamente cada vez que se agrega un nuevo nombre.

Sortear Amigo Secreto:

Los usuarios pueden realizar un sorteo aleatorio para seleccionar un amigo secreto de la lista.

El resultado del sorteo se muestra en la página.

Interfaz Gráfica:

La aplicación incluye una imagen decorativa (amigo-secreto.png) que mejora la presentación visual.

Los estilos CSS proporcionan un diseño limpio y responsive.

Estructura del Proyecto

El proyecto está organizado en los siguientes archivos:

index.html:

Contiene la estructura básica de la página web.

Incluye un campo de entrada, botones para agregar amigos y realizar el sorteo, y contenedores para mostrar la lista de amigos y el resultado del sorteo.

Vincula el archivo CSS (styles.css) y el archivo JavaScript (script.js).

styles.css:

Define los estilos visuales de la aplicación, incluyendo colores, fuentes, disposición de elementos y diseño responsive.

script.js:

Contiene la lógica de la aplicación:

Maneja la adición de nombres a la lista.

Actualiza dinámicamente la lista de amigos en la página.

Realiza el sorteo aleatorio y muestra el resultado.

assets/amigo-secreto.png:

Imagen decorativa utilizada como logo en la interfaz gráfica.

Flujo de Funcionamiento
Agregar Amigos:

El usuario ingresa un nombre en el campo de texto y hace clic en el botón "Agregar".

El nombre se valida y, si es válido, se agrega al array amigos.

La lista de amigos se actualiza automáticamente en la página.

Mostrar Lista de Amigos:

Cada vez que se agrega un nombre, la función actualizarListaAmigos recorre el array amigos y crea elementos <li> para mostrar los nombres en una lista.

Sortear Amigo Secreto:

El usuario hace clic en el botón "Sortear Amigo".

La función sortearAmigo selecciona un nombre aleatorio del array amigos y lo muestra en la sección de resultados.

Interfaz Gráfica:

La imagen amigo-secreto.png se muestra como un logo en la parte superior de la página.

Los estilos CSS aseguran que la aplicación sea visualmente atractiva y fácil de usar.