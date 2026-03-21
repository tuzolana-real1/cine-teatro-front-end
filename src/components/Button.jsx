function Button ({valor}) {
    return (
        <button
          type="submit"
          className="w-[95%] p-2.5 mt-2 mb-6 rounded-lg border-none bg-red-600 text-white text-base hover:bg-gradient-to-r hover:from-red-600 hover:to-yellow-400 cursor-pointer"
        >
          {valor}
        </button>
    )
}

export default Button