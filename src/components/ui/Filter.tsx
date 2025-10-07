import { usePokemonContext } from "../../context/PokemonContext";
import Badge from "./Badge";

const Filter = () => {
    const { types, typesLoading, typesError } = usePokemonContext();

    const handleClick = () => {
        console.log("holi")
    }

    return (
        <div className="">
            {typesLoading ?
                (<p className="text-xs w-full text-center">Loading types...</p>
                ) : typesError ? (
                    (<p className="text-sm w-full text-center">Error loading types: {typesError}</p>)
                ) : (
                    types.map(type => (
                        <Badge key={type} type={type} onClick={handleClick} />
                    ))
                )
            }
        </div>

    )
};

export default Filter;