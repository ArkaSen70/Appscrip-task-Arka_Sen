export const FILTER_SECTIONS = [
  {
    id: "ideal-for",
    label: "IDEAL FOR",
    defaultOpen: true,
    options: ["Men", "Women", "Baby & Kids"],
  },
  { id: "occasion",      label: "OCCASION",      defaultOpen: false, options: ["Casual", "Formal", "Festive"] },
  { id: "work",          label: "WORK",          defaultOpen: false, options: ["Handwoven", "Embroidered", "Block Print"] },
  { id: "fabric",        label: "FABRIC",        defaultOpen: false, options: ["Cotton", "Silk", "Linen", "Wool"] },
  { id: "segment",       label: "SEGMENT",       defaultOpen: false, options: ["Luxury", "Premium", "Mid-range"] },
  { id: "suitable-for",  label: "SUITABLE FOR",  defaultOpen: false, options: ["Summer", "Winter", "All Season"] },
  { id: "raw-materials", label: "RAW MATERIALS", defaultOpen: false, options: ["Natural Dye", "Organic", "Recycled"] },
  { id: "pattern",       label: "PATTERN",       defaultOpen: false, options: ["Solid", "Stripes", "Floral", "Abstract"] },
];

export const SORT_OPTIONS = [
  { value: "recommended", label: "RECOMMENDED" },
  { value: "newest",      label: "NEWEST FIRST" },
  { value: "popular",     label: "POPULAR" },
  { value: "high-low",    label: "PRICE : HIGH TO LOW" },
  { value: "low-high",    label: "PRICE : LOW TO HIGH" },
];
