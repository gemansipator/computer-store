"use client";

export function ProductCard({ product }: { product: any }) {
    return (
        <div className="border p-4 rounded-lg">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
            />
            <h3 className="font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-700">{product.price} ₽</p>
        </div>
    );
}