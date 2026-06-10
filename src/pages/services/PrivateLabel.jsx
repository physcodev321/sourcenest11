import ServiceTemplate from "./ServiceTemplate";


export default function PrivateLabel() {
  return (
    <ServiceTemplate
      title="Private Label Manufacturing"
      subtitle="Build your own clothing brand with full end-to-end production."
      overview="We help you create your clothing brand from scratch including design, sampling, manufacturing, branding, and packaging."
      features={[
        "Custom branding & labels",
        "Fabric sourcing",
        "Complete garment production",
        "Packaging & fulfillment",
      ]}
      process={[
        "Idea discussion",
        "Design & tech pack",
        "Sampling",
        "Production",
        "Quality check",
        "Delivery",
      ]}
    />
  );
}