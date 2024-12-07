import styles from "./App.module.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Porjects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
