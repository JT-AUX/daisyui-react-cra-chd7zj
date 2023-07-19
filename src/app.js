import React from 'react';

const App = (props) => {
  return (
    <>
      <div className="drawer  h-screen">
        {/* Toggle */}
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        {/* Drawer content */}
        <div className="drawer-content">
          {/* Navbar here */}
          <div className="navbar bg-base-300 fixed top-0 ">
            <div className="navbar-start">
              <label
                htmlFor="my-drawer"
                className="btn btn-ghost btn-square  hover:bg-secondary hover:bg-opacity-50 drawer-button"
              >
                <i class="fa-solid fa-bars"></i>
              </label>

              <p className="mx-2">Savvy</p>
            </div>

            <div className="navbar-center">
              <div className="dropdown  dropdown-bottom">
                <label
                  tabIndex={0}
                  className="btn btn-ghost hover:bg-secondary  hover:bg-opacity-50 swap"
                >
                  <input type="checkbox" />
                  Site / settings
                  <i class="fa-solid fa-chevron-up swap-on mx-2"></i>
                  <i class="fa-solid fa-chevron-down swap-off mx-2"></i>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-52"
                >
                  <li>
                    <a className="hover:bg-secondary hover:bg-opacity-30 text-white">
                      Homepage
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-secondary hover:bg-opacity-30 text-white">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-secondary hover:bg-opacity-30 text-white">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="navbar-end gap-3">
              <button className="btn  btn-sm md:btn-md  btn-secondary">
                Preview
              </button>
              <button className="btn  btn-sm md:btn-md  btn-primary">
                Publish
              </button>
            </div>
          </div>

          {/* vertical menu */}
          <div className="w-fit drop-shadow-xl  fixed top-[30vh] left-10">
            <ul className="flex menu  border border-white rounded-box ">
              <li className="flex-none   ">
                <a
                  className="btn border-none h-fit bg-base-300  tooltip tooltip-neutral tooltip-right   text-white py-4"
                  data-tip="Style"
                >
                  <div className="flex flex-col">
                    <i class="fa-solid fa-font  text-lg"></i>
                    <p className="text-sm normal-case">Style</p>
                  </div>
                </a>
              </li>
              <li className="flex-none  bg-[#000]  ">
                <a
                  className="btn border-none h-fit bg-base-300   tooltip tooltip-neutral  tooltip-right   text-white py-4"
                  data-tip="Color"
                >
                  <div className="flex flex-col">
                    <i class="fa-solid fa-droplet  text-lg"></i>
                    <p className="text-sm normal-case">Color</p>
                  </div>
                </a>
              </li>
              <li className="flex-none  bg-[#000] ">
                <a
                  className="btn border-none h-fit bg-base-300  tooltip tooltip-neutral  tooltip-right   text-white py-4"
                  data-tip="Content"
                >
                  <div className="flex flex-col">
                    <i class="fa-solid fa-shapes  text-lg"></i>
                    <p className="text-sm normal-case">Content</p>
                  </div>
                </a>
              </li>
              <li className="flex-none  bg-[#000]  ">
                <a
                  className="btn border-none h-fit bg-base-300   tooltip tooltip-neutral  tooltip-right   text-white py-4"
                  data-tip="Settings"
                >
                  <div className="flex flex-col">
                    <i class="fa-solid fa-gear  text-lg"></i>
                    <p className="text-sm normal-case">Settings</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* horizontal menu */}
          <div className="w-fit drop-shadow-xl  fixed bottom-10 mx-auto left-0 right-0">
            <ul className="flex menu menu-horizontal  border border-white rounded-box px-3 bg-base-300 ">
              <li className="flex-none   ">
                <a
                  className="btn border-none h-fit bg-base-300  tooltip tooltip-neutral tooltip-top   text-white py-4"
                  data-tip="Style"
                >
                  <div className="flex flex-col">
                    <i class="fa-solid fa-font  text-lg"></i>
                    <p className="text-sm normal-case">Style</p>
                  </div>
                </a>
              </li>
              <li className="flex-none  bg-[#000]  ">
                <a
                  className="btn border-none h-fit bg-base-300   tooltip tooltip-neutral  tooltip-top   text-white py-4"
                  data-tip="Color"
                >
                  <div className="flex flex-col">
                    <i class="fa-solid fa-droplet  text-lg"></i>
                    <p className="text-sm normal-case">Color</p>
                  </div>
                </a>
              </li>
              <li className="flex-none  bg-[#000] ">
                <a
                  className="btn border-none h-fit bg-base-300  tooltip tooltip-neutral  tooltip-top   text-white py-4"
                  data-tip="Content"
                >
                  <div className="flex flex-col">
                    <i class="fa-solid fa-shapes  text-lg"></i>
                    <p className="text-sm normal-case">Content</p>
                  </div>
                </a>
              </li>
              <li className="flex-none  bg-[#000]  ">
                <a
                  className="btn border-none h-fit bg-base-300   tooltip tooltip-neutral  tooltip-top   text-white py-4"
                  data-tip="Settings"
                >
                  <div className="flex flex-col">
                    <i class="fa-solid fa-gear  text-lg"></i>
                    <p className="text-sm normal-case">Settings</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* site */}
          <div className="container container-sm mx-auto max-w-[890px] mt-28 bg-primary prose">
            <h1>Howsit</h1>
            <h1>Howsit</h1>
            <h1>Howsit</h1>
          </div>
        </div>

        {/* Drawer side*/}
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-300 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a className="  hover:bg-secondary hover:bg-opacity-50">
                Sidebar Item 1
              </a>
            </li>
            <li>
              <a className="  hover:bg-secondary hover:bg-opacity-50">
                Sidebar Item 2
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default App;
