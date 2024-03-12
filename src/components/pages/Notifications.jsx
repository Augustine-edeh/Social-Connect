import Footer from '../ui/Footer'
import NotifUI from '../ui/NotifUI'
import PagesHeader from "../ui/pagesHeader"

const Notifications = ({ notificationsElements }) => {
  const {
    like,
    comment, 
    share, 
    follow, 
    post, 
  } = notificationsElements;

  return (
    <div>
      <div /* id="NotificationsDiv" */>
          <PagesHeader pagename="Notifications" />

          <h4 className="mt-[25px] mb-[8px]">Recent Activity</h4>
          <NotifUI actiondone={like} useraction="View Likes"/>
          <NotifUI actiondone={follow} useraction="Follow Back"/>
          <NotifUI actiondone={like} useraction="View Likes"/>
          <NotifUI actiondone={share} useraction="View Post"/>

          <h4 className="mt-[25px] mb-[8px]">Earlier</h4>
          <NotifUI actiondone={post} useraction="View Post"/>
          <NotifUI actiondone={like} useraction="View Likes"/>
          <NotifUI actiondone={comment} useraction="View Comments"/>
          <NotifUI actiondone={post} useraction="View Post"/>
          <NotifUI actiondone={comment} useraction="View Comment"/>
          
          <h4 className="mt-[25px] mb-[8px]">Older</h4>
          <NotifUI actiondone={follow} useraction="Follow Back "/>
          <NotifUI actiondone={comment} useraction="View Comment"/>
          <NotifUI actiondone={post} useraction="View Post"/>
          <NotifUI actiondone={like} useraction="View Likes"/>
          <NotifUI actiondone={share} useraction="View Post"/>
          <NotifUI actiondone={comment} useraction="View Comment"/>
          <NotifUI actiondone={post} useraction="View Post"/>
          <NotifUI actiondone={follow} useraction="Follow Back "/>
          <NotifUI actiondone={comment} useraction="ViewComment "/>
          <NotifUI actiondone={like} useraction="View Likes"/>
          <NotifUI actiondone={share} useraction="View Post"/> 
      </div>
      <Footer />
    </div>  
  )
}
  
export default Notifications
