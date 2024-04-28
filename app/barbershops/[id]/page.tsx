import Image from "next/image";
import { db } from "../../_lib/prisma"
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import BarbershopInfo from "./_components/barbersehop-info";
import ServiceItem from "./_components/service-item";

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
    include: {
      services: true,
    }
  });
  
  
  if(!barbershop) {
    // TODO: Redirecionar para home page
    return null
  }

  return <div>
    <BarbershopInfo barbershop={barbershop} />

  <div className="px-5 flex flex-col gap-4 py-6">
  
  {barbershop.services.map((service) => (
      <ServiceItem key={service.id} service={service} />
    ))}

  </div>
  </div>
}
 
export default BarbershopDetailsPage;