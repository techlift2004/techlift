import { BrowserRouter } from "react-router-dom";
import Routes from "./route";



function App() {
  return (
    <div className="max-w-[1500px] mx-auto bg-[#ECD3FF] "> 
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    </div>
  );
}

export default App;