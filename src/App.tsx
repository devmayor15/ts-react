import "./App.css";
import { Button } from "./components/Button";
import { Greet } from "./components/Greet";
import Heading from "./components/Heading";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { Input } from "./components/Input";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { ThemeContextProvider } from "./components/context/ThemeContent";
import { Box } from "./components/context/Box";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateLiterals/Toast";

function App() {
  const personName = {
    first: "Bruce",
    last: "wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      <Greet name="Martins" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>Placeholder text</Heading>
      <Button
        handleClick={(event, id) => {
          console.log("button clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
      <LoggedIn />
      <User />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <List
        items={["Batman", "Superman", "Wonderwoman"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <RandomNumber value={10} isPositive={true} />
      <Toast position="center"/>
    </div>
  );
}

export default App;
