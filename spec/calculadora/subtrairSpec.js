describe('deve testar a função subtração da Calculadora', function () {

    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 3 caso for feita a subtracao de 5 e 2', function () {
        expect(Calculadora.subtrair(5,2)).toEqual(3);
    });

    it('deve retornar 5 para 8 e 3 em formato texto', function () {
        expect(Calculadora.subtrair('8','3')).toEqual(5);
    });

    it('deve retornar 4 para 5.5 e 1.5', function () {
        expect(Calculadora.subtrair(5.5,1.5)).toEqual(4);
        expect(Calculadora.subtrair('5.5','1.5')).toEqual(4);
    });

    it('deve retornar 0 para valor 1 inválido', function () {
        expect(Calculadora.subtrair(undefined, 5)).toEqual(0);
    });

    it('deve retornar 0 quando valor 1 não for numérico', function () {
        expect(Calculadora.subtrair(5, undefined)).toEqual(0);
    });

});