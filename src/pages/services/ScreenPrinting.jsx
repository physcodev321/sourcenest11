import ServiceTemplate from "./ServiceTemplate";

export default function ScreenPrinting() {
  return (
    <ServiceTemplate
      title="Screen Printing Services"
      subtitle="High-quality printing for streetwear and bulk apparel."
      overview="We provide durable and premium screen printing for all types of garments."
      features={[
        "Multi-color printing",
        "Bulk order capability",
        "High durability inks",
        "Custom artwork printing",
      ]}
      process={[
        "Design approval",
        "Screen setup",
        "Sample print",
        "Production",
        "Quality control",
        "Delivery",
      ]}
    />
  );
}