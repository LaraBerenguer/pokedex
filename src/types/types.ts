export type Pokemon = {
    id: number;
    name: string;
    image: string
    types: Type[];
    weight: number;
    height: number;
    stats: Stats[];
};

export type Stats = {
    name: string;
    base: number;
};

export type Type = {
    name: string;
};

export type ColoredType = {
    type: string;
    color: string;
}