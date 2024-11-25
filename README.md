# Guia para arrancar el proyecto localmente

## Tecnologias implementadas:

`TypeScript, Node.js, Express.js, MongoDB, Mongoose y React`

Esta rama del proyecto tiene la diferencia de que para el servidor se implemento en vez de _PostgreSQL_ y _Sequelize_, se hizo uso de _MongoDB_, _Mongoose_ y _TypeScript_

Primeramente tendremos que registrarnos en la API de Comic Vine para obtener una API KEY que debemos guardar para su posterior uso, el registro se podra realizar desde este link:

[API Cocmic Vine](https://comicvine.gamespot.com/api) - https://comicvine.gamespot.com/api/

La version de `Node` utilizada para la prueba es la version `22.11.0`, en caso de no contar con esa version se puede hacer uso de `Nvm` (Node Version Manager) para instalar la version correspondiente.

Lo siguiente es instalar el proyecto en una carpeta local utilizando el siguiente comando en la terminar de Visual Studio Code, PowerShell o Bash:

```
git clone https://github.com/Calvinuhh/prueba_tecnica_calvin.git
```

Una vez teniendo el proyecto clonado abriremos la carpeta con el comando `cd prueba_tecnica_calvin`

Encontraremos 2 carpetas, `server` y `client`, ahora vamos a proceder con la instalacion de las dependencias, en la raiz de ambas carpetas vamos a ejecutar el comando `npm install`

### server

```
cd server
npm install
```

### client

```
cd client
npm install
```

Despues de instalar las dependencias en cada carpeta, tanto en la carpeta `server` como en la carpeta `client` crearemos un archivo `.env` guiandonos del archivo `demo.env` que tenemos en cada carpeta

### Variables de entorno

En el `.env` de `server` estas seran las variables de entorno:

```
PORT=(puerto en el que va a escuchar el servidor, por ejemplo 3000)

API_KEY=(api key proveniente de la API Comic Vines)

MAIN_URL=https://comicvine.gamespot.com/api


DB_USER=(usuario en postgres)
DB_PASSWORD=(contraseña de postgres)
DB_HOST=(puerto de postgres, normalmente es localhost:5432)
DATABASE_NAME=(nombre de la base de datos)

FRONTEND_URL=(URL del frontend)
```

En el `.env` de `client` estas seran las variables de entorno:

```
VITE_SERVER_URL=http://localhost:{PORT}/issues
```

Tener en cuenta que en el `VITE_SERVER_URL` el `PORT` es el puerto en el que esta escuchando el servidor

El siguiente paso sera crear una base de datos PostgreSQL, implementando `pgAdmin` o `psql`, asegurarse que el `DATABASE_NAME` sea igual al nombre de la base de datos al momento de crearla, sino el proyecto no funcionara

Ahora se podra arrancar el proyecto localmente, para esto se tendra que abrir 2 terminales, ya sea en VS Code, PowerShell o Bash, una para el servidor, y otra para el cliente, en cada una ejecutar el comando:

```
npm run dev
```

En la terminar del front copiar la url donde se esta ejecutando el proyecto para asi poder visualizarlo en el navegador 👍👍

Tambien se realizo un deploy de prueba en el servicio de `Render`, se puede ver aqui:

```
https://front-test-2pg1.onrender.com/
```
