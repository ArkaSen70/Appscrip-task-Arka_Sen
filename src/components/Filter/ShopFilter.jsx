"use client";

import "./ShopFilter.css";
import React, { useMemo } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Check, X } from "@/lib/icons";
import { FILTER_SECTIONS, SORT_OPTIONS } from "@/lib/constants";

const ChevronDownIcon = () => (
  <ChevronDown size={12} strokeWidth={2.5} aria-hidden="true" />
);

const ChevronUpIcon = () => (
  <ChevronUp size={12} strokeWidth={2.5} aria-hidden="true" />
);

export default function ShopFilter() {
  return null;
}

ShopFilter.Topbar = function ShopFilterTopbar({ 
  itemCount = 0,
  sortBy = "recommended",
  setSortBy,
}) {
  return (
    <div className="shop_topbar" role="toolbar" aria-label="Filter and sort controls">
        <div className="shop_topbar-left">
          <span className="shop_item-count" aria-live="polite">
            {itemCount} ITEMS
          </span>

          <label
            htmlFor="filter-sidebar-toggle"
            className="shop_filter-toggle-btn"
            role="button"
            tabIndex={0}
            aria-label="Toggle filter sidebar"
          >
            <span className="shop_filter-toggle-hide">
              <ChevronLeft size={10} strokeWidth={2.5} aria-hidden="true" />
              HIDE FILTER
            </span>
            <span className="shop_filter-toggle-show">
              <ChevronRight size={10} strokeWidth={2.5} aria-hidden="true" />
              SHOW FILTER
            </span>
          </label>

          <label
            htmlFor="filter-mobile-toggle"
            className="shop_mobile-filter-btn"
            role="button"
            tabIndex={0}
            aria-label="Open filter panel"
          >
            FILTER
          </label>
        </div>

        <span className="shop_topbar-divider" aria-hidden="true"></span>

        <div className="shop_topbar-right">
          <div className="shop_sort-wrapper">
            <label
              htmlFor="sort-dropdown-toggle"
              className="shop_sort-btn"
              role="button"
              tabIndex={0}
              aria-label={`Sort products, current: ${SORT_OPTIONS.find(o => o.value === sortBy)?.label || "Recommended"}`}
              aria-haspopup="listbox"
            >
              <span>{SORT_OPTIONS.find(o => o.value === sortBy)?.label || "RECOMMENDED"}</span>
              <ChevronDownIcon />
            </label>

            <ul className="shop_sort-dropdown" role="listbox" aria-label="Sort options">
              {SORT_OPTIONS.map((opt) => (
                <li key={opt.value} role="option" aria-selected={sortBy === opt.value} className="shop_sort-option">
                  <label className="shop_sort-option-label">
                    {sortBy === opt.value && (
                      <Check size={12} strokeWidth={2.5} aria-hidden="true" />
                    )}
                    <span>{opt.label}</span>
                    <input
                      type="radio"
                      name="sort"
                      value={opt.value}
                      checked={sortBy === opt.value}
                      onChange={() => setSortBy(opt.value)}
                      className="shop_sort-radio"
                      aria-hidden="true"
                    />
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
};

ShopFilter.Sidebar = function ShopFilterSidebar({
  initialCategories = [],
  handleCategoryToggle,
  selectedCategories = [],
  setSelectedCategories,
  openSections = {},
  toggleSection,
  otherFilters = [],
  handleOtherFilterToggle
}) {
  const dynamicSections = useMemo(() => {
    if (!initialCategories || initialCategories.length === 0) return FILTER_SECTIONS;
    return [
      {
        id: "categories",
        label: "CATEGORIES",
        defaultOpen: true,
        options: initialCategories.map(c => ({ label: c.name, slug: c.slug })),
      },
      ...FILTER_SECTIONS.filter(s => s.id !== "ideal-for")
    ];
  }, [initialCategories]);

  return (
    <>
      <aside className="shop_sidebar" aria-label="Product filters">
        <div className="shop_mobile-sidebar-header">
          <label htmlFor="filter-mobile-toggle" className="shop_mobile-sidebar-close" aria-label="Close filters">
            <X size={24} strokeWidth={1.5} />
          </label>
        </div>
        <div className="shop_filter-customizable">
          <label className="shop_checkbox-label" htmlFor="filter-customizable">
            <input
              type="checkbox"
              id="filter-customizable"
              className="shop_checkbox-input"
              aria-label="Filter by customizable products"
            />
            <span className="shop_checkbox-box" aria-hidden="true"></span>
            <span className="shop_checkbox-text">CUSTOMIZABLE</span>
          </label>
        </div>

        {dynamicSections.map((section) => {
          const isOpen = !!openSections[section.id];
          return (
            <div 
              key={section.id} 
              className={`shop_filter-section ${isOpen ? 'shop_filter-section-open' : ''}`}
            >
              <div className="shop_filter-section-header">
                <div className="shop_filter-section-title-row">
                  <h2 className="shop_filter-section-title">{section.label}</h2>
                  <button
                    type="button"
                    className="shop_filter-section-chevron"
                    onClick={() => toggleSection(section.id)}
                    aria-label={`Toggle ${section.label} filter`}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  </button>
                </div>
                <span className="shop_filter-section-summary">
                  {section.id === "categories" && selectedCategories.length > 0 
                    ? `${selectedCategories.length} selected` 
                    : section.id !== "categories" && otherFilters.filter(f => f.startsWith(`${section.id}-`)).length > 0
                      ? `${otherFilters.filter(f => f.startsWith(`${section.id}-`)).length} selected`
                      : "All"}
                </span>
              </div>

              <div className="shop_filter-section-body">
                <div className="shop_filter-section-inner">
                  {section.id === "categories" && (
                    <button 
                      type="button" 
                      className="shop_unselect-all"
                      onClick={() => setSelectedCategories([])}
                    >
                      Unselect all
                    </button>
                  )}
                  {section.options.map((opt) => {
                    const optLabel = typeof opt === "string" ? opt : opt.label;
                    const optSlugRaw = typeof opt === "string" ? opt.toLowerCase() : opt.slug;
                    const optUniqueId = `${section.id}-${optSlugRaw}`;
                    const optId = `filter-${section.id}-${optSlugRaw.replace(/\s+/g, "-")}`;
                    
                    const isChecked = section.id === "categories" 
                      ? selectedCategories.includes(optSlugRaw) 
                      : otherFilters.includes(optUniqueId);

                    return (
                      <label
                        key={optSlugRaw}
                        className="shop_checkbox-label shop_filter-option"
                        htmlFor={optId}
                      >
                        <input
                          type="checkbox"
                          id={optId}
                          className="shop_checkbox-input"
                          checked={isChecked}
                          onChange={() => {
                            if (section.id === "categories") {
                              handleCategoryToggle(optSlugRaw);
                            } else {
                              handleOtherFilterToggle(optUniqueId);
                            }
                          }}
                          aria-label={`Filter by ${optLabel}`}
                        />
                        <span className="shop_checkbox-box" aria-hidden="true"></span>
                        <span className="shop_checkbox-text">{optLabel}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </aside>
      <label htmlFor="filter-mobile-toggle" className="shop_mobile-overlay" aria-hidden="true"></label>
      <label htmlFor="sort-dropdown-toggle" className="shop_sort-overlay" aria-hidden="true"></label>
    </>
  );
};
