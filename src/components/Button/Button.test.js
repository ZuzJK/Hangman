import { render, screen } from '@testing-library/react';
import Button from './Button';

describe("asasas", () => {

    it("dsds", () => {

        render(<Button>Submit</Button>);
        const btn = screen.getByText('Submit');
        expect(btn).toBeInTheDocument();

    }
    );
    

});