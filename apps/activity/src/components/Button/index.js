const Button = ( { children } ) => {
  return (
    <button className="bg-blue-500 px-4 py-[0.3rem] rounded-md text-white font-semibold text-sm">
        {children}
    </button>
  )
}

export default Button