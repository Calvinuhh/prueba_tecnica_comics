# Guia para arrancar el proyecto localmente

## Tecnologias implementadas:

`TypeScript, Node.js, Express.js, MongoDB, Mongoose y React`

Esta rama del proyecto tiene la diferencia de que para el servidor se implemento en vez de **_PostgreSQL_** y **_Sequelize_**, se hizo uso de **_MongoDB_**, **_Mongoose_** y **_TypeScript_**

Primeramente tendremos que registrarnos en la API de Comic Vine para obtener una API KEY que debemos guardar para su posterior uso, el registro se podra realizar desde este link:

[Comic Vine API](https://comicvine.gamespot.com/api) - https://comicvine.gamespot.com/api

La version de `Node` utilizada para la prueba es la version `22.11.0`, en caso de no contar con esa version se puede hacer uso de `Nvm` (Node Version Manager) para instalar la version correspondiente.

Lo siguiente es instalar el proyecto en una carpeta local utilizando el siguiente comando en la terminar de **_Cmd_**, **_PowerShell_** o **_Bash_**:

```
git clone https://github.com/Calvinuhh/prueba_tecnica_calvin.git
```

una vez clonado el repositorio tendremos la carpeta **_prueba_tecnica_comics_**

Ingresaremos a la carpeta descargada:

```powershell
cd prueba_tecnica_comics
```

Para obtener la rama del repositorio deseada primero verificaremos las ramas remotas con este comando:

```powershell
git branch -r
```

Veremos un resultado como este:

```powershell
  origin/HEAD -> origin/main
  origin/main
  origin/postgresql_sequelize
  origin/typescript_mongodb_mongoose
```

Para recuperar los archivos del servidor con _MongoDB_ y _Mongoose_ utilizaremos el comando:

```powershell
git checkout typescript_mongodb_mongoose
```

y asi obtendremos los archivos necesarios, se vera algo asi:

```powershell
branch 'typescript_mongodb_mongoose' set up to track 'origin/typescript_mongodb_mongoose'.
Switched to a new branch 'typescript_mongodb_mongoose'
```

Tendremos una rama nueva llamada `typescript_mongodb_mongoose` en la que quedaremos situados.

### Variables de entorno

Encontraremos 2 carpetas, **_server_** y **_client_**, en donde cada carpeta tendra un archivo `.env.demo`, que tendra las descripciones de las variables de entorno que tendremos que cambiar.

En las dos carpetas, tanto en **_server_** como **_client_** cambiaremos el nombre del archivo `.env.demo` por `.env` para que asi se lean las variables de entorno.

### En **_Server_** tendremos un archivo asi:

```
PORT = (puerto en el que va a escuchar el servidor, por ejemplo 3000)

API_KEY = (api key proveniente de la API Comic Vines)

MAIN_URL = https://comicvine.gamespot.com/api

DB_URI = (URI de la Base de datos de MongoDB)

FRONTEND_URL = (URL del cliente)
```

### En **_Client_** tendremos un archivo asi:

```
VITE_SERVER_URL=http://localhost:{PORT}/issues
```

Reemplazaremos las variables por las correspondientes para arrancar el proyecto.

Tener en cuenta que en `VITE_SERVER_URL` el puerto que se concatena `{PORT}` sera el mismo puerto que se establecio en el `PORT` del **_servidor_**

Ahora vamos a proceder con la instalacion de las dependencias, en la raiz de ambas carpetas vamos a ejecutar el comando `npm install`

### server

```powershell
cd server
npm install
```

### client

```powershell
cd client
npm install
```

## Base de datos MongoDB

El siguiente paso sera tener una terminal abierta, ua sea de **_Cmd_**, **_PowerShell_** o **_Bash_** en donde ejecutaremos el comando `mongod` para iniciar el servidor de **_MongoDB_**:

```powershell
mongod
```

Una vez teniendo el servidor de _MongoDB_ escuchando ahora vamos a arrancar el proyecto de **_Server_** y **_Client_**

Ahora se podra arrancar el proyecto localmente, para esto se tendra que abrir 2 terminales, ya sea en **_Cmd_**, **_PowerShell_** o **_Bash_**, una para el servidor, y otra para el cliente, en cada una ejecutar el comando:

```powershell
npm run dev
```

En el cliente se ver algo asi:

```powershell
  VITE v5.4.11  ready in 483 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```

En el servidor se vera algo asi:

```powershell
> prueba_tecnica_comics@1.0.0 dev
> ts-node-dev src/index.ts

[INFO] 10:55:49 ts-node-dev ver. 2.0.0 (using ts-node ver. 10.9.2, typescript ver. 5.7.2)
Database conection succesful
Server listening on port: 3000

```

Ahora se podra ver el proyecto en la siguiente ruta: http://localhost:5173/
