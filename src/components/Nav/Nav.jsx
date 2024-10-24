import PropTypes from "prop-types";
const Nav = ({ carts }) => {

      return (
            <nav className=" container mx-auto">
                  <div className="navbar ">
                        <div className="flex-1">
                              <a className=" font-bold cursor-pointer text-2xl text-white">Big Cart</a>
                        </div>
                        <div className="flex-none">
                              <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                          <div className="indicator text-white">
                                                <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      className="h-6 w-6"
                                                      fill="none"
                                                      viewBox="0 0 24 24"
                                                      stroke="currentColor">
                                                      <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <span className="badge badge-sm indicator-item">{carts.length}</span>
                                          </div>
                                    </div>

                              </div>
                              <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                          <div className="w-10 rounded-full">
                                                <img className="border-white border-2"
                                                      alt="Tailwind CSS Navbar component"
                                                      src="https://yt3.googleusercontent.com/jxi6GJOLSWz1oaHTBFYWYhT8FD5pwMqlyHvm2TWIGJOR7qgDK5p0luuCzDJKTz3vpDzyvlW2=s900-c-k-c0x00ffffff-no-rj" />
                                          </div>
                                    </div>
                                    <ul
                                          tabIndex={0}
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                          <li>
                                                <a className="justify-between">
                                                      Profile
                                                      <span className="badge">New</span>
                                                </a>
                                          </li>
                                          <li><a>Settings</a></li>
                                          <li><a>Logout</a></li>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </nav>
      );
};
Nav.propTypes = {
      carts: PropTypes.array.isRequired
}
export default Nav;