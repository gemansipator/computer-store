import { ProductCard } from './ProductCard'; // Убедитесь, что этот файл существует
import products from '@/data/products.json';

export function ProductGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}