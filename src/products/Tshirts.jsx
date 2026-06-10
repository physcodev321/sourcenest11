import ProductTemplate from "./ProductTemplate";

export default function Tshirts() {
  return (
    <ProductTemplate
      title="Custom T-Shirts"
      description="High-quality custom t-shirt manufacturing with complete branding solutions."
      features={[
        "100% Cotton",
        "Oversized Fits",
        "DTG Printing",
        "Screen Printing",
        "Private Labels",
        "Custom Neck Tags",
      ]}
    />
  );
}