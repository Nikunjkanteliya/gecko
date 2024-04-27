import "./App.css";
import Aboutus from "./component/Aboutus";
import Footer from "./component/Footer";
import Landing from "./component/Landing";
import Processpage from "./component/Processpage";
import Servicepage from "./component/Servicepage";
import Testamonial from "./component/Testamonial";
import Userform from "./component/Userform";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto my-0 p-5">
      <Landing />
      <Servicepage />
      <Aboutus />
      <Processpage />
      <Testamonial />
      <Userform />
      <Footer />
    </div>
  );
}

export default App;
