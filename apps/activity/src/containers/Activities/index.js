import Activity from "../../components/Activity"
import { getRandomNumber } from 'lib/utils'

const Activities = ({type, data = []}) => {
    const getType = () => {
        if (type === 1) {
            return 'Today'
        } else if(type === 2){
            return 'This Month'
        } else if(type === 3){
            return 'Earlier'
        } else {
            return type
        }
    }
    return (
        <div className="border-t border-t-gray-300">
            <div className="mx-4 py-3">
                <h3 className="text-base font-semibold">{getType()}</h3>
                {
                    data.map(item => (
                        <Activity 
                            className="mt-3" 
                            type={getRandomNumber(0, 1) ? 'like' : 'follow'} 
                            time={item.time}
                            postImage={item.image}
                            profileImage={item.owner.picture}
                            username={item.owner.firstName}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Activities