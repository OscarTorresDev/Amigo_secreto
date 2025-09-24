Amigo Secreto

Descripción
Amigo Secreto es una aplicación web interactiva desarrollada como parte del desafío de Alura. Permite a los usuarios crear una lista de participantes, añadir nombres (evitando duplicados) y realizar un sorteo para seleccionar un amigo secreto al azar. La aplicación requiere al menos dos participantes para realizar el sorteo, garantizando una experiencia divertida y funcional para eventos como intercambios de regalos.
El proyecto está construido con HTML, CSS y JavaScript, y utiliza un diseño responsivo y accesible con fuentes personalizadas de Google Fonts.
Características

Añadir nombres de participantes a una lista.
Validación para evitar nombres vacíos o duplicados.
Sorteo aleatorio de un amigo secreto, requiriendo un mínimo de dos participantes.
Interfaz limpia y amigable con estilos personalizados.
Mensajes claros para errores o validaciones (por ejemplo, "Necesitas al menos 2 participantes para el sorteo").

Tecnologías utilizadas

HTML5: Estructura de la página.
CSS3: Estilos personalizados con variables CSS y diseño responsivo.
JavaScript: Lógica para añadir nombres, actualizar la lista y realizar el sorteo.
Google Fonts: Fuentes Inter y Merriweather para una mejor estética.

Instalación
Sigue estos pasos para configurar y ejecutar el proyecto localmente:

Clonar el repositorio:
git clone https://github.com/OscarTorresDev/Amigo_secreto.git


Navegar al directorio del proyecto:
cd Amigo_secreto


Abrir el proyecto:

No se requieren dependencias externas ni instalación de paquetes, ya que el proyecto es completamente frontend.
Abre el archivo index.html en un navegador web (por ejemplo, Chrome, Firefox) haciendo doble clic o usando un servidor local.


(Opcional) Usar un servidor local:

Para una mejor experiencia, puedes usar un servidor local como Live Server en Visual Studio Code.





Estructura del proyecto
Amigo_secreto/
├── assets/
│   ├── amigo-secreto.png       # Imagen del banner
│   └── play_circle_outline.png # Ícono del botón de sorteo
├── index.html                  # Estructura principal de la página
├── style.css                   # Estilos personalizados
└── app.js                      # Lógica de la aplicación

Cómo usar

Añadir participantes:

Escribe un nombre en el campo de texto.
Haz clic en el botón Añadir.
Los nombres se mostrarán en una lista debajo del campo de entrada.
Si intentas añadir un nombre vacío o duplicado, aparecerá una alerta.


Realizar el sorteo:

Una vez que tengas al menos dos participantes, haz clic en el botón Sortear amigo.
El nombre del amigo secreto seleccionado al azar aparecerá en la sección de resultados.
Si hay menos de dos participantes, se mostrará una alerta: "Necesitas al menos 2 participantes para el sorteo."



Posibles problemas y soluciones

El botón "Añadir" no funciona:
Asegúrate de que el archivo app.js está correctamente vinculado en index.html con <script src="app.js" defer></script>.
Abre la consola del navegador (F12, pestaña "Console") para verificar si hay errores de JavaScript.


El sorteo no se realiza:
Verifica que haya al menos dos nombres en la lista.
Si persiste, revisa la consola del navegador para errores.


Las imágenes no cargan:
Confirma que los archivos amigo-secreto.png y play_circle_outline.png están en la carpeta assets/.


Problemas con Git:
Si encuentras errores al empujar cambios al repositorio, asegúrate de haber inicializado el repositorio (git init), añadido los archivos (git add .), hecho un commit (git commit -m "mensaje") y configurado el remoto (git remote add origin https://github.com/OscarTorresDev/Amigo_secreto.git).



Capturas de pantalla
(Nota: Agrega una captura de pantalla real del proyecto y colócala en la carpeta assets/ para actualizar esta sección.)
Contribuciones
Este proyecto fue desarrollado como parte del desafío de Alura. Si deseas contribuir:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b mejora-nueva).
Realiza tus cambios y haz commit (git commit -m "Añadir mejora").
Empuja tus cambios (git push origin mejora-nueva).
Abre un Pull Request en GitHub.

Autor

Oscar TorresGitHub: OscarTorresDev

Licencia
Este proyecto no tiene una licencia específica definida. Está destinado a fines educativos como parte del desafío de Alura.
