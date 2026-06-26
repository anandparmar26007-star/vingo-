import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaPlus } from "react-icons/fa6";
import { TbReceiptDollar } from "react-icons/tb";
import ProductCard from "./Productcart";
import Footer from "./Footer";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

// 1. useNavigate की जगह सीधे Link कंपोनेंट इम्पोर्ट किया
import { Link } from "react-router-dom";

function Nav() {
  const userData = useSelector((state) => state.auth.userData);
  const [showInfo, setShowInfo] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  
  // सेफ कोडिंग: यदि userData undefined हो तो एरर न आए
  const firstLetter = userData?.fullName?.charAt(0).toUpperCase() || "U";

  return (
    <div>
      {/* HEADER BAR */}
      <div className="w-full h-20 flex items-center justify-between px-5 fixed top-0 left-0 z-50 bg-[#fff9f6] border-b border-gray-200">
        <h1 className="text-3xl font-bold text-[#ff4d2d]">Vingo</h1>

        {/* 2. MOBILE SEARCH POPUP */}
       
          <div className="absolute top-20 left-[5%] w-[90%] h-14 bg-white shadow-xl rounded-lg flex items-center gap-5 px-4 md:hidden z-50">
            <div className="flex items-center w-[30%] overflow-hidden gap-2.5 border-r-2 border-gray-300 pr-2">
              <FaLocationDot size={15} className="text-[#ff4d2d]" />
              <div className="w-auto truncate text-gray-700 capitalize text-sm">
                botad
              </div>
            </div>
            <div className="w-[70%] flex items-center gap-2.5">
              <FaSearch size={15} className="text-[#ff4d2d]" />
              <input
                type="text"
                placeholder="search delicious food ..."
                className="text-gray-700 outline-none w-full text-sm"
              />
            </div>
          </div>
    

        {/* 3. DESKTOP SEARCH BAR */}
   
          <div className="hidden md:flex md:w-[50%] lg:w-[40%] h-12 bg-white shadow-md rounded-lg items-center gap-5 px-4">
            <div className="flex items-center w-[30%] overflow-hidden gap-2.5 border-r-2 border-gray-300 pr-2">
              <FaLocationDot size={15} className="text-[#ff4d2d]" />
              <div className="w-auto truncate text-gray-700 capitalize text-sm">
                botad
              </div>
            </div>
            <div className="w-[70%] flex items-center gap-2.5">
              <FaSearch size={15} className="text-[#ff4d2d]" />
              <input
                type="text"
                placeholder="search delicious food ..."
                className="text-gray-700 outline-none w-full text-sm"
              />
            </div>
          </div>
       

        {/* 4. RIGHT ACTIONS */}
        <div className="flex items-center gap-5">
          {/* Mobile Search Icon Toggle */}
          <div className="md:hidden cursor-pointer">
            
              (showSearch ? (
                <ImCross
                  size={18}
                  className="text-[#ff4d2d]"
                  onClick={() => setShowSearch(false)}
                />
              ) : (
                <FaSearch
                  size={18}
                  className="text-[#ff4d2d]"
                  onClick={() => setShowSearch(true)}
                />
              ))
          </div>

          {userData?.role === "owner" && (
            <button className="hidden md:flex items-center gap-1 p-2 cursor-pointer rounded-full bg-[#ff4d2d]/10 text-[#ff4d2d]">
              <FaPlus size={15} />
              <span>Add food items</span>
            </button>
          )}

          {userData?.role === "owner" && (
            <button className="md:hidden flex items-center gap-1 p-2 cursor-pointer rounded-full bg-[#ff4d2d]/10 text-[#ff4d2d]">
              <FaPlus size={15} />
            </button>
          )}

          {userData?.role === "owner" && (
            <button className="hidden md:flex items-center gap-1 p-2 cursor-pointer rounded-full bg-[#ff4d2d]/10 text-[#ff4d2d]">
              <FaPlus size={15} className="text-[#ff4d2d]" />
              <span>My order</span>
            </button>
          )}

          {userData?.role === "owner" && (
            <button className="md:hidden flex items-center gap-1 p-2 cursor-pointer rounded-full bg-[#ff4d2d]/10 text-[#ff4d2d]">
              <TbReceiptDollar size={15} className="text-[#ff4d2d]" />
            </button>
          )}

       
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <div className="relative cursor-pointer">
                  <LiaShoppingCartSolid size={24} className="text-[#ff4d2d]" />
                  <span className="absolute -top-2 -right-2 bg-[#ff4d2d] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    0
                  </span>
                </div>
                <button className="px-4 py-1.5 rounded-lg bg-[#ff4d2d]/10 text-[#ff4d2d] text-sm font-medium hover:bg-[#ff4d2d]/20 transition-all">
                  My Order
                </button>
              </div>

              <div className="block md:hidden relative cursor-pointer">
                <LiaShoppingCartSolid size={25} className="text-[#ff4d2d]" />
                <span className="absolute -top-2 -right-2 bg-[#ff4d2d] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
          

          {/* User Profile Avatar */}
          <div className="relative group cursor-pointer">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#ff4d2d] text-white text-lg shadow-md font-semibold"
              onClick={() => setShowInfo((prev) => !prev)}
            >
              {firstLetter}
            </div>

            {/* User Dropdown Profile Menu */}
            {showInfo && (
              <div className="absolute top-12 right-0 w-max shadow-xl rounded-xl p-4 bg-white flex flex-col gap-2 z-50 border border-gray-100">
                <div className="text-sm font-semibold text-gray-800 border-b pb-2">
                  {userData?.fullName || "User Name"}
                </div>

                <div className="text-[#ff4d2d] text-sm font-semibold hover:underline pt-1 cursor-pointer">
                  Log Out
                </div>

                {/* फिक्स: SignIn के लिए Link टैग का उपयोग */}
                <Link
                  to="/SignIn"
                  className="text-[#ff4d2d] text-sm font-semibold hover:underline pt-1 block cursor-pointer"
                  onClick={() => setShowInfo(false)}
                >
                  SignIn
                </Link>

                {/* फिक्स: SignUp के लिए Link टैग का उपयोग */}
                <Link
                  to="/SignUp"
                  className="text-[#ff4d2d] text-sm font-semibold hover:underline pt-1 block cursor-pointer"
                  onClick={() => setShowInfo(false)}
                >
                  SignUp
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {/* mt-24 किया क्योंकि हेडर fixed है, ताकि प्रोडक्ट कार्ड्स नीचे न छुपें */}
      <div className="mt-24">
   
          <div>
            <ProductCard />
          </div>
      
      </div>

      <div>
      
          <div>
            <Footer />
          </div>
        
      </div>
    </div>
  );
}

export default Nav;