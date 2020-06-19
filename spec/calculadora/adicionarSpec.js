describe('deve testar a soma de calculadora', function () {

    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 5 para a soma de 2 e 3 ', function () {
        expect(Calculadora.adicionar(2,3)).toEqual(5);
    });

    it('deve retornar 6 para a soma de \"6"\ e \"-3"\ ', function () {
        expect(Calculadora.adicionar(9,-3)).toEqual(6);
    });

    it('deve retornar 4.5 para 1.5 e 3', function() {
       expect(Calculadora.adicionar(1.5,3)).toEqual(4.5);
    });

    it('deve retornar 0 quando valor 1 não for numérico', function () {
        expect(Calculadora.adicionar(undefined, !undefined && !NaN)).toEqual(0);
    });

    it('deve retornar 0 quando valor 2 não for numérico', function () {
        expect(Calculadora.adicionar(!undefined && !NaN, undefined)).toEqual(0);
    });
})