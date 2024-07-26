import React from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  React.useEffect(() => {
    if (!isMobile && isSidebarOpen) {
      toggleSidebar();
    }
  }, [isMobile, isSidebarOpen, toggleSidebar]);

  return (
    <>
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-6 left-4 z-50  text-black p-2 rounded-lg"
        >
          {isSidebarOpen ? <FaBars /> : <FaBars />}
        </button>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-zinc-50 text-gray-900 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isMobile ? 'z-40' : 'z-10'}`}
      >
        {isSidebarOpen && isMobile && (
          <div className="mt-16 p-4">
            <nav>
              <ul>
                <li>
                  <a href="/create-proposal" className="block py-2 px-4 hover:text-red-600">Create Proposal</a>
                </li>
                <li>
                  <a href="/vote" className="block py-2 px-4 hover:text-red-600">Vote</a>
                </li>
                <li>
                  <a href="/history" className="block py-2 px-4 hover:text-red-600">History</a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
