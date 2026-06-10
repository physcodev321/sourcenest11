import ProductTemplate from "./ProductTemplate";

export default function Sportswear() {
  return (
    <ProductTemplate
      title="Custom Sportswear"
      description="Sportswear production for teams, clubs, and brands."
      features={[
        "Team Uniforms",
        "Performance Fabrics",
        "Sublimation Printing",
        "Custom Logos",
        "Private Label",
        "Worldwide Shipping",
      ]}
    />
  );
}