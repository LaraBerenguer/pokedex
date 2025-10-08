import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DetailsCard from "../components/DetailsCard";

//Mock react router
jest.mock("react-router", () => ({
  useNavigate: () => jest.fn(),
}));

const bulbasur = {
  id: 1,
  name: "bulbasaur",
  image: "bulba.png",
  types: [{ name: "grass" }],
  weight: 69,
  height: 7,
  stats: [{ name: "hp", base: 45 }],
};

test("renders Pokémon details correctly", () => {
  render(<DetailsCard pkm={bulbasur} />);

  expect(screen.getByText(/Bulbasaur/i)).toBeInTheDocument();
  expect(screen.getByText(/grass/i)).toBeInTheDocument();
  expect(screen.getByText(/Height/i)).toBeInTheDocument();
  expect(screen.getByText(/Weight/i)).toBeInTheDocument();
  expect(screen.getByText(/Stats/i)).toBeInTheDocument();
});