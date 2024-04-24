import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

const Header  = () => {
  return ( 

    <Card>
      <CardContent className="p-5 py-8 justify-between flex flex-row items-center">
      <Image src="/logo.png" alt="logo" height={18} width={120}/>
      <Button variant="outline" size="icon" className="h-8 w-8">
        <MenuIcon size={18}/>
      </Button>
      </CardContent>
    </Card>
   );
}
 
export default Header ;