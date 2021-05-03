import React from "react";
import "./styles.css";

const Modal = ({ open }) => (
  <dialog
    style={{
      width: "80%",
      height: "80%",
      marginTop: 10,
      backgroundColor: "#eee"
    }}
    open={open}
  >
    <p>Greetings, one and all!</p>
  </dialog>
);
const Hello = ({ name, background, open, switchModal }) => {
  return (
    <>
      <div style={{ backgroundColor: `${background}` }}>{name}</div>
      <button onClick={switchModal}> {open ? "Close" : "Open"} Modal</button>
      <Modal open={open} />
    </>
  );
};
const HOC = (WrappedComponent) => (props) => {
  return <WrappedComponent {...props} />;
};

const NewComponent = HOC(Hello);
export default function App() {
  const [background] = React.useState("red");
  const [open, setOpen] = React.useState(false);

  const switchModal = () => {
    setOpen(!open);
  };

  return (
    <div className="App">
      <NewComponent
        name="Codesandbox is so cool"
        background={background}
        switchModal={switchModal}
        open={open}
      />
    </div>
  );
}
