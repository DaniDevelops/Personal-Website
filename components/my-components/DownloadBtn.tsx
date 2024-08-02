"use client";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
const downloadUrl = `${process.env.NEXT_PUBLIC_SITE_URL!}/Resume.pdf`;
export default function DownloadBtn() {
  const downloadFile = () => {
    const fileName = downloadUrl.split("/").pop();
    if (fileName === undefined) return;
    const aTag = document.createElement("a");
    aTag.href = downloadUrl;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <Button
      variant="outline"
      size="lg"
      className="uppercase flex items-center gap-2"
      onClick={downloadFile}
    >
      <span>Download CV</span>
      <Download />
    </Button>
  );
}
