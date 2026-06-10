import ProductTemplate from "./ProductTemplate";

export default function Jackets() {
  return (
    <ProductTemplate
      title="Custom Jackets"
      description="Manufacturing premium jackets for fashion and outdoor brands."
      features={[
        "Bomber Jackets",
        "Varsity Jackets",
        "Windbreakers",
        "Embroidery",
        "Custom Branding",
        "Private Label",
      ]}
    />
  );
}