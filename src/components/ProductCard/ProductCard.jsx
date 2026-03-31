"use client";

import React from "react";
import { Heart } from "@/lib/icons";

const HeartIcon = ({ filled = false }) => (
  <Heart
    size={16}
    fill={filled ? "#e05" : "none"}
    stroke={filled ? "#e05" : "#999"}
    strokeWidth={1.8}
    aria-hidden="true"
  />
);

export default function ProductCard({ product, index }) {
  return (
    <li className="shop_product-card" role="listitem">
      <article aria-label={product.title}>
        <a href={`/product/${product.id}`} className="shop_product-img-link" aria-label={`View ${product.title}`} tabIndex={0}>
          <div className="shop_product-img-container">
            {index === 0 && (
              <span className="shop_product-badge">NEW PRODUCT</span>
            )}
            <img
              className="shop_product-img"
              src={product.thumbnail || product.image}
              alt={product.title}
              loading="lazy"
            />
            {index === 1 && (
              <div className="shop_product-overlay">
                <span>OUT OF STOCK</span>
              </div>
            )}
          </div>
        </a>

        <div className="shop_product-info">
          <div className="shop_product-meta-row">
            <div className="shop_product-text">
              <h2 className="shop_product-name">
                <a href={`/product/${product.id}`} className="shop_product-name-link">
                  {product.title}
                </a>
              </h2>
              <div className="shop_product-pricing-cta">
                <a href="/login" className="shop_signin-link">Sign in</a>
                {" or "}
                <a href="/register" className="shop_signin-link">Create an account</a>
                {" to see pricing"}
              </div>
            </div>
            <button
              type="button"
              className="shop_wishlist-btn"
              aria-label={`Add ${product.title} to wishlist`}
              aria-pressed={false}
            >
              <HeartIcon filled={false} />
            </button>
          </div>
        </div>
      </article>
    </li>
  );
}
