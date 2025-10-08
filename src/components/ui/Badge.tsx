import { typeColors } from "../../utils/typeColors";

interface TypeButtonProps {
    onClick?: () => void;
    selected?: boolean;
    type: string;
}

const TypeButton = ({ onClick, selected = false, type }: TypeButtonProps) => {
    const color = typeColors[type.toLowerCase()] || "#A8A77A";
    const borderStyle = selected ? "3px solid #f472b6" : "3px solid transparent";
    return <span className="text-sm text-white px-2 py-1 m-1 items-center rounded-lg hover:shadow-sm" style={{ backgroundColor: color, border: borderStyle, display: "inline-block", verticalAlign: "middle" }} onClick={onClick}>{type}</span>
};

export default TypeButton;