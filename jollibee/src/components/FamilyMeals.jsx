import React from "react";

const FamilyMeals = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 min-w-[250px] bg-white shadow-lg hidden lg:block">
        <SidebarMenu />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 md:p-10">
        <p className="text-center font-bold text-3xl md:text-4xl mb-10">
          New Products
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-yellow-600 rounded-xl shadow-lg p-5 text-center relative hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain mx-auto"
              />

              {/* Item Details */}
              <div className="mt-4">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>

              {/* Order Now Button */}
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamilyMeals;
