import HomeHeader from "../ui/Home/HomeHeader";
import Post from "./../ui/Home/Post";
import Navbar from "../ui/navigation/Navbar";

/* if there's notification, icon/color changes
 images upload should be grid for multiple pics*/
const HomePage = ({ homePageElements }) => {
  return (
    <div>
      <HomeHeader homePageElements={homePageElements} />

      {/* Main content */}
      <div className="m-[7px] text-sm">
        {/* homepage body div, change font for pc */}
        <Post homePageElements={homePageElements} />
        <Navbar />
      </div>
    </div>
  );
};

export default HomePage;
