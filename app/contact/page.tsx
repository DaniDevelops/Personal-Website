import ContactForm from "@/components/my-components/ContactForm";
import Motion from "@/components/my-components/Motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    title: "Phone",
    icon: <FaPhoneAlt />,
    description: "+2348103892567",
  },

  {
    title: "Email",
    icon: <FaEnvelope />,
    description: "danidev3lops@outlook.com",
  },

  {
    title: "Address",
    icon: <FaMapMarkerAlt />,
    description: "Warri, Delta State",
  },
];
export default function Contact() {
  return (
    <Motion className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <ContactForm />
          {/* Info */}
          <div className="flex-1 flex items-center mb-8 xl:justify-end order-1 xl:order-none xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item) => (
                <li className="flex items-center gap-6" key={item.title}>
                  <div className="text-accent rounded-md flex items-center justify-center bg-[#27272c] w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Motion>
  );
}
