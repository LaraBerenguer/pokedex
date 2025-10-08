interface RawTypes {
  name: string;
  url: string;
}

interface TypeListResponse {
  results: RawTypes[];
}

export const typeService = {
  async fetchTypes(): Promise<string[]> {
    const response = await fetch("https://pokeapi.co/api/v2/type/");
    if (!response.ok) throw new Error(`Error fetching pokémon types! Try again`);
    
    const data: TypeListResponse = await response.json();
    return data.results.map((type) => type.name);
  }
};