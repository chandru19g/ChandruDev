import AboutMe from "./sections/AboutMe";
import { ContactUs } from "./sections/ContactUs";
import Intro from "./sections/Intro";

function App() {
  return (
    <div className="bg-primaryColor">
      <Intro />
      <AboutMe />
      <ContactUs />
    </div>
  );
}

export default App;
