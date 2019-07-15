import React from "react";
import { Header, Main, Title, DropDown } from "./components";
import "./index.scss";

const LANGUAGES = [
  { name: "English", code: "en" },
  { name: "Lithuanian", code: "lt" }
];

function App() {
  const [language, setLanguage] = React.useState(LANGUAGES[0].code);
  const items = LANGUAGES.map(({ name, code }) => ({
    children: name,
    value: code
  }));
  const onChange = e => {
    setLanguage(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <DropDown items={items} onChange={onChange} />
      <Main language={language} />
    </div>
  );
}

export default App;
