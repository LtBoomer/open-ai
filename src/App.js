import Input from "./input/Input";
import "./App.scss";

const Test = () => {
  return <p>Salut</p>;
};

function App() {
  return (
    <div className="App">
      <Input
        labelText={"Password"}
        icon={"https://img.icons8.com/windows/20/lock.png"}
        Component={Test}
      />
    </div>
  );
}

export default App;
