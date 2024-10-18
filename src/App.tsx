import { Navbar } from "./components/Navbar.tsx";
import { Home } from "./screens/Home.tsx";
import {AboutUs} from "./screens/AboutUs.tsx";

function App() {

  return (
    <div className="app bg-white">
        <Navbar />
        <div>
            <Home />
            <AboutUs />
        </div>
    </div>
  )
}

export default App
