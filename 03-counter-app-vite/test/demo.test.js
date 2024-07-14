describe('Prueba en demo', () => {

    test('Esta prueba no debe fallar', ()=>{
        //1. Inicializacion
    
        const message1 = 'Hola mundo';
        //2.estimulo
    
        const message2 = message1.trim();
    
        //3. Observar el comportamiento 
    
        expect(message1).toBe(message2); // Aqui hacemos las condiciones
    })
  
})



