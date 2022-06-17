import { GiftGridItem } from "../../src/components/GiftGridItem"
//import { createRoot } from 'react-dom/client';
import {render, screen} from '@testing-library/react';

describe('<GiftGridItem/>: Pruebas de Componente ', ()=> {

  const titulo = "Esto es una prueba";
  const url_prueba = "http://www.pruebita.com/imagen.jpg";

      test('Debe hacer match con el snapshot', () => { 
        const { container } = render(<GiftGridItem title= { titulo } url= { url_prueba } />);      
        expect( container ).toMatchSnapshot();
      
      });


     test('Debe mostrar la imagen con la URL yel ALT indicado', () => { 
      render(<GiftGridItem title= { titulo } url= { url_prueba } />);   
     
     // expect(screen.getByRole('img').src).toBe(url_prueba);
     // expect(screen.getByRole('img').alt).toBe(titulo);
      const { src, alt } = screen.getByRole('img');
       expect(src).toBe(url_prueba);
       expect(alt).toBe(titulo);  
      })

      test('Debe mostrar el título del componente', () => { 

        render(<GiftGridItem title= { titulo } url= { url_prueba } />); 
        expect(screen.getByText( titulo )).toBeTruthy();

       })

})