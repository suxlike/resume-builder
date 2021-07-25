import Name from "./Name";
import SetName from "./SetName";
import { useState } from "react";

function App() {
  const [name, setName] = useState(``);

  return (
    <div className="App">
      <SetName setName={setName} />
      <Name name={name} />
    </div>
  );
}

export default App;
