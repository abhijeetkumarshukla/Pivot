import PokemonCard from "@/components/PokemonCard";
import {data} from "@/utils/data"
export default function Home() {
  return (
    <div className="m-auto w-max" >
      
     <div className="   grid grid-cols-4 gap-20  flex-wrap  ">
      {data.map((ele)=>(
         
         <PokemonCard name={ele.name} id={ele.id} image={ele.image}
           key={ele.id} type={ele.type} />
      ))}
      
     </div>
       
    </div>
  );
}
