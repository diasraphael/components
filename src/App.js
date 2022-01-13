import "./App.css";
import Container from "./components/Container/Container";
import Content from "./components/Content/Content";
import Modal from "./components/Modal/Modal";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Container>
        <Sidebar></Sidebar>
        <Content></Content>
      </Container>

      <Modal>
        <h1>this is a modal content</h1>
        <h3>
          here you can add new component which should come inside the modal
        </h3>
      </Modal>
    </div>
  );
}

export default App;
