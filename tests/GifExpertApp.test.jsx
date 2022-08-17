import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas sobre el componente de GifExpertApp", () => {
    test('should first', () => {
        render(<GifExpertApp />);
        screen.debug();
    });
});