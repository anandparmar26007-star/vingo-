import React, { useState } from 'react';
import { Heart, ShoppingCart, Star, Plus, Minus } from 'lucide-react';

// ==========================================
// 1. डायनामिक फ़ूड डेटा जनरेटर (Generates 100 Unique Food Items)
// ==========================================
const foodCategories = ["Burgers", "Pizza", "Biryani", "Desserts", "Beverages", "Chinese"];

const foodImages = {
  Burgers: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
  Pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60",
  Biryani: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=60",
  Desserts: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&auto=format&fit=crop&q=60",
  Beverages: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=60",
  Chinese: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60"
};

const foodNames = {
  Burgers: ["Crispy Veg Burger", "Cheese Blast Whopper", "Spicy Chicken Zinger", "BBQ Bacon Smash", "Classic Aloo Tikki", "Double Decker Cheese"],
  Pizza: ["Margherita Classic", "Farmhouse Loaded", "Fiery Jalapeno & Corn", "Chicken Tikka Supreme", "Pepperoni Paradise", "Paneer Do Pyaza Pizza"],
  Biryani: ["Hyderabadi Veg Biryani", "Lucknowi Chicken Biryani", "Special Mutton Dum Biryani", "Egg Spice Biryani", "Kolkata Paneer Biryani"],
  Desserts: ["Chocolate Lava Cake", "Red Velvet Pastry", "Gulab Jamun with Ice Cream", "Waffles with Nutella", "Sizzling Brownie"],
  Beverages: ["Cold Coffee Cream", "Mint Mojito Fizz", "Mango Smoothie Mango", "Strawberry Milkshake", "Iced Peach Tea"],
  Chinese: ["Schezwan Veg Noodles", "Chilli Paneer Dry", "Manchurian Gravy Meal", "Veg Fried Rice Spice", "Spring Rolls Pack"]
};

const badges = ["10% OFF", "BOGO", "Trending", "Chef Special", "Best Seller", null];

// 100 आइटम्स का एरे तैयार करना
const productsData = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  // कैटेगरी चुनना
  const category = foodCategories[index % foodCategories.length];
  // नाम की लिस्ट में से नाम चुनना
  const namePool = foodNames[category];
  const baseName = namePool[index % namePool.length];
  const title = `${baseName} (Batch-${Math.ceil(id / namePool.length)})`;
  
  // रैंडम प्राइजिंग और रेटिंग्स
  const price = parseFloat((8.99 + (index * 0.75) % 25).toFixed(2));
  const originalPrice = parseFloat((price + 4.00).toFixed(2));
  const rating = parseFloat((4.0 + (index * 0.13) % 1.0).toFixed(1));
  const badge = badges[index % badges.length];
  const image = foodImages[category];

  return { id, title, category, price, originalPrice, rating, image, badge };
});

// ==========================================
// 2. सिंगल प्रोडक्ट कार्ड कंपोनेंट (Inner Component)
// ==========================================
const SingleCard = ({ product, onAddToCart }) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleQuantityChange = (type) => {
    if (type === 'increment') setQuantity(prev => prev + 1);
    if (type === 'decrement' && quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleCartClick = () => {
    setIsAdded(true);
    if (onAddToCart) {
      onAddToCart(product, quantity);
    }
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group relative flex flex-col justify-between">
      
      {/* Image & Badge Section */}
      <div className="relative overflow-hidden bg-gray-50 aspect-square">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-[#ff4d2d] text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
            {product.badge}
          </span>
        )}

        <button 
          onClick={() => setIsWishlist(!isWishlist)}
          className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
        >
          <Heart className={`w-4 h-4 ${isWishlist ? 'fill-[#ff4d2d] stroke-[#ff4d2d]' : 'text-gray-600'}`} />
        </button>

        <img 
          src={product.image} 
          alt={product.title}
          loading="lazy" /* 100 आइटम्स के लिए परफॉर्मेंस बेहतर रखेगा */
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Details Section */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="mt-0.5 text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-[#ff4d2d] transition-colors h-10">
            {product.title}
          </h3>

          <div className="flex items-center mt-1 space-x-1">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'}`} />
              ))}
            </div>
            <span className="text-xs font-bold text-gray-700">{product.rating}</span>
          </div>
        </div>

        {/* Pricing & Controls */}
        <div className="mt-4">
          <div className="flex items-baseline space-x-1.5">
            <span className="text-lg font-black text-[#ff4d2d]">${product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
            )}
          </div>

          <div className="flex items-center justify-between gap-2 mt-3">
            {/* Quantity Controller */}
            <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 p-0.5">
              <button onClick={() => handleQuantityChange('decrement')} className="p-1 text-gray-500" disabled={quantity <= 1}>
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-5 text-center font-bold text-gray-800 text-xs">{quantity}</span>
              <button onClick={() => handleQuantityChange('increment')} className="p-1 text-gray-500">
                <Plus className="w-3 h-3" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleCartClick}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg font-bold text-xs text-white transition-all ${
                isAdded ? 'bg-emerald-500' : 'bg-[#ff4d2d] hover:bg-[#e03d1e]'
              }`}
            >
              <ShoppingCart className="w-3 h-3" />
              {isAdded ? 'Added!' : 'Add'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

// ==========================================
// 3. मुख्य प्रोडक्ट ग्रिड कंपोनेंट (Main Export)
// ==========================================
const Product = ({ onAddToCartAction }) => {
  
  const handleCartTrigger = (product, quantity) => {
    if (onAddToCartAction) {
      onAddToCartAction(product, quantity);
    } else {
      console.log("Food Cart Added:", product.title, "Qty:", quantity);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      {/* हेडर टाइटल्स */}
      <div className="max-w-7xl mx-auto mb-8 text-center sm:text-left">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Delicious Food Items ({productsData.length})
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Fresh and hot dishes delivered instantly right to your doorstep.
        </p>
      </div>

      {/* 4 कॉलम रेस्पॉन्सिव ग्रिड लेआउट */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((item) => (
          <SingleCard 
            key={item.id} 
            product={item} 
            onAddToCart={handleCartTrigger} 
          />
        ))}
      </div>
    </div>
  );
};

export default Product;