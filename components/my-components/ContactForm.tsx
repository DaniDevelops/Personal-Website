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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { toast } from "../ui/use-toast";
import { customerData } from "@/lib/utils";
import { sendMessage } from "@/lib/actions";

export default function ContactForm() {
  const form = useForm<z.infer<typeof customerData>>({
    resolver: zodResolver(customerData),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      description: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(data: z.infer<typeof customerData>) {
    const response = await sendMessage(data);
    if (!response)
      return toast({
        variant: "destructive",
        description: "Uh oh! Something went wrong.",
      });

    toast({ description: response.message });
    form.reset();
  }

  return (
    <div className="xl:w-[54%] order-2 xl:order-none">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 p-10 rounded-xl bg-#27272c"
        >
          <h3 className="text-4xl text-accent">Let&apos;s Work Together</h3>
          <p>
            Let&apos;s bring your vision to life with precision and creativity!
            🌟
          </p>
          {/* Input fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your Email Address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Your Phone Number"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* select field */}
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value="website">
                        Website Development
                      </SelectItem>
                      <SelectItem value="responsive">
                        Responsive Design Integration
                      </SelectItem>
                      <SelectItem value="performance">
                        Performance Optimization
                      </SelectItem>
                      <SelectItem value="seo">SEO Optimization</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* textarea */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="h-[200px]"
                    placeholder="Type your message here."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="md" className="max-w-40">
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
}
