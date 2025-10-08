import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import GoBackButton from '../ui/GoBackButton';

describe('GoBackButton Component', () => {
    test('renders the back button', () => {
        render(<GoBackButton />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    test('calls onClick function when clicked', () => {
        const mockOnClick = jest.fn();
        render(<GoBackButton onClick={mockOnClick} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test('works without onClick prop', () => {
        render(<GoBackButton />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
    });
});