import "./App.css";
import Home from "./pages/home/home";
import FlowProvider from "./provider/Flow/Flow.provider";

function App() {
  return (
    <FlowProvider>
      <Home />
    </FlowProvider>
  );
}

export default App;
