import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    app: "linkedIn",
    appIcon: <FaLinkedin />,
    profileLink: "",
  },
  {
    app: "github",
    appIcon: <FaGithub />,
    profileLink: "",
  },
  {
    app: "whatsapp",
    appIcon: <FaWhatsapp />,
    profileLink: "",
  },
  {
    app: "twitter",
    appIcon: <FaXTwitter />,
    profileLink: "",
  },
  {
    app: "threads",
    appIcon: <FaThreads />,
    profileLink: "",
  },
  {
    app: "facebook",
    appIcon: <FaFacebook />,
    profileLink: "",
  },
  {
    app: "instagram",
    appIcon: <FaInstagram />,
    profileLink: "",
  },
  {
    app: "telegram",
    appIcon: <FaTelegram />,
    profileLink: "",
  },
];

export default function Socials({
  containerStyles,
  iconStyles,
}: {
  containerStyles: string;
  iconStyles: string;
}) {
  return (
    <div className={containerStyles}>
      {socials.map((social) => (
        <Link href={social.profileLink} key={social.app} className={iconStyles}>
          {social.appIcon}
        </Link>
      ))}
    </div>
  );
}
