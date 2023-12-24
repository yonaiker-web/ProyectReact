import { useState } from "react";
import Button from "./component/Button";
import Count from "./component/Count";
import Testimonio from "./component/Testimonio";
import ButtonC from "./component/Calculadora/ButtonC";
import Pantalla from "./component/Calculadora/Pantalla";
import Clear from "./component/Calculadora/Clear";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const addCount = () => {
    setCount(count + 1);
  };

  const reloadCount = () => {
    setCount(0);
  };

  const addInput = (val) => {
    setInput(val);
  };
  return (
    <div className="App px-60 pb-10">
      <div>
        <Testimonio
          nombre="Emma"
          pais="Cololmbia"
          imagen="emma"
          cargo="Ingenira en Sistema"
          empresa="Amazon"
          testimonio="Proident consectetur occaecat culpa ea id voluptate mollit sint velit officia. In deserunt ipsum excepteur exercitation aute eiusmod magna mollit labore enim. Irure Lorem consequat sit reprehenderit tempor culpa ex culpa deserunt. Mollit labore id do amet officia et nisi ipsum pariatur."
        />
        <Testimonio
          nombre="Raul"
          pais="Mexico"
          imagen="raul"
          cargo="Ingenira en Redes"
          empresa="Netflix"
          testimonio="Proident consectetur occaecat culpa ea id voluptate mollit sint velit officia. In deserunt ipsum excepteur exercitation aute eiusmod magna mollit labore enim. Irure Lorem consequat ."
        />

        <Testimonio
          nombre="Roxy"
          pais="Venezuela"
          imagen="roxy"
          cargo="Community"
          empresa="Google"
          testimonio="Proident consectetur occaecat culpa ea id voluptate mollit sint velit officia. In deserunt ipsum excepteur exercitation aute eiusmod magna mollit labore enim. Irure Lorem consequat ."
        />
      </div>

      <div>
        <div className="w-[100%]  ">Contador</div>

        <Button
          texto="Agregar"
          isButtonClick={true}
          isPlus="1"
          onClick={addCount}
        />

        <Button
          texto="Reiniciar"
          isButtonClick={false}
          isPlus="1"
          onClick={reloadCount}
        />

        <Count count={count} />
      </div>

      <div>
        <div className="w-[100%]  ">calculadora</div>
        <div className=" w-[400px] h-[500px] bg-slate-300 text-gray-800  rounded-3xl 	grid grid-rows-4 gap-2 px-10 py-5">
          <Pantalla input={input} />
          <div className="flex justify-between">
            <ButtonC>1</ButtonC>
            <ButtonC>2</ButtonC>
            <ButtonC>3</ButtonC>
            <ButtonC>+</ButtonC>
          </div>
          <div className="flex justify-between">
            <ButtonC>4</ButtonC>
            <ButtonC>5</ButtonC>
            <ButtonC>6</ButtonC>
            <ButtonC>-</ButtonC>
          </div>
          <div className="flex justify-between">
            <ButtonC>7</ButtonC>
            <ButtonC>8</ButtonC>
            <ButtonC>9</ButtonC>
            <ButtonC>/</ButtonC>
          </div>
          <div className="flex justify-between">
            <ButtonC>=</ButtonC>
            <ButtonC>0</ButtonC>
            <ButtonC>.</ButtonC>
            <ButtonC>*</ButtonC>
          </div>
          <div className="mt-4">
            <Clear>Limpiar</Clear>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
