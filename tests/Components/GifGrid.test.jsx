import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";
import { useFetchGifs } from "../../src/Hooks/useFetchGifs";

jest.mock("../../src/Hooks/useFetchGifs");

describe("Pruebas sobre el componente de GifGrid", () => {
    const category = "One Punch";
    test('Debe de mostrar el loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category}/>);
        expect(screen.getByText("Cargando..."));
        expect(screen.getByText(category));
    });

    test('Debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs', () => {
        const gifs = [
            {
            id: 'ABC',
            title: 'Saitama',
            url: 'http://google.com'
            },
            {
            id: '123',
            title: 'Kokun',
            url: 'http://kokun.com'
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });
        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(2);

        // screen.debug();
    });
});