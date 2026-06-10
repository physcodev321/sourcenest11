import ServiceTemplate from "./ServiceTemplate";

export default function Embroidery() {
  return (
    <ServiceTemplate
      title="Embroidery Services"
      subtitle="Premium embroidery for logos and branded apparel."
      overview="We offer high-quality embroidery services for logos, branding, and fashion garments."
      features={[
        "Logo embroidery",
        "3D puff embroidery",
        "Custom thread colors",
        "High precision machines",
      ]}
      process={[
        "Design digitizing",
        "Sample creation",
        "Approval",
        "Production",
        "Quality control",
        "Packaging",
      ]}
    />
  );
}