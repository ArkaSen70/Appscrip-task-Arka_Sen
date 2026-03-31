import ShopContent from "@/components/ShopContent/ShopContent";
import { getProducts } from "@/lib/api";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const { products, categories } = await getProducts();
  return <ShopContent initialProducts={products} initialCategories={categories} />;
}
