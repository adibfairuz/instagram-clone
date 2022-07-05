import { FontAwesomeIcon } from "../../components/FontAwesomeIcon"

const Profile = () => {
  return (
    <div class="px-6 pt-6">
        <div class="flex items-center mb-5">
            <div class="flex flex-col justify-center min-w-[175px]">
                <div class="w-20 h-20 mb-1 relative">
                    <img class="rounded-full border border-gray-300 shadow-sm" src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-cf514.appspot.com/o/user_placeholder.png?alt=media&token=170d391c-e539-4916-89fd-73d92528b173" alt="user image" />
                </div>
                <div class="text-sm font-semibold">
                    Adib Fairuz
                </div>
            </div>
            <div class="flex flex-1 justify-between items-center">
                <div class="flex flex-col items-center">
                    <div class="font-semibold text-lg">14</div>
                    <div class="font-normal text-lg">Posts</div>
                </div>
                <div class="flex flex-col items-center">
                    <div class="font-semibold text-lg">604</div>
                    <div class="font-normal text-lg">Followers</div>
                </div>
                <div class="flex flex-col items-center">
                    <div class="font-semibold text-lg">327</div>
                    <div class="font-normal text-lg">Following</div>
                </div>
            </div>
        </div>
        <div class="flex items-center">
            <div class="py-2 text-center font-semibold border border-gray-300 rounded-md flex-1 mr-2">Edit Profile</div>
            <FontAwesomeIcon class="text-black text-xl flex-" icon="fas user-plus" />
        </div>
    </div>
  )
}

export default Profile