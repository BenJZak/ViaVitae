import LandingPage from "./pages/LandingPage";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
