export const getGift = async( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoria ) }&limit=20&api_key=smXqLbFBBWmnXxzHk6Aqa4vIUSAR72D4`;
    
    const respuesta = await fetch(url);
    const {data} = await respuesta.json()
    
     const gifts = data.map( img => ({
    
              id: img.id,
              title: img.title,
              url: img.images?.downsized_medium.url
             

     }));

     return gifts;

}
