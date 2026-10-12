// To run the State snippet, import { useState } from 'react' in your component file.

export const EXAMPLES = {
  Components: {
    title: "Components",
    description:
      "Components are the building blocks of React applications. A component is a reusable piece of the user interface that combines markup and JavaScript logic.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  Jsx: {
    title: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it lets you use JavaScript expressions inside markup to display dynamic content.",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  Props: {
    title: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments and let you pass data from a parent component to a child component.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  State: {
    title: "State",
    description:
      "State allows React components to change their output over time in response to user actions and other events. Updating state causes React to render the component again with the new values.",
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible((wasVisible) => !wasVisible);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {isVisible ? 'Hide Details' : 'Show Details'}
      </button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
