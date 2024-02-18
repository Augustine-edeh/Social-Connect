import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/pages/Profile";
/* import Settings from "./components/pages/Settings"
import Notifications from './components/pages/Notifications'
import LandingPage from './components/pages/LandingPage'
import HomePage from './components/pages/HomePage'
 */

const App = () => {
    //Notification elements
  const objects = {
    user: 'BigNuel',
    userName1: 'OlaSubomi',
    userName2: 'Boluwatife',
    userName3: 'Christian',
    count: '66',
    followBtn:'Follow Back',
    }

  const notificationsElements = {
    /* find a way to make the name bold, gpt */
    like: `${objects.userName1} and ${objects.count} others liked your post`, /* The text will be generated from the backend */
    comment: `${objects.userName3} commented on your post`,
    share: `${objects.userName3} shared your post`,
    /* i need to loop this follow and followback button in together in a p tag from the backend, so if the user clicks
    follow, the backend loops or whatever the action to the app.jsx element and it reflects in the component. */
    /* find a way to loop these 2 as p elements in the div from app.jsx, just like you did with hexacolor and numgenerator*/
    follow: `${objects.userName2} followed you`,
    followBtn: `${objects.followBtn}`,
    post: `${objects.userName1} made a new post`
  }

  const homePageElements = {
    greeting: `Hi ${objects.user}`,
    appName: 'SocialConnect',
    userName: `${objects.userName1}`,
    /* if any then display and if they tag, display taggedd user*/
    postText: 'Yesterday I created this artwork to express my gratitude towards the amazing people on this platform.',
    commentCount: `20 comments`,
    likeCount: `You and 300 others`,
    optionsIcon: '...', /* added for ui */
  }

    return (
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<p>Page Not Found (Error 404!)</p>} />
        {/* <HomePage
          homePageElements={homePageElements}
        />
        <LandingPage
        />
        <Notifications 
          notificationsElements={notificationsElements}
        />
        <Settings /> */}
      </Routes>
    )
}

export default App
