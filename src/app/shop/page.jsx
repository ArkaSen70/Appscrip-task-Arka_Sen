import ShopContent from "@/components/ShopContent/ShopContent";
import { getProducts } from "@/lib/api";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "Shop All Products | mettā muse",
  description: "Browse our curated collection of premium fashion — men's shirts, women's dresses, and tops from the finest artisans. Filter by category, sort by price, and discover your style.",
};

export default async function Shop() {
  const { products, categories } = await getProducts();
  return <ShopContent initialProducts={products} initialCategories={categories} />;
}
