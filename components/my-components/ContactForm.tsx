"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  return (
    <div className="xl:w-[54%] order-2 xl:order-none">
      <form className="flex flex-col gap-6 p-10 rounded-xl bg-#27272c">
        <h3 className="text-4xl text-accent">Let&apos;s Work Together</h3>
        <p>
          Let&apos;s bring your vision to life with precision and creativity! 🌟
        </p>
        {/* Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input type="firstname" placeholder="First Name" />
          <Input type="lastname" placeholder="Last Name" />
          <Input type="email" placeholder="Email Address" />
          <Input type="phone" placeholder="Phone Number" />
        </div>
        {/* select */}
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a Service</SelectLabel>
              <SelectItem value="est">Website Development</SelectItem>
              <SelectItem value="cst">Responsive Design Integration</SelectItem>
              <SelectItem value="mst">Performance Optimization</SelectItem>
              <SelectItem value="est">SEO Optimization</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* textarea */}
        <Textarea className="h-[200px]" placeholder="Type your message here." />
        {/* button */}
        <Button size="md" className="max-w-40">
          Send Message
        </Button>
      </form>
    </div>
  );
}
