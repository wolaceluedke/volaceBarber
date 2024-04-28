import Image from "next/image";
import { db } from "../../_lib/prisma"
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";

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
    <div>
    <div className="h-[250px] w-full relative">

      <Button size="icon" variant="outline" className="z-50 top-4 left-4 absolute">
        <ChevronLeftIcon />
      </Button>

      <Button size="icon" variant="outline" className="z-50 top-4 right-4 absolute">
        <MenuIcon />
      </Button>


      <Image 
      src={barbershop.imageUrl} 
      alt={barbershop.name} 
      fill 
      style={{
        objectFit: "cover"
      }} 
      className="opacity-75"
      />
    </div>

    <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
      <h1 className="text-xl font-bold">{barbershop.name}</h1>
      <div className="flex items-center gap-1 mt-2">
        <MapPinIcon className="text-primary" size={18}/>
      <h1 className="text-sm">{barbershop.address}</h1>
      </div>

      <div className="flex items-center gap-1 mt-2">
        <StarIcon className="text-primary" size={18}/>
      <h1 className="text-sm">5,0 (899 Avaliações)</h1>
      </div>
    </div>
    </div>



   );
}
 
export default BarbershopDetailsPage;