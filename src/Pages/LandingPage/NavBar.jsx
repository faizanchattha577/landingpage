import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "GetApp",
    },
    {
      id: 3,
      link: "Contact",
    },
  ]
  return (
    <div className='flex justify-between w-full   items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl  font-bold text-[#00df9a]'>Med S <span className='text-blue-200 ' > Care</span></h1>
      <ul className='hidden md:flex'>
      {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Med S Care</h1>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='p-4 border-b border-gray-600'
          >
            <Link to={link} smooth duration={500} >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;