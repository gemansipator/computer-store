import { ProductGrid } from '@/components/product/ProductGrid';

export default function Home() {
    return (
        <main className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Computer Store</h1>
            <ProductGrid />
        </main>
    );
}