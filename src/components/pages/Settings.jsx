import Footer from './Footer'
import SettingsOption from "../ui/SettingsOption"
import PagesHeader from "../ui/pagesHeader"
import SignOutBtn from "../ui/SignOutBtn"
import EditProfile from "../ui/EditProfile"
import { useNavigate } from "react-router-dom" // Importing the useNavigate hook for navigation

/*
 * The Settings component represents a settings page UI.
 * It allows users to manage their profile information, language preferences,
 * notification settings, account settings, help and support, and sign out.
 */

const Settings = () => {
  const navigateTo = useNavigate(); // Hook for navigation

  return (
    <div>
      <PagesHeader pagename="Settings" />

      {/* Profile Information. to include full name, username, location, bio, personal link, birthday,add picture */}
      <div>
        <EditProfile onClick={() => navigateTo("/")} />
      </div>

      {/* Settings Sections */}
      <div className="shadow-md rounded-[21px] m-[10px] pt-[2px] ">
        {/* Account settings. this includes account info like number, email, password, deactivate account, country*/}
        <SettingsOption title="Account Settings" onClick={() => navigateTo("/")} />

        {/* Privacy and safety. this includes who can see your post, manage content you see
        who can message, block and mute, who can tag you, account verification, */}
        <SettingsOption title="Privacy and Safety" onClick={() => navigateTo("/")} />

        {/* Display and Acessibility. includes themes, sound, etc options while using screen reader */}
        <SettingsOption title="Display and Accessibility" onClick={() => navigateTo("/")} />

        {/* Notification Settings */}
        <SettingsOption title="Notification Settings" onClick={() => navigateTo("/")} />
       
        {/* Help and Support */}
        <SettingsOption title="Help and Support" 
        className="border-none "onClick={() => navigateTo("/")} />

        {/* <p className="py-[20px] pl-[21px] cursor-pointer "
          onClick={() => navigateTo("/")}>
            <b>Help and support</b>
        </p> */}
      </div>

      {/* Sign Out */}
        <SignOutBtn onClick={() => navigateTo("/Login")} />

      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export default Settings // Exporting the Settings component
