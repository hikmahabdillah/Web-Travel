import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";

function DetailPackages() {
  return (
    <>
      <Navbar isOtherPage={true}/>
      <Detail/>
      <Footer/>
    </>
  );
}

export default DetailPackages;
