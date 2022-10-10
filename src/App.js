import { lazy, Suspense } from "react";
import "./App.css";
import "./styles/fonts.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const Header = lazy(() => import("./components/Header/Header.jsx"));
  const HeroSection = lazy(() =>
    import("./components/HeroSection/HeroSection")
  );

  return (
    <Suspense fallback={<h1>Loading......</h1>}>
      <main className="background-colour">
        <Header />
        <HeroSection />
      </main>
    </Suspense>
  );
}

export default App;
