# Criptos

Este es un proyecto desarrollado en **React Native**, llamado **Criptos**, que permite visualizar información de criptomonedas de forma dinámica y actualizada.

## Requisitos previos

Antes de comenzar, asegúrate de tener tu entorno configurado según la [documentación oficial de React Native](https://reactnative.dev/docs/environment-setup).

## Instalación

1. Clona el repositorio en tu máquina.
2. Instala las dependencias utilizando **Yarn**:

```sh
yarn install
```

3. Para instalar las dependencias nativas en iOS, ejecuta:

```sh
yarn pod
```

4. Crea un archivo `.env` en la raíz del proyecto y agrega la URL base de la API:

```
HOST_BASE_URL=https://tudominio.com/api
```

5. Puedes ver todos los comandos que puedes ejecutar en el archivo **package.json**

## Ejecución del proyecto

### Iniciar Metro

```sh
yarn start
```

### Ejecutar en Android

```sh
yarn android
```

### Ejecutar en iOS

```sh
yarn ios
```

## Modificación rápida

Puedes modificar el archivo `App.tsx` para empezar a personalizar la aplicación. Los cambios se reflejan automáticamente gracias a la funcionalidad de **Fast Refresh**.

## Problemas comunes

Si experimentas errores al compilar o ejecutar el proyecto:

* Asegúrate de tener todas las herramientas instaladas (Xcode, Android Studio, etc.)
* Reinicia Metro bundler
* Borra la caché con `yarn ccache`

Más soluciones puedes encontrarlas en la [guía oficial de resolución de problemas](https://reactnative.dev/docs/troubleshooting).

## Recursos adicionales

* [Documentación de React Native](https://reactnative.dev)
* [Guía de integración](https://reactnative.dev/docs/integration-with-existing-apps)
* [Blog oficial](https://reactnative.dev/blog)

---

¡Gracias por usar Criptos! 🚀
