import Image from "next/image";
import { db } from "../../_lib/prisma"
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import BarbershopInfo from "./_components/barbersehop-info";

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  }
}

const BarbershopDetailsPage = async ({params}: BarbershopDetailsPageProps) => {
  if(!params.id) {
    // TODO: Redirecionar para home page
    return null
  }


  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });
  
  
  if(!barbershop) {
    // TODO: Redirecionar para home page
    return null
  }

  return ( 

    <BarbershopInfo barbershop={barbershop} />
   );
}
 
export default BarbershopDetailsPage;