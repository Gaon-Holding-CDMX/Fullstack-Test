# Fullstack-Test

Bienvenido a tu prueba técnica 

## Requerimientos

+ Utilizar Next.js
+ Tema y contenido libre
+ Diseño creativo (Deja salir tu creatividad)
+ Display de datos mock
+ Minimo 3 pantallas
+ Agrega un componente que te parezca atractivo y disruptivo
+ Utiliza un API en Javascript
+ Utiliza una DB en Mongo

## Uso

1. Clonar el repositorio

```bash
git clone https://github.com/Gaon-Holding-CDMX/Fullstack-Test
```

2. Entrar en la carpeta

```bash
cd Fullstack-Test
```

3. Correr la base de datos (si se tiene docker hacer lo siguiente)

```bash
docker run --name prueba -p 27017:27017 -d mongo
```

4. Instalar dependencias

```bash
npm install
```

5. Colocar las variables de entorno

```bash
# Si la base de datos se encuentra en localhost no hacer nada
# en caso contrario colocar la url de la base de datos en el 
# archivo .env.local en la raiz del proyecto
MONGO_URI = "mongodb://127.0.0.1/evauth"
```

6. Correr el proyecto

```bash
npm run dev
```

7. Abrir el navegador en la siguiente dirección

```bash
http://localhost:3000
```