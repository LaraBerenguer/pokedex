import { render, screen, fireEvent } from '@testing-library/react';
import FavoriteFilter from '../FavoriteFilter';
import { usePokemonContext } from '../../context/PokemonContext';
import "@testing-library/jest-dom";

jest.mock('../../context/PokemonContext');

describe('FavoriteFilter Component', () => {
  const mockSetSelectedFilter = jest.fn();

  beforeEach(() => {
    (usePokemonContext as jest.Mock).mockReturnValue({
      setSelectedFilter: mockSetSelectedFilter,
    });
  });

  test('renders filter buttons', () => {
    render(<FavoriteFilter />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Favorites')).toBeInTheDocument();
  });

  test('calls setSelectedFilter when buttons are clicked', () => {
    render(<FavoriteFilter />);
    fireEvent.click(screen.getByText('All'));
    expect(mockSetSelectedFilter).toHaveBeenCalledWith('all');
    
    fireEvent.click(screen.getByText('Favorites'));
    expect(mockSetSelectedFilter).toHaveBeenCalledWith('favorites');
  });
});