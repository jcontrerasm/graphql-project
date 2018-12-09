El presente proyecto contiene un ejemplo de implementación de graphql.

## Instalar los paquetes necesarios
- Ejecutar desde la raiz el comando `yarn install`

## Para levantar el servidor
- Ejecutar desde la raiz el comando `yarn start`

## Ejecución de ejemplos:
**Ejemplo 1:**
Se pretende obtener el mensaje que tiene como referencia el input `hello`.

1. Ejecutar `yarn start`
2. Ingresar desde consola en la petición Client Request: la cadena `{ hello }`
3. Deberia de obtener como respuesta en el Server Answer: la cadena `{ hello: 'world with Graphql' }`

**Ejemplo 2:**
Se pretender obtener numeros aleatorios en el rango de 1 al 6 mediante el ingreso del input `diceRoll` desde la linea de comandos.

1. Ejecutar `yarn start`
2. Ingresar desde consola en la petición Client Request: la cadena `{ diceRoll }` o `{ diceRoll(quantity: x) }`. `x`representa la cantidad de números a obtener.
3. Deberia de obtener como respuesta en el Server Answer: la cadena `{ diceRoll: [x...] }`

**Ejemplo 3:**
Se pretende obtener la cantidad de usuarios registrados en la colección `users` en la base de datos `test` desde el motor de base de datos Mondodb.
**NOTA: Pasos previos**
* Crear la collección: `db.createCollection("users")`
* Generar registros:
`db.users.insertOne({ 
    firstName: "John", 
    lastName: "Doe", 
})`

1. Ejecutar `yarn server`
2. Ingresar desde consola en la petición Client Request: la cadena `{ usersCount }`
3. Deberia de obtener como respuesta en el Server Answer: la cadena `{ usersCount: x }`. `x` representa al número de usuarios encontrados.
