function FullNavbar() {
  return (
    <nav className="flex px-8 py-5 justify-between border-b-2 border-gray-800 shadow-lg fixed top-0 w-full">
      <a className="text-3xl" href="#">
        Logo
      </a>
      <div className="flex gap-6">
        <a className="hover:text-sky-400" href="#">
          Home
        </a>
        <a className="hover:text-sky-400" href="#">
          About
        </a>
        <a className="hover:text-sky-400" href="#">
          Gallery
        </a>
        <a className="hover:text-sky-400" href="#">
          Contact
        </a>
      </div>
    </nav>
  )
}

export default FullNavbar
