import Footer from './Footer.jsx'
import ImgHolder from "../../assets/images//ImgHolder.png";

const Notifications = ({ notificationsElements }) => {
  const {
    like,
    comment, 
    share, 
    follow, 
    post, 
    followBtn,
  } = notificationsElements;

  return (
    <div>
      <div className="mx-[8px] "/* id="NotificationsDiv" */>
          <h1>Notifications</h1>{/* header tags not working? */}

          <h4 className="mt-[25px] mb-[8px]">Recent Activity</h4>
          <div className="flex items-center justify-between rounded-[20px] p-[6px] pl-[10px] shadow-md mb-2">
            <img className="h-9 w-9 rounded-full order-last"
            src={ImgHolder} 
            alt='Profile Picture' /* id="notifPic" *//>
            <p className="flex-1"/* id="np1" */>{like}</p>
          </div>
          <div className="flex items-center justify-between rounded-[20px] p-[6px] pl-[10px] shadow-md mb-2">
            <img className="h-[35px] w-[38px] rounded-full"
            src={ImgHolder} 
            alt='Profile Picture'/>
            <div className="flex flex-row">
              {/* find a way to loop these elements in the div from app.jsx, 
              just like you did with hexacolor and numgenerator*/}
              <p className="flex-1 mr-[10px] ">{follow}</p>
              <p className="bg-purple-700 text-white px-[10px] py-[1px] cursor-pointer rounded-[20px]">
                {followBtn}</p>
            </div>
          </div> 

          <h4 className="mt-[25px] mb-[8px]">Earlier</h4>
          <div className="flex items-center justify-between rounded-[20px] p-[6px] pl-[20px] shadow-md mb-2">
            <img className="h-9 w-9 rounded-full order-last"
            src={ImgHolder} 
            alt='Profile Picture'/>
            <p className="flex-1 mr-2">{comment}</p>
          </div>            
          <div className="flex items-center justify-between rounded-[20px] p-[6px] pl-[20px] shadow-md mb-2">
            <img className="h-9 w-9 rounded-full order-last"
            src={ImgHolder} 
            alt='Profile Picture'/>          
            <p className="flex-1 mr-2">{post}</p>
          </div>            
          <div className="flex items-center justify-between rounded-[20px] p-[6px] pl-[20px] shadow-md mb-2">
            <img className="h-9 w-9 rounded-full order-last"
            src={ImgHolder} 
            alt='Profile Picture'/>
            <p className="flex-1 mr-2">{like}</p>
          </div>    

          <h4 className="mt-[25px] mb-[8px]">Older</h4>
          <div className="flex items-center justify-between rounded-[20px] p-[6px] pl-[10px] shadow-md mb-2">
            <img className="h-[35px] w-[38px] rounded-full"
            src={ImgHolder} 
            alt='Profile Picture'/>
            <div className="flex flex-row">
              {/* find a way to loop these elements in the div from app.jsx, 
              just like you did with hexacolor and numgenerator*/}
              <p className="flex-1 mr-[10px] ">{follow}</p>
              <p className="bg-purple-700 text-white px-[10px] py-[1px] cursor-pointer rounded-[20px]">
                {followBtn}</p>
            </div>
          </div>          
          <div className="flex items-center justify-between rounded-[20px] p-[6px] pl-[20px] shadow-md mb-2">
          <img className="h-9 w-9 rounded-full order-last"
            src={ImgHolder} 
            alt='Profile Picture'/>
            <p className="flex-1 mr-2">{comment}</p>
          </div>            
          <div className="flex items-center justify-between rounded-[20px] p-[6px] pl-[20px] shadow-md mb-2">
          <img className="h-9 w-9 rounded-full order-last"
            src={ImgHolder} 
            alt='Profile Picture'/>
            <p className="flex-1 mr-2">{post}</p>
          </div>            
          <div className="flex items-center justify-between rounded-[20px] p-[6px] pl-[10px] shadow-md mb-2">
            <img className="h-[35px] w-[38px] rounded-full"
            src={ImgHolder} 
            alt='Profile Picture'/>
            <div className="flex flex-row">
              {/* find a way to loop these elements in the div from app.jsx, 
              just like you did with hexacolor and numgenerator*/}
              <p className="flex-1 mr-[10px] ">{follow}</p>
              <p className="bg-purple-700 text-white px-[10px] py-[1px] cursor-pointer rounded-[20px]">
                {followBtn}</p>
            </div>
          </div>    
          <div className="flex items-center justify-between rounded-[20px] p-[6px] pl-[20px] shadow-md mb-2">
          <img className="h-9 w-9 rounded-full order-last"
            src={ImgHolder} 
            alt='Profile Picture'/>
            <p className="flex-1 mr-2">{share}</p>
          </div>    
      </div>
      <Footer />
    </div>  
  )
}
  
export default Notifications