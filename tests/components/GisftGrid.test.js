import {fireEvent, getAllByPlaceholderText, render, screen} from '@testing-library/react';
import { GisftGrid } from '../../src/components/GisftGrid';
import { useFetchGifts } from '../../src/hooks/useFetchGifts';

jest.mock('../../src/hooks/useFetchGifts');

describe('Pruebas en el componente GisftGrid', () => { 

    const category ='Spiderman';

    test('Debe de mostrar el loading inicial', () => { 

        useFetchGifts.mockReturnValue({
            imagen: [], 
            isLoading: true
        })

        render( <GisftGrid categoria= { category }/>);
        expect(screen.getByText('Cargando...'))
     })



     test('Debe mostrar items cuando se cargan las imagenes useFetchGifts', () => { 

        const gifts = [
            {
                id: 'ABCDEF',
                title: "Imagenes de Superman",
                url: 'https://www.imagenes.com/superman.jpg '    

             },
             {
                id: 'XYZ',
                title: "Imagenes de Bart Simpsons.jpg",
                url: 'https://www.imagenes.com/Bart.jpg '    

             }
 
            ]
        useFetchGifts.mockReturnValue({
            imagen: gifts, 
            isLoading: false
        })
        render( <GisftGrid categoria= { category} />)

        expect(screen.getAllByRole('img').length).toBe(2)

        //screen.debug()

      })

 })