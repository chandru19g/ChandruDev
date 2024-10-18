import AboutMe from "./sections/AboutMe";
import { ContactUs } from "./sections/ContactUs";
import Intro from "./sections/Intro";
import { Projects } from "./sections/Projects";

function App() {
  return (
    <div className="bg-primaryColor">
      <Intro />
      <AboutMe />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App;
