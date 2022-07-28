# React Input por Extenso

Template para teste

## Como instalar

Abaixo as formas de como instalar essa biblioteca utilizando o npm:

```
npm install template-js
```

## Como usar

Uma forma básica de como utilizar o componente:

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
import TemplateReactJS from "template-reactjs";
const App = () => {
  const [numero, setNumero] = useState("");
  return (
    <>
      <TemplateReactJS
        tipoExtenso="monetario"
        onChange={numeroExtenso => setNumero(numeroExtenso)}
      />
      <p>
        <strong>Número por extenso</strong>: {numero}
      </p>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
```

## Propriedades

Esse componente é uma abstração de um componente input do tipo numérico,
todas as propriedades de um input estão disponíveis.

| Propriedade | Valor inicial | Tipo   | Descrição                     |
| ----------- | ------------- | ------ | ----------------------------- |
| tipoExtenso | normal        | string | Formato de extensão do número |

<em>

ops

</em>