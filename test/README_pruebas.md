# Programas de Prueba - MiniBASIC

Este documento describe los 3 programas de prueba incluidos en la carpeta `test/`, y qué características del lenguaje demuestra cada uno.

## programa1_basico.txt

Programa simple sin saltos. Demuestra:
- `PRINT` de una cadena de texto (sin comillas en la salida)
- Asignación de variables (`X = 5`, `Y = 3`)
- Evaluación de expresiones aritméticas (`X + Y`)
- `PRINT` del resultado de una expresión
- Finalización correcta del programa con `END`

**Salida esperada:**
```
Hola Mundo
8
```

---

## programa2_comparaciones_scopes.txt

Demuestra operadores relacionales, manejo de scopes y saltos hacia adelante:
- Operadores relacionales `>`, `<`, `==` (devuelven `true`/`false`)
- Apertura de un scope local con `BEGIN`
- Asignación de una variable local (`Z`) que solo existe dentro del scope
- Cierre del scope con `ENDSCOPE` (la variable `Z` deja de existir)
- `GOTO` saltando hacia adelante (la línea 110 nunca se ejecuta)

**Salida esperada:**
```
false
true
true
100
Fin del programa
```

Memoria global final: `{ X: 5, Y: 10 }` (Z no aparece porque era local al scope).

---

## programa3_concat_loop.txt

Demuestra concatenación de strings y el mecanismo de seguridad ante ciclos infinitos:
- Concatenación de cadenas con coerción de tipos (`"Mini" + "BASIC"`)
- `GOTO` hacia atrás, generando un ciclo (este lenguaje no tiene instrucción `IF`, por lo que un `GOTO` hacia atrás siempre produce un ciclo infinito)
- Detección y aborto seguro del ciclo infinito por parte del intérprete al superar las 10000 iteraciones

**Salida esperada (resumida):**
```
MiniBASIC
Iniciando contador...
1
2
3
...
10000
ERROR FATAL EN EJECUCIÓN (Línea 80): Ciclo infinito detectado (Excedidas las 10000 iteraciones).
```

---

## programa4_mult_div_error.txt

Demuestra las operaciones de multiplicación y división, junto con la validación de división por cero:
- Multiplicación (`X * Y`)
- División (`X / Y`)
- Detección y aborto seguro al intentar dividir por cero (`X / 0`)

**Salida esperada:**
```
8
2
ERROR FATAL EN EJECUCIÓN (Línea 60): Error Aritmético: Division por cero.
```