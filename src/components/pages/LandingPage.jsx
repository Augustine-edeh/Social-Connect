import ImgHolder from "../../assets/images/ImgHolder.png";
import Footer from './Footer.jsx'

const LandingPage = () => {
    return (
      <div className="bg-gray-100 ">
        <h3 className="shadow-md p-[20px] mb-[30px] bg-purple-600 text-white " >Welcome to SocialConnect</h3> {/* home icon */}
        <div className="mx-[20px] " >
          <h1 className="mb-[30px] ">Discover and Share</h1>
          <p className="mb-[20px] ">Explore posts from users around the world</p>
          <img className="w-[250px] mb-[30px] "
            src={ImgHolder} 
            alt='Profile Picture'/>
          <p className="text-center mb-[10px] ">Connect with friends and family</p>
          <p className="shadow-md mb-[10px] py-[5px] rounded-[35px] cursor-pointer text-center bg-purple-700 text-white">
            <a href="#"
            /* onClick={} */>
              Sign Up</a>
          </p>
          <p className="shadow-md mb-[10px] py-[5px] rounded-[35px] cursor-pointer text-center ">
          <a href="#"
            /* onClick={} */>
              Log In</a>
          </p>    

          <div>
              <p className="my-[20px] ">Find new content and engage with others</p>
              <img className="w-[250px] my-[20px] "
                src={ImgHolder} 
                alt='Profile Picture'/>
                {/* move to app */}
              <p>Keep up to date with trends, Build meaningful connections and engage with a vibrant community.</p>
              <p>Share your thoughts, photos, videos with friends and followers</p>
              <p>Stay connected to your friends, family, acquaintances through private messaging.</p>
              <p className="mb-[20px] ">Share personal updates, photos and videos in a secure environment.</p>
          </div>

          <div className="bg-gray-400 shadow-inner rounded-[30px] mb-[60px] px-[30px] py-[8px] ">
            <img className="w-[200px] my-[20px] "
                src={ImgHolder} 
                alt='Profile Picture'/>
            <h1>Customize your experience</h1>
            <p>Personalize your SocialConnect</p>
            <h3 className="mt-[20px] ">Step 1</h3>
            <p className="mb-[20px] pb-[32px] border-b-2 ">Create your unique profile and customize your settings</p>
            <h3 className="my-[4px] ">Step 2</h3>
            <p className="mb-[20px] pb-[32px] border-b-2 ">Explore different themes and layout options</p>
            <h3 className="my-[4px] ">Step 3</h3>
            <p className="mb-[20px] pb-[32px] ">Set up notifications and privacy preferences</p>
            <p className="shadow-md mb-[20px] py-[5px] rounded-[35px] cursor-pointer text-center bg-purple-700 text-white">
            <a href="#"
              /* onClick={} */>
              Get Started</a>
            </p>
          </div>

          <h1 className="mt-[20px] text-center ">What People Say</h1>
          <p className="mb-[20px] text-center ">Hear from some of our amazing users</p>
          <div className="bg-gray-400 shadow-inner rounded-[15px] mx-[30px] mb-[60px] px-[10px] py-[24px] text-center ">
            <p className="mb-[30px] "><b>SocialSphere has transformed how I connect with others</b></p>
            <p><b>*****</b></p>
            <p><b>Shade Fenty</b></p>
            <p>Social Media Enthusiast</p> 
            {/* a slider */}
          </div>

          <div className="bg-gray-400 shadow-inner rounded-[20px] mb-[60px] px-[30px] py-[8px] ">
            <img className="w-[250px] my-[20px] "
              src={ImgHolder} 
              alt='Profile Picture'/>
            <h1>Join SocialConnect Today</h1>
            <p>Start connecting and sharing</p>
            <p className="shadow-inner my-[20px] py-[5px] text-white rounded-[35px] cursor-pointer text-center bg-purple-700 ">
              <a href="#"
                /* onClick={} */>
                Sign Up</a>
            </p>
          </div>

        </div>
        <Footer />
      </div>
    )
  }

export default LandingPage