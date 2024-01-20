import { Toaster } from "@/components/ui/toaster";
import { toast } from "@/components/ui/use-toast";

export const Home: React.FC = () => {
  return (
    <>
      <h1 className="bg-red-500">Home</h1>
      <button onClick={() => toast({ title: "Woooohoooo" })}> Notif </button>
      <Toaster />
    </>
  );
};
