interface BadgeProps {
    type: string;
}

const Badge = ({ type }: BadgeProps) => {
    return <span className="bg-gray-100 text-sm px-2 py-0.5 rounded-full">{type}</span>
};

export default Badge;