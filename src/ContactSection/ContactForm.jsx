// import Button from "@/Components/LinkButton";
import { Button } from "@/Components/ui/button";
import { icons, Titles } from "@/Constants";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().min(10).max(20),
  title: z.string().min(2).max(4),
  company: z.string().min(5).max(10),
  message: z.string().min(10).max(20),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      title: "",
      company: "",
      message: "",
    },
  });
  function onSubmit(e) {
    e.preventDefault();
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(e);
  }
  return (
    <section className="w-full bg-primary-midnight-green max-sm:pb-[50rem] py-[2.5rem]">
      <div className="container grid grid-cols-2 justify-between items-center gap-10 !mt-[4.5rem] max-sm:grid-cols-1 max-sm:text-center max-sm:px-10 max-sm:h-[600px] max-md:grid-cols-1 max-md:pb-50 max-md:text-center max-md:px-20">
        <div className="flex flex-col gap-10 max-md:items-center">
          <h3 className="font-bold text-primary-white text-[4.5rem] leading-[2.2rem]">
            Contact
          </h3>
          <p className="text-primary-light-coral text-[3.5rem] font-semibold">
            Ask About us
          </p>
          <div>
            <div className="flex items-center gap-5 ">
              <div>
                {icons.map((icon) => (
                  <img
                    key={icon.id}
                    src={icon.imgPath}
                    alt={icon.alt}
                    className=" mb-5 w-10 h-auto max-sm:w-[100%] max-sm:h-[100%]  max-sm:mb-10"
                  />
                ))}
              </div>
              <div className="ml-0">
                {Titles.map((item) => (
                  <p
                    key={item.id}
                    className="text-primary-white font-[300] text-[1.8rem] mb-5 max-sm:font-[100%] max-sm:mb-5"
                  >
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="ml-10 max-sm:">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Name"
                        {...field}
                        className="placeholder:text-secondary-rapture-blue border border-secondary-rapture-blue  text-md font-[300] focus:border-none focus:outline-none"
                      />
                    </FormControl>

                    <div className="text-primary-light-coral text-sm">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="placeholder:text-secondary-rapture-blue border border-secondary-rapture-blue  text-md font-[300] focus:border-none focus:outline-none"
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                      />
                    </FormControl>
                    <div className="text-primary-light-coral text-sm">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {/* Company Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="placeholder:text-secondary-rapture-blue border border-secondary-rapture-blue  text-md font-[300] focus:border-none focus:outline-none"
                        type="email"
                        placeholder=" Company"
                        {...field}
                      />
                    </FormControl>
                    <div className="text-primary-light-coral text-sm">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              {/* Title Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="placeholder:text-secondary-rapture-blue border border-secondary-rapture-blue text-md font-[300] focus:border-none focus:outline-none"
                        type="email"
                        placeholder="Title"
                        {...field}
                      />
                    </FormControl>
                    <div className="text-primary-light-coral text-sm">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {/* Message field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    {/* No <FormLabel> here */}
                    <FormControl>
                      <textarea
                        className="w-full h-full p-2 border placeholder:text-secondary-rapture-blue font-[300] border-secondary-rapture-blue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your message..."
                        {...field}
                      />
                    </FormControl>
                    <div className="text-primary-light-coral text-sm">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="text-primary-midnight-green rounded-full bg-primary-white py-2 px-4"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
