import { useState } from "react";
import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import jsxImg from "./assets/jsx-ui.png";
import propsImg from "./assets/config.png";
import stateImg from "./assets/state-mgmt.png";
import Header from "./components/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function CoreConcept(props) {
  return (
    <li>
      <img src={props.imgage} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Components");
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>core concepts</h2>
          <ul>
            <CoreConcept
              title="components"
              description="The core UI bulding block-compose the user interface by combining multiple components."
              imgage={componentsImg}
            />
            <CoreConcept
              title="Jsx"
              imgage={jsxImg}
              description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
            />
            <CoreConcept
              imgage={propsImg}
              title="Props"
              description="Make components configurable (and therefore reusable) by passing input data to them."
            />
            <CoreConcept
              imgage={stateImg}
              title="State"
              description="React-managed data which, when changed, causes the component to re-render & the UI to update."
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("Components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("Jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
      <main>
        <h2>Time to get started </h2>
      </main>
    </div>
  );
}

export default App;
