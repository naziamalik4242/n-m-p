// components/WhatsAppButton.tsx
export default function WhatsAppButton() {
  const phoneNumber = "+923217690158"; // Apna number yahan likhen
  const message = "Hi Nazia, I saw your portfolio and want to discuss a project!";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-8 h-8" />
    </a>
  );
}