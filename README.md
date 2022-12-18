# Find A Home

Es una prueba técnica para colaborar con una ONG en una app que conecte animales en adopción con
personas que quieren adoptar.

## Usamos la librería `react-native-snap-carousel` 

Para hacer el slider(carrusel) de 'screens' con esta libreria haremos lo siguiente, ya que el repo oficial no está siendo
mantenido y da problemas:

1. `npm i react-native-snap-carousel`
2. `npm i -D @types/react-native-snap-carousel` (si usamos typescript)
2. Modificamos el package.json -> "react-native-snap-carousel": "github:apurba-bware/react-native-snap-carousel#5a7f809e921262e4e2f646e8cfc4da85f7bd663d"
3. De nuevo: `npm i`
4. Recargamos todo
