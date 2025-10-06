export type Pokemon = {
    id: number;
    name: string;
    image: string
    type: string[];
    weight: number;
    height: number;
    stats: Stats[];
};

export type Stats = {
    name: string;
    base: number;
};