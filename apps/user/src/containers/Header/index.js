import { FontAwesomeIcon } from "../../components/FontAwesomeIcon"

const Header = () => {
  return (
    <div class="fixed top-0 left-0 w-full z-10">
        <div class="max-w-[500px] mx-auto bg-white flex justify-between items-center border-b border-b-gray-300 px-4 py-2">
            <div class="flex items-center">
                <FontAwesomeIcon class="text-black text-base mr-2" icon="fas lock" />
                <div class="font-semibold text-lg mr-2">adbfz</div>
                <FontAwesomeIcon class="text-black text-base" icon="fas chevron-down" />
            </div>
            <div class="flex items-center">
                <FontAwesomeIcon class="text-black text-2xl mr-4" icon="far square-plus" />
                <FontAwesomeIcon class="text-black text-2xl" icon="fas bars" />
            </div>
        </div>
    </div>
  )
}

export default Header