import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        Welcome to <span className="text-blue-500">ChopURL</span>!
        <br /> The ultimate tool for shortening URLs.
      </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          placeholder="Paste your long URL here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4"
        />
        <Button
          type="submit"
          className="h-full bg-blue-500 hover:bg-blue-600 text-white font-bold"
        >
          Shorten!
        </Button>
      </form>
      <div className="w-full my-11 md:px-11 text-center text-lg text-gray-300">
        <p>
          At <span className="text-blue-500 font-bold">ChopURL</span>, we make
          your long, complex URLs short and memorable. Experience the easiest
          way to manage, share, and track your links, all in one place.
        </p>
      </div>
      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How does the ChopURL URL shortener work?
          </AccordionTrigger>
          <AccordionContent>
            When you paste a long URL, ChopURL creates a unique short link.
            This link redirects users to the original long URL seamlessly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I need an account to use ChopURL?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Signing up allows you to track analytics, customize links,
            and manage all your shortened URLs effectively.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What analytics are available for my shortened URLs?
          </AccordionTrigger>
          <AccordionContent>
            You can track total clicks, the location of visitors,
            and device types (mobile/desktop) for all your links.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;
