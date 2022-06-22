import { getGift } from "../../src/helpers/getGifts"

describe('getGifts(): Prueba del helper', ()=> {

    test('Debe retornar un arreglo de 20 elementos de gifts', async () => { 

        const categoria_test= 'Superman';
        const resp_gifts = await getGift(categoria_test);
        expect(resp_gifts.length).toBeGreaterThan(0);
        expect(resp_gifts[0]).toEqual({
                                            id: expect.any(String),
                                            title: expect.any(String),
                                            url: expect.any(String)
                                        
                                })

     })


})