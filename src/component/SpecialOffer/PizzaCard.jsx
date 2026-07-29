import React from 'react';
import { Plus } from 'lucide-react';

const PizzaCard = ({ pizza }) => {
    return (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition">
            <img 
                src={pizza.image} 
                alt={pizza.name} 
                className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{pizza.name}</h3>
            <button className="w-full py-2 bg-black text-white rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                <Plus size={18} />
                <span>Add to Cart</span>
            </button>
        </div>
    );
};

export default PizzaCard;
