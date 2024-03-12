import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'
import { ShareIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon } from '@heroicons/react/24/outline'

const PostIcons = ({ homePageElements }) => {
  const {
        commentCount,
        likeCount,
      } = homePageElements   

  return (
    <div>
        {/* Post actions */}
        <div className="flex flex-row justify-between mt-[15px] mx-[40px]">
            {/* Comment icon and count */}
            <div className="flex gap-x-0.5">
              <ChatBubbleOvalLeftIcon className="h-5 w-5 cursor-pointer" />
              <p>{commentCount}</p>
            </div>
            {/* Like icon and count */}
            <div className="flex gap-x-0.5">
              <HeartIcon 
               className="h-5 w-6 cursor-pointer text-purple-700 fill-current" />
              <p>{likeCount}</p>{/* use state to change icon when clicked? */}
            </div>
            {/* Share icon */}
            <ShareIcon className="h-5 w-6 cursor-pointer" />
            {/* Bookmark icon */}
            <BookmarkIcon className="h-5 w-6 cursor-pointer" />
          </div>
    </div>
  )
}

export default PostIcons