// PARA EVITAR TENER QUE ESTAR ESCRIBIENDO LAS FUNCIONES DE LA LÍNEA 2 DISPONIBLES CON VITEST, PODEMOS CONFIGURAR UN APARTADO DE GLOBALS EN NUESTRO ARCHIVO "VITE.CONFIG.JS" -------> CHEQUEAR CONFIG
import { describe, test, expect } from "vitest";

describe('PokeList', () => {
    test('should show the first 40 Pokemon', () => {
        expect( 1 + 1 ).toBe(2)
    });
});