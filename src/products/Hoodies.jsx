import ProductTemplate from "./ProductTemplate";

export default function Hoodies() {
  return (
    <ProductTemplate
      title="Custom Hoodies"
      description="Premium custom hoodie manufacturing for clothing brands and startups."
      features={[
        "Heavyweight & lightweight fabrics",
        "Oversized and regular fits",
        "Screen printing",
        "Embroidery",
        "Private labels",
        "Custom packaging",
      ]}
    />
  );
}