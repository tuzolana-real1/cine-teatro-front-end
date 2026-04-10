function Section({ titulo, children }) {
  return (
    <section className="bg-[#171717] rounded-lg my-5 p-4 text-white">

      <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-red-600 to-yellow-400 bg-clip-text text-transparent">
        {titulo}
      </h1>

      <div className="flex flex-wrap gap-6">
        {children}
      </div>

    </section>
  )
}

export default Section