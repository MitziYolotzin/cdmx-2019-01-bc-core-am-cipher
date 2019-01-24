# Secret Space Mission
:rocket: :milky_way:
##

Secret Space Mission es un generador de claves secretas que pueden ser cifradas o descifradas, permite obtenerlas para ser parte de misiones espaciales, funciona por medio del método [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher). El cual corresponde a una técnica de codificación por sustitución, donde cada letra de un texto es reemplazada por otra letra acorde a un número determinado de posiciones (desplazamiento) en el alfabeto.

Por ejemplo, si usamos un desplazamiento - número (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

## Pre-requisitos e instalación
1. Antes que nada, asegúrate de tener un editor de texto en
   condiciones, algo como [Atom](https://atom.io/),
   [Visual Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com) o cualquier otro de tu preferencia.
2. Para ejecutar los comandos a continuación necesitarás una
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar GNU/Linux como tu Sistema Operativo.
3. Haz tu propio [fork](https://help.github.com/articles/fork-a-repo/)
   de [ este repositorio](https://github.com/MitziYolotzin/cdmx-2019-01-bc-core-am-cipher)
4. [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm run test`.

##Consideraciones técnicas
Este proyecto está desarrollado con:

- EMS6 JavaScriptpuro [JSVanilla](https://medium.com/laboratoria-developers/vanillajs-vs-jquery-31e623bbd46e).
-CSS3
-HTML5
- Se realizaron [pruebas unitarias]() para validar la funcionalidad de codificación y decodificación. Estos test se implementaron con [Mocha](https://mochajs.org/) y assertion library de [Chai](https://www.chaijs.com/).
- Como gestor de proyecto de utilizó NPM (Node Package Manager).

## Pruebas
Las pruebas automatizadas para este sistema requieren de una instalación simple a través del comando npm install. Los tests verifican que regrese una letra acorde a la posición ingresada en el offset. Analiza que la función  cifrar retorne "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33; y que la función decifrar retorne retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33. No cifra caracteres especiales y espacios (" !@" debería retornar  " !@"', ).

###Estilo
El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:
```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```
El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre: qué version de JavaScript/ECMAScript, el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.

# UX-UI
### Usuario

Para conocer el proceso de diseño con el que se desarrollo este producto consultar el siguiente link:

### Boceto
Primeros bocetos de la interfaz. Era muy sencillo, no se sabía a que pertenecía,los botones no eran muy funcionales en posición y diseño. Se realizaron mejoras y cambios de color.

<center><img src="https://i.ibb.co/pfyC1vL/screen2.jpg" alt="screen2" border="0" width=50%> <img src="https://i.ibb.co/4PpTW55/screen2-2.jpg" alt="screen2-2" border="0" width=50%></center>

### Diseño Final
<center><img src="https://i.ibb.co/b7sjdWC/Captura-de-pantalla-2019-01-24-a-la-s-17-37-55.png" alt="Captura-de-pantalla-2019-01-24-a-la-s-17-37-55" border="0" width=80%></center>

### Link del proyecto final:
[Secret Space Mission](https://mitziyolotzin.github.io/cdmx-2019-01-bc-core-am-cipher/src/)

## Autores
-Mitzi Yolotzin Olvera Castillo

## Expresiones de gratitud

Agradezco el apoyo de mi squad "Guacacoders" :green_heart:  y a cada uno de los coaches y team de Laboratoria. :yellow_heart:
