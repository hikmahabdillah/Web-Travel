import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AllPackages from "./components/AllPackages";

function AllPackagesPage() {
  return (
    <>
      <Navbar isOtherPage={true} />
      <AllPackages />
    </>
  );
}

export default AllPackagesPage;
