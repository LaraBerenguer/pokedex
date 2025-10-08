import { usePokemonContext } from "../../context/PokemonContext";
import Badge from "./Badge";

const Filter = () => {
    const { types, typesLoading, typesError, selectedType, setSelectedType } = usePokemonContext();

    const handleClick = (type: string) => {
        setSelectedType(selectedType === type ? "" : type)
    };

    return (
        <div className="flex gap-1">
            {typesLoading ?
                (<p className="text-xs w-full text-center">Loading types...</p>
                ) : typesError ? (
                    (<p className="text-sm w-full text-center">Error loading types: {typesError}</p>)
                ) : (
                    types.map(type => (
                        <Badge key={type} type={type} selected={selectedType === type} onClick={() => handleClick(type)} />
                    ))
                )
            }
        </div>

    )
};

export default Filter;