import { Navbar } from "./components/Navbar.tsx";
import { Home } from "./screens/Home.tsx";
import { AboutUs } from "./screens/AboutUs.tsx";
import { BookingScreen } from "./screens/BookingScreen.tsx";
import { VenueScreen } from "./screens/VenueScreen.tsx";

function App() {

  return (
    <div className="app bg-white">
        <Navbar />
        <div>
            <Home />
            <AboutUs />
            <BookingScreen />
            <VenueScreen />
        </div>
    </div>
  )
}

export default App
