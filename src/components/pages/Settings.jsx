import Footer from './Footer.jsx'
import ImgHolder from "../../assets/images/ImgHolder.png";
import { /* Link, */ useNavigate } from "react-router-dom"

const Settings = () => {
     const navigateTo = useNavigate();
 
      return (
        <div>
            <h1 className="pl-[10px]" /* settingsHeader */>Settings</h1>
            <div className="shadow-md rounded-[21px] m-[10px] pl-[15px] py-[13px] " /* id="set1" */>
              <img className="h-[50px] w-[50px] mr-[15px] rounded-full float-left"
              src={ImgHolder} 
              alt='Profile Picture' /* id="profilePic" */
              <p onClick={() => navigateTo("/profile")}
                 className="m-0 cursor-pointer">Edit Profile Information</p>
              {/* <a href="#"
                  onClick={}> arrow
                  </a>
               */}
            </div>

            <div className="shadow-md rounded-[21px] m-[10px] pt-[5px]"/* id="set2"*/>
              <p className="py-[20px] pl-[21px] border-b-2 "/* id="set2P1" */>
                <a href="#"
                  /* onClick={} */>
                  <b>Language preferences</b>
                </a></p>
              <p className="py-[20px] pl-[21px] border-b-2 ">
                <a href="#" /* onClick={} */>
                  <b>Notification Settings {/* arrow */}</b>
                </a>
              </p>
              <p className="py-[20px] pl-[21px] border-b-2 ">
                <a href="#" /* onClick={} */>
                  <b>Account Settings {/* arrow */}</b>
                </a>
              </p>
              <p className="py-[20px] pl-[21px] "/* id="set2P2" */>
                <a href="#" /* onClick={} */>
                  <b>Help and support {/* arrow */}</b>
                </a>
              </p>
            </div>

            <div>
              <p className="shadow-md m-[10px] py-[15px] mb-[43px] rounded-[21px] cursor-pointer text-center " /* id="set3" */>
                <a href="#" /* onClick={} */>
                  <b>Sign Out</b>
                </a>
              </p>
            </div>
            <Footer />
        </div>
      )
    }
  
export default Settings
