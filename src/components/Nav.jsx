import { hamburger } from "../assets/icons";

import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <h1 className="font-bold text-3xl text-coral-red">TaTa SHOES</h1>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-12 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label} className="">
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray p-2  hover:border-b-2 hover:rounded-md hover:border-b-coral-red'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24 hover:text-teal-500'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
