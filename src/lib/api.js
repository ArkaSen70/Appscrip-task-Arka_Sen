const FALLBACK_PRODUCTS = [
  {
    id: 1,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice.",
    category: "mens-shirts",
    thumbnail: "https://cdn.dummyjson.com/products/images/mens-shirts/Mens%20Casual%20Slim%20Fit/thumbnail.jpg",
    rating: 3.82
  },
  {
    id: 2,
    title: "Womens Dress",
    price: 25.99,
    description: "Elegant and comfortable dress for any occasion.",
    category: "womens-dresses",
    thumbnail: "https://cdn.dummyjson.com/products/images/womens-dresses/Womens%20Dress/thumbnail.jpg",
    rating: 4.5
  }
];

const FASHION_SLUGS = [
  "mens-shirts","womens-dresses", "sunglasses"
];


export async function getProducts() {
  let products = [];
  let categories = [];

  try {
    const [shirtRes, dressRes, topRes, catRes] = await Promise.all([
      fetch("https://dummyjson.com/products/category/mens-shirts", { cache: "no-store" }),
      fetch("https://dummyjson.com/products/category/womens-dresses", { cache: "no-store" }),
      fetch("https://dummyjson.com/products/category/tops", { cache: "no-store" }),
      fetch("https://dummyjson.com/products/categories", { cache: "no-store" }),
    ]);

    let combined = [];
    if (shirtRes.ok) combined = [...combined, ...(await shirtRes.json()).products];
    if (dressRes.ok) combined = [...combined, ...(await dressRes.json()).products];
    if (topRes.ok) combined = [...combined, ...(await topRes.json()).products];

    if (combined.length > 0) products = combined;
    if (catRes.ok) {
      const allCats = await catRes.json();
      categories = allCats.filter(c => FASHION_SLUGS.includes(c.slug));
    }

    return { products, categories };
  } catch (error) {
    console.error("SSR Fetch Error:", error);
    return { products: FALLBACK_PRODUCTS, categories: [] };
  }
}
