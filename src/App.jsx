import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Settings";
import Notifications from "./components/pages/Notifications";
import LandingPage from "./components/pages/LandingPage";
import Home from "./components/pages/Home";
import Messages from "./components/pages/Messages";
import Chat from "./components/pages/Chat";

const App = () => {
  //Notification elements
  const objects = {
    user: "BigNuel",
    userName1: "OlaSubomi",
    userName2: "Boluwatife",
    userName3: "Christian",
    count: "66",
    followBtn: "Follow Back",
  };

  const notificationsElements = {
    /* find a way to make the name bold, gpt */
    like: `${objects.userName1} and ${objects.count} others liked your post` /* The text will be generated from the backend */,
    comment: `${objects.userName3} commented on your post`,
    share: `${objects.userName3} shared your post`,
    /* i need to loop this follow and followback button in together in a p tag from the backend, so if the user clicks
    follow, the backend loops or whatever the action to the app.jsx element and it reflects in the component. */
    /* find a way to loop these 2 as p elements in the div from app.jsx, just like you did with hexacolor and numgenerator*/
    follow: `${objects.userName2} followed you`,
    followBtn: `${objects.followBtn}`,
    post: `${objects.userName1} made a new post`,
  };

  const homePageElements = {
    greeting: `Hi ${objects.user}`,
    appName: "SocialConnect",
    userName: `${objects.userName1}`,
    /* if any then display and if they tag, display taggedd user*/
    postText1:
      "Yesterday I created this artwork to express my gratitude towards the amazing people on this platform.",
    postText2:
      "Exploring new hiking trails this weekend! 🏞️ Can't wait to immerse myself in nature. Who else loves a good outdoor adventure? #NatureLovers #HikingLife",
    postText3:
      "Navigating the beautiful journey of marriage with my best friend and partner-in-crime! 💑 From silly arguments to heartfelt conversations, every moment strengthens our bond. #InfluenceWithLove",
    commentCount: `20` /* if condtion for icon when user likes or comment */,
    likeCount: `328`,
    optionsIcon: "..." /* added for ui */,
  };

  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/Home"
        element={<Home homePageElements={homePageElements} />}
      />
      <Route path="/profile" element={<Profile />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/LandingPage" element={<LandingPage />} />
      <Route
        path="/Notifications"
        element={
          <Notifications notificationsElements={notificationsElements} />
        }
      />
      <Route path="/Settings" element={<Settings />} />
      <Route path="*" element={<p>Page Not Found (Error 404!)</p>} />
    </Routes>
  );
};

export default App;
