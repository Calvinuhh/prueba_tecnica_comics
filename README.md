# Guia para arrancar el proyecto localmente

### Tecnologias implementadas:

`Node.js, Express.js, PostgreSQL, Sequelize y React`

Primeramente tendremos que registrarnos en la API de Comic Vine para obtener una API KEY que debemos guardar para su posterior uso, el registro se podra realizar desde este link:

[Comic Vine API](https://comicvine.gamespot.com/api) - https://comicvine.gamespot.com/api

La version de `Node` utilizada para la prueba es la version `22.11.0`, en caso de no contar con esa version se puede hacer uso de `Nvm` (Node Version Manager) para instalar la version correspondiente.

Lo siguiente es instalar el repositorio en una carpeta local, en una ubicacion deseada para descargar el repositorio se utilizara el siguiente comando en la terminar de ***Cmd***, ***PowerShell*** o ***Bash***:

```
git clone https://github.com/Calvinuhh/prueba_tecnica_comics.git
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

Para recuperar los archivos del servidor con _PostgreSQL_ y _Sequelize_ utilizaremos el comando:

```powershell
git checkout postgresql_sequelize
```

y asi obtendremos los archivos necesarios, se vera algo asi:

```powershell
branch 'postgresql_sequelize' set up to track 'origin/postgresql_sequelize'.
Switched to a new branch 'postgresql_sequelize'
```

Tendremos una rama nueva llamada `postgresql_sequelize` en la que quedaremos situados.

### Variables de entorno

Encontraremos 2 carpetas, **_server_** y **_client_**, en donde cada carpeta tendra un archivo `.env.demo`, que tendra las descripciones de las variables de entorno que tendremos que cambiar.

En las dos carpetas, tanto en **_server_** como **_client_** cambiaremos el nombre del archivo `.env.demo` por `.env` para que asi se lean las variables de entorno.

### En **_Server_** tendremos un archivo asi:

```
PORT = (puerto en el que va a escuchar el servidor, por ejemplo 3000)

API_KEY = (api key proveniente de la API Comic Vines)

MAIN_URL = https://comicvine.gamespot.com/api

DB_USER = (usuario en postgres, normalmente es "postgres")
DB_PASSWORD = (contraseña de postgres)
DB_HOST = (puerto de postgres, normalmente es "localhost:5432")
DATABASE_NAME = (nombre de la base de datos)

FRONTEND_URL = (URL del cliente)
```

### En **_Client_** tendremos un archivo asi:

```powershell
VITE_SERVER_URL=http://localhost:{PORT}/issues
```
Reemplazaremos las variables por las correspondientes para arrancar el proyecto.

Tener en cuenta que en `VITE_SERVER_URL` el puerto que se concatena `{PORT}` sera el mismo puerto que se establecio en el `PORT` del **_servidor_**

ahora vamos a proceder con la instalacion de las dependencias, en la raiz de ambas carpetas vamos a ejecutar el comando `npm install`

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

## base de datos PostgreSQL

El siguiente paso sera crear una base de datos PostgreSQL, implementando `pgAdmin` o `psql`, asegurarse que el `DATABASE_NAME` en el *.env* del la carpeta ***Server*** sea igual al nombre de la base de datos al momento de crearla, sino el proyecto no funcionara

Ahora se podra arrancar el proyecto localmente, para esto se tendra que abrir 2 terminales, ya sea en Cmd, PowerShell o Bash, una para el servidor, y otra para el cliente, en cada una ejecutar el comando:

```
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
> prueba_tecnica_motion_tech_calvin@1.0.0 dev
> nodemon index.js

[nodemon] 3.1.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node index.js`
Conexion con la base de datos exitosa
Servidor escuchando en el puerto: http://localhost:3000

```

Ahora se podra ver el proyecto en la siguiente ruta: http://localhost:5173/
