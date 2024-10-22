import { Navbar } from "./components/Navbar.tsx";
import { Home } from "./screens/Home.tsx";
import { AboutUs } from "./screens/AboutUs.tsx";
import { BookingScreen } from "./screens/BookingScreen.tsx";
import { VenueScreen } from "./screens/VenueScreen.tsx";
import { CallToActionBanner } from "./screens/CallToActionBanner.tsx";
import { NewsScreen } from "./screens/NewsScreen.tsx";
import { Footer } from "./components/Footer.tsx";

function App() {

  return (
    <div className="app bg-white">
        <Navbar />
        <div>
            <Home />
            <AboutUs />
            <BookingScreen />
            <VenueScreen />
            <CallToActionBanner />
            <NewsScreen />
        </div>
        <Footer />
    </div>
  )
}

export default App
