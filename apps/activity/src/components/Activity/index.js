import Button from "../Button"
import RoundedImage from "../RoundedImage"

const Activity = ({className, type, time, postImage, profileImage, username}) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
        <div className="flex items-center text-sm">
            <RoundedImage src={profileImage} />
            <div className="ml-3 mr-2"><span className="font-semibold lowercase">{username}</span> {type === 'like' ? 'liked your post.' : 'started following you.'}<span className="ml-1 text-gray-400">{time}</span></div>
        </div>
        <div>
            {
                type === 'like'
                ?
                <img className="w-11 h-11" src={postImage} />
                :
                <Button>Follow</Button>
            }
        </div>
    </div>
  )
}

export default Activity