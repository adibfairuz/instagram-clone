const RoundedImage = ({ src }) => {
  return (
    <div class="flex flex-col justify-center items-center cursor-pointer">
        <img class="rounded-full w-[3.25rem] h-[3.25rem] border-2 border-gray-200 shadow-sm" src={src} alt=" " />
    </div>
  )
}

export default RoundedImage