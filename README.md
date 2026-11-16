# Cinematic AI Studio — MVP Remotion

Editor de videos documental/misterio en español. Incluye interfaz React, previsualización Remotion Player, importación al servidor, guion a escenas, inspector, timeline visual, guardar/abrir proyectos JSON y render MP4 real mediante Remotion Renderer.

## Requisitos
- Node.js 20 o superior
- npm
- Computadora para renderizar (render MP4 no se ejecuta dentro de un simple navegador móvil)

## Ejecutar
1. Descomprime el ZIP.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta `npm install`
4. Ejecuta `npm run dev`
5. Abre `http://localhost:5173`

El servidor de render se inicia también en el puerto 3001. Los medios subidos se guardan en `public/uploads`; exportaciones en `public/exports`.

## Importante
Es un MVP inicial. La división del guion se basa en párrafos y signos de puntuación, no en un modelo de IA externo. Algunos efectos aparecen como opciones del inspector y todavía se deben extender en el componente de composición. La exportación depende de que Remotion y Chromium estén correctamente instalados en el entorno Node. En Android, la interfaz puede adaptarse, pero para render MP4 confiable se recomienda ejecutar el backend en una computadora o servidor.
