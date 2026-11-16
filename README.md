# Cinematic AI Studio — App móvil

Versión de interfaz móvil nativa (React Native + Expo) para Android.

## Ejecutar
1. Instala Node.js 20.19.4 o posterior en computadora.
2. Descomprime este proyecto.
3. Ejecuta `npm install`.
4. Ejecuta `npx expo start`.
5. Abre Expo Go en Android y escanea el QR (misma red Wi-Fi).

## Incluye
- Interfaz mobile-first con pestañas inferiores.
- Importar medios usando el selector nativo Android.
- Importar TXT y dividir guion en escenas.
- Editar texto/duración/efecto por escena.
- Guardar/exportar estructura del proyecto JSON.
- UI preparada para conectar un backend de render Remotion.

## Nota importante
Remotion es un motor React DOM de composición/render y no corre directamente dentro de React Native/Expo Go. La app móvil administra el proyecto; el render MP4 requiere conectar el endpoint backend de Remotion del proyecto web/servidor. Esta plantilla no afirma que exporte MP4 sin backend.
