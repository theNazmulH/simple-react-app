import { useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    setDisplayText(text);
  };

  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div className="app">
      <Header title="My Simple React App" />
      <Content
        buttonText="Display Text"
        onButtonClick={handleButtonClick}
        onTextAreaChange={handleTextAreaChange}
        displayText={displayText}
      />
      <Footer />
    </div>
  )
}

export default App
