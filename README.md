# User Test — Forzar errores para que Sentry los capture

Objetivo
- Que el usuario genere intencionalmente diferentes tipos de errores en una app de prueba para verificar que Buggle los reciba y registre correctamente.

Cómo ejecutar
- Instalar dependencias (npm install)
- Levantar la app de prueba (npm run dev).
- Abrir la app en el navegador (normalmente en http://localhost:5173, comprobar consola por si el puerto está ocupado).



Escenarios sugeridos
    - ErrorButton: lanza un error al hacer clic en el botón "Oops! This is an error Button".;
    - Rechazo de promesa no manejado: Promise.reject(new Error('Test promise rejection'));
    - Hacer un error con console.log(): console.log(undefinedVariable);
    - Hacer un error con console.error(): console.error(new Error('Test console error'));
