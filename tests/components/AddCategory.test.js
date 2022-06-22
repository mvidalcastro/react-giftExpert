import {fireEvent, render, screen} from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';


describe('<AddCategory/> Pruebas al componente', ()=> {

    test('Debe cambiar el valor de la caja de texto', () => { 
            render( <AddCategory setCategorias = {() => {}} />);
            //screen.debug();
            const prueba = 'Matrix'
            const texto = screen.getByRole('textbox');
            fireEvent.input(texto,{target: {value: prueba}})    
            expect(texto.value).toBe(prueba)
            //screen.debug();
             
     })

     test('Debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'Spiderman';
            // TODO ???
        const onNewCategory = jest.fn();

            render( <AddCategory onNewCategory = { onNewCategory } />);
            const input = screen.getByRole('textbox');
            const form = screen.getByRole('form');
            //Gatilla el evento al escribir en el textbox
            fireEvent.input(input,{target: {value: inputValue}});

            fireEvent.submit( form );
            //screen.debug();

            expect( input.value ).toBe('');
            // Verifica si la funncion onNewCategory fue llamada desde el componente (solo 1 vez)
            expect( onNewCategory ).toHaveBeenCalled();
            expect( onNewCategory ).toHaveBeenCalledTimes(1);
            expect( onNewCategory ).toHaveBeenCalledWith( inputValue );


      })

      test('No debe llamar el OnNewCategory si el input está vacio', () => { 

        
       })


    })