
import { render,screen } from "@testing-library/react";
import MissedLetters from './MissedLetters';

describe("Missed Letters", () => {

    it("renders properly", () => {
        render(<MissedLetters />)
        const missedLetters = screen.getByText('Missed letters');
        expect(missedLetters).toBeInTheDocument();
    });

    it("props renders properly", () => {

        render(<MissedLetters missedLetters={"a b m n"} />)
        const a = screen.getByText(/a/i);
        expect(a).toBeInTheDocument();
    });
})