import Link from "next/link";
import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="navbar container mx-auto">

        {/* START */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>

            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li><Navlink href="/">Home</Navlink></li>
              <li><Navlink href="/books">Books</Navlink></li>
              <li><Navlink href="/profile">Profile</Navlink></li>
            </ul>
          </div>

          {/* Logo */}
          <Link href="/">
            <p className="font-extrabold text-xl bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              
              Book Lover
            </p>
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Navlink href="/">Home</Navlink></li>
            <li><Navlink href="/books">Books</Navlink></li>
            <li><Navlink href="/profile">Profile</Navlink></li>
          </ul>
        </div>

        {/* END */}
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>

      </div>
    </div>
  );
};

export default Navbar;