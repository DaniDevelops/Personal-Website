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
    profileLink:
      "https://www.linkedin.com/in/daniel-nwafor-64b22a247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    app: "github",
    appIcon: <FaGithub />,
    profileLink: "https://github.com/DaniDevelops",
  },
  {
    app: "whatsapp",
    appIcon: <FaWhatsapp />,
    profileLink: "https://wa.me/message/74A2N4IVCMVXF1",
  },
  {
    app: "twitter",
    appIcon: <FaXTwitter />,
    profileLink: "https://x.com/danidevelops?s=11",
  },
  {
    app: "threads",
    appIcon: <FaThreads />,
    profileLink: "https://www.threads.net/@danidev3lops",
  },
  {
    app: "facebook",
    appIcon: <FaFacebook />,
    profileLink:
      "https://www.facebook.com/profile.php?id=61560421033590&mibextid=LQQJ4d",
  },
  {
    app: "instagram",
    appIcon: <FaInstagram />,
    profileLink:
      "https://www.instagram.com/danidev3lops?igsh=c2sxMWhmdTQ5eGln&utm_source=qr",
  },
  {
    app: "telegram",
    appIcon: <FaTelegram />,
    profileLink: "https://t.me/Danidev#lops",
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
