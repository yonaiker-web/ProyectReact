import Testimonio from "./component/Testimonio";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
