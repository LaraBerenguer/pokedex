import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router';
import PokemonCard from '../PokemonCard';
import "@testing-library/jest-dom";

jest.mock('react-router', () => ({
    useNavigate: jest.fn(),
}));

const mockPokemon = {
    id: 1,
    name: 'bulbasaur',
    image: 'test.png',
    types: [{ name: 'grass' }],
    height: 7,
    weight: 69,
    stats: []
};

describe('PokemonCard Component', () => {
    const mockNavigate = jest.fn();
    const mockToggleFavorite = jest.fn();

    beforeEach(() => {
        (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    });

    test('renders pokemon information correctly', () => {
        render(<PokemonCard pkm={mockPokemon} />);
        expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
        expect(screen.getByText('grass')).toBeInTheDocument();
    });

    test('navigates to details when View Details is clicked', () => {
        render(<PokemonCard pkm={mockPokemon} />);
        fireEvent.click(screen.getByText('View Details'));
        expect(mockNavigate).toHaveBeenCalledWith('pokemon/1');
    });

    test('toggles favorite when favorite icon is clicked', () => {
        render(<PokemonCard pkm={mockPokemon} onToggleFavorite={mockToggleFavorite} />);
        const favButton = screen.getByTestId('fav');
        fireEvent.click(favButton);
        expect(mockToggleFavorite).toHaveBeenCalledWith(1);
    });
});