import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FiSquare, FiCircle } from 'react-icons/fi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useWindowSize } from '@/utils/screen';

interface SidebarProps {
  menus?: {
    name: string;
    href: string;
    icon: React.ComponentType<{ size: string }>;
  }[];
  display?: boolean;
  isEvent?: boolean;
  setisEvent?: () => void;
}

export function Sidebar({ menus, display, isEvent=false, setisEvent }: SidebarProps) {
  const { width } = useWindowSize();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    width > 768 ? setOpen(true) : setOpen(false);
  }, [width]);
  

  if (!display) return null;
  

  return (
    <div className={`relative z-10 bg-green-900 min-h-screen ${open ? 'w-52' : 'w-16'} duration-500 text-gray-100 px-4  shadow-2xl overflow-y-auto`} >
      <div className='py-3 flex justify-end'>
        <HiMenuAlt3
          className='cursor-pointer text-white text-2xl'
          onClick={() => setOpen(!open)}
        />
      </div>

      <div
        title="Saty"
        className={`w-full group flex items-center text-sm gap-3 font-medium p-1 rounded-md transition duration-200 hover:bg-gray-700 cursor-pointer ${isEvent ? 'text-red-500' : 'text-green-500'}`}
        onClick={setisEvent}
      >
        <div>
          { isEvent ? <FiSquare size='20' /> : <FiCircle size='20' /> }
        </div>
        <h5
          style={{ transitionDelay: `100ms` }}
          className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
        >
          {isEvent ? 'Parar Saty' : 'Saty'}
        </h5>
      </div>

      <div className='mt-4 flex flex-col gap-4 relative'>
        {
          menus?.map((menu, index) => (
            <Link
              href={menu?.href}
              key={index}
              title={!open ? menu?.name : undefined}
              className={`text-white group flex items-center text-sm gap-3 font-medium p-1 transition duration-200 hover:bg-gray-700 rounded-md ${router.pathname === menu?.href && 'bg-gray-900'}`}
            >
              <div>
                {React.createElement(menu?.icon, { size: '20' })}
              </div>
              <h5
                style={{ transitionDelay: `${index + 3}00ms` }}
                className={`font-normal whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}
              >
                {menu?.name}
              </h5>
            </Link>
          ))
        }
      </div>
      <div
        title="Deslogar"
        className={`absolute bottom-4 w-5/6 group flex items-center text-sm gap-3 font-medium p-1 rounded-md transition duration-200 hover:bg-gray-700 cursor-pointer`}
    
      >
      </div>
    </div>
  )
}
