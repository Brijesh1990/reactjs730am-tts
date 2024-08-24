import React from "react";
const Nav = () => {
  return (
    <>
      <nav className="bg-black p-1">
        <div className="flex flex-row text-white">
          <div className="w-128">
            <h1 className="ms-14 text-xl mt-3">Flipkart Logo</h1>
          </div>
          <div className="w-full">
            <ul className="inline-flex p-3 space-x-14 text-xl">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Feedback</a>
              </li>
              <li>
                <a href="">Account</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
