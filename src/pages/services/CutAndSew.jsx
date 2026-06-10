import ServiceTemplate from "./ServiceTemplate";

export default function CutAndSew() {
  return (
    <ServiceTemplate
      title="Cut & Sew Manufacturing"
      subtitle="Full garment construction from raw fabric to finished product."
      overview="We handle complete garment manufacturing based on your design and specifications."
      features={[
        "Custom pattern making",
        "Fabric cutting",
        "Stitching & assembly",
        "Bulk production",
      ]}
      process={[
        "Tech pack review",
        "Pattern creation",
        "Sample development",
        "Bulk production",
        "Quality control",
        "Shipping",
      ]}
    />
  );
}