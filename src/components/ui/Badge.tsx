import { typeColors } from "../../utils/typeColors";

interface TypeButtonProps {
    onClick?: () => void;
    type: string;
}

const TypeButton = ({ onClick, type }: TypeButtonProps) => {
    const color = typeColors[type.toLowerCase()] || "#A8A77A";
    return <span className="text-sm text-white px-2 py-1 m-1 items-center rounded-lg hover:shadow-sm" style={{ backgroundColor: color, display: "inline-block", verticalAlign: "middle" }} onClick={onClick}>{type}</span>
};

export default TypeButton;