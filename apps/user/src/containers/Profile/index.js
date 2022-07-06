import { FontAwesomeIcon } from "../../components/FontAwesomeIcon"

const Profile = () => {
  return (
    <div class="px-6 pt-6">
        <div class="flex items-center mb-5">
            <div class="flex flex-col justify-center mr-8">
                <div class="w-20 h-20 mb-1 relative">
                    <img class="rounded-full border border-gray-300 shadow-sm" src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-f0931.appspot.com/o/user_placeholder.png?alt=media" alt="user image" />
                </div>
                <div class="text-sm font-semibold">
                    Adib Fairuz
                </div>
            </div>
            <div class="flex flex-1 justify-around items-center">
                <div class="flex flex-col items-center mr-1">
                    <div class="font-semibold text-lg">14</div>
                    <div class="font-normal text-base">Posts</div>
                </div>
                <div class="flex flex-col items-center mr-1">
                    <div class="font-semibold text-lg">604</div>
                    <div class="font-normal text-base">Followers</div>
                </div>
                <div class="flex flex-col items-center mr-1">
                    <div class="font-semibold text-lg">327</div>
                    <div class="font-normal text-base">Following</div>
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