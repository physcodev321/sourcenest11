import ProductTemplate from "./ProductTemplate";

export default function Activewear() {
  return (
    <ProductTemplate
      title="Custom Activewear"
      description="Full activewear manufacturing for modern fitness brands."
      features={[
        "Moisture-Wicking Fabrics",
        "Compression Wear",
        "Gym Apparel",
        "Custom Logos",
        "Private Labels",
        "Bulk Production",
      ]}
    />
  );
}