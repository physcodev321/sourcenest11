import ProductTemplate from "./ProductTemplate";

export default function Sweatshirts() {
  return (
    <ProductTemplate
      title="Custom Sweatshirts"
      description="Premium sweatshirt production with full customization."
      features={[
        "French Terry",
        "Fleece Options",
        "Embroidery",
        "Screen Printing",
        "Custom Branding",
        "Bulk Production",
      ]}
    />
  );
}