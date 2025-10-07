import { typeColors } from "../../utils/typeColors";

interface TypeButtonProps {
    onClick?: () => void;
    type: string;
}

const TypeButton = ({ onClick, type }: TypeButtonProps) => {
    const color = typeColors[type.toLowerCase()] || "#A8A77A";
    return <span className="text-sm px-2 py-0.5 rounded-full" style={{ backgroundColor: color }} onClick={onClick}>{type}</span>
};

export default TypeButton;