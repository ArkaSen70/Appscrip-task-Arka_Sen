"use client";

import React, { useState, useMemo } from "react";
import ShopFilter from "@/components/Filter/ShopFilter";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function ShopContent({ initialProducts = [], initialCategories = [] }) {
  const [sortBy, setSortBy] = useState("recommended");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [openSections, setOpenSections] = useState({ categories: true });
  const [otherFilters, setOtherFilters] = useState([]);

 
  const filteredAndSortedProducts = useMemo(() => {
    let list = [...initialProducts];

   
    if (selectedCategories.length > 0) {
      list = list.filter(p => selectedCategories.includes(p.category));
    }

   
    if (sortBy === "low-high") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-low") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      list.sort((a, b) => b.id - a.id);
    }
    
    return list;
  }, [initialProducts, sortBy, selectedCategories]);

  const handleCategoryToggle = (slug) => {
    setSelectedCategories(prev => 
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const handleOtherFilterToggle = (slug) => {
    setOtherFilters(prev => 
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  };

  const toggleSection = (id) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

 
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": initialProducts.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://mettamuse.com/product/${product.id}`,
      "name": product.title,
      "image": product.thumbnail || product.image,
    })),
  };

  return (
    <section className="shop" aria-label="Shop products">
      <h1 className="sr-only">Discover Our Products</h1>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <input type="checkbox" id="filter-sidebar-toggle" className="shop_toggle shop_toggle-sidebar" defaultChecked aria-hidden="true" />
      <input 
        type="checkbox" 
        id="filter-mobile-toggle" 
        className="shop_toggle shop_toggle-mobile-filter" 
        aria-hidden="true" 
        onChange={(e) => {
          if (e.target.checked) {
            const menuToggle = document.getElementById("mobile-menu-toggle");
            if (menuToggle) menuToggle.checked = false;
          }
        }}
      />
      <input type="checkbox" id="sort-dropdown-toggle" className="shop_toggle shop_toggle-sort" aria-hidden="true" />

      <ShopFilter.Topbar 
        itemCount={filteredAndSortedProducts.length}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <div className="shop_layout">
        <ShopFilter.Sidebar 
          initialCategories={initialCategories}
          handleCategoryToggle={handleCategoryToggle}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          openSections={openSections}
          toggleSection={toggleSection}
          otherFilters={otherFilters}
          handleOtherFilterToggle={handleOtherFilterToggle}
        />

        <main className="shop_products" aria-label="Product listings">
          <ol className="shop_product-grid" role="list">
            {filteredAndSortedProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index} 
              />
            ))}
          </ol>
        </main>
      </div>
    </section>
  );
}
