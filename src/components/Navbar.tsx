"use client";

import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search, Bell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Subjects', 
      href: '#',
      subItems: [
        { name: 'Mathematics', href: '/subjects/mathematics' },
        { name: 'English', href: '/subjects/english' },
        { name: 'Science', href: '/subjects/science' },
        { name: 'Social Studies', href: '/subjects/social-studies' },
      ]
    },
    { name: 'Study Materials', href: '/study-materials' },
    { name: 'Mock Tests', href: '/mock-tests' },
    { name: 'Community', href: '/community' },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <span className="text-white text-2xl font-bold tracking-tight">SSC Study Hub</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="text-white hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out flex items-center"
                  >
                    {item.name}
                    {item.subItems && <ChevronDown className="ml-1 h-4 w-4" />}
                  </a>
                  {item.subItems && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-150 ease-in-out">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900"
                            role="menuitem"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <button className="text-white hover:bg-white hover:text-blue-600 p-1 rounded-full transition duration-150 ease-in-out mr-2">
              <Search className="h-6 w-6" />
            </button>
            <button className="text-white hover:bg-white hover:text-blue-600 p-1 rounded-full transition duration-150 ease-in-out">
              <Bell className="h-6 w-6" />
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                <a
                  href={item.href}
                  className="text-white hover:bg-white hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </a>
                {item.subItems && (
                  <div className="pl-4">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="text-gray-300 hover:bg-white hover:text-blue-600 block px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className="flex items-center justify-start px-3 py-2">
              <button className="text-white hover:bg-white hover:text-blue-600 p-1 rounded-full transition duration-150 ease-in-out mr-2">
                <Search className="h-6 w-6" />
              </button>
              <button className="text-white hover:bg-white hover:text-blue-600 p-1 rounded-full transition duration-150 ease-in-out">
                <Bell className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;