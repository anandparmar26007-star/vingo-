import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-50 text-gray-900 pt-16 pb-8 border-t-4 border-[#ff4d2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* मुख्य ग्रिड (Main Content Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* 1. ब्रांड नाम और परिचय */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black text-[#ff4d2d] tracking-tight">
                Vingo<span className="text-[#ff4d2d]">.</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              स्वाद और स्पीड का असली संगम। Vingo आपके शहर के बेस्ट रेस्टोरेंट्स का ज़ायका सीधे आपके घर तक पहुंचाता है।
            </p>
          </div>

          {/* 2. क्विक लिंक्स */}
          <div>
            <h4 className="text-[#ff4d2d] font-bold text-sm tracking-wider uppercase mb-6 relative">
              Quick Links
              <span className="w-8 h-0.5 bg-[#ff4d2d] mt-1 block"></span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-[#ff4d2d] transition-colors block">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff4d2d] transition-colors block">Browse Menu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff4d2d] transition-colors block">Special Offers</a></li>
            </ul>
          </div>

          {/* 3. कॉन्टैक्ट डिटेल्स */}
          <div>
            <h4 className="text-[#ff4d2d] font-bold text-sm tracking-wider uppercase mb-6 relative">
              Contact Us
              <span className="w-8 h-0.5 bg-[#ff4d2d] mt-1 block"></span>
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>📞 +91 98765 43210</li>
              <li>✉️ orders@vingo.com</li>
              <li>📍 123 Food Street, Tech Park, Ahmedabad</li>
            </ul>
          </div>

          {/* 4. न्यूज़लेटर / ऑफर्स */}
          <div>
            <h4 className="text-[#ff4d2d]ont-bold text-sm tracking-wider uppercase mb-6 relative">
              Get Hot Offers
              <span className="w-8 h-0.5 bg-[#ff4d2d] mt-1 block"></span>
            </h4>
            <p className="text-xs text-gray-600 mb-4 leading-relaxed">
              वीकेंड स्पेशल डिस्काउंट कूपन और फ्री डिलीवरी ऑफर्स सीधे पाने के लिए सब्सक्राइब करें।
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-900 text-[#ff4d2d] text-xs pl-4 py-3 rounded-xl border border-gray-800 focus:outline-none focus:border-[#ff4d2d] w-full"
              />
              <button className="bg-[#ff4d2d] hover:bg-[#e03d1e] text-white px-4 py-2 rounded-xl text-xs font-bold transition-transform whitespace-nowrap">
                Join
              </button>
            </form>
          </div>

        </div>

        {/* बॉटम बार */}
        <div className="border-t border-gray-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Vingo Delivery. Crafted with ❤️ for Foodies.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#ff4d2d] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#ff4d2d] transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;