import fs from 'node:fs';
import path from 'node:path';
import { test, describe, before } from 'node:test';
import assert from 'node:assert';
import { JSDOM } from 'jsdom';

describe('GoPokemon Frontend', () => {
    let document;
    
    before(() => {
        const url = new URL('../frontend/index.html', import.meta.url);
        const html = fs.readFileSync(url, 'utf8');
        const dom = new JSDOM(html);
        document = dom.window.document;
    });

    test('should have a Gameboy container', () => {
        const container = document.querySelector('.gameboy-container');
        assert.ok(container, 'Gameboy container should exist');
    });

    test('should have a theme toggle button', () => {
        const toggleBtn = document.getElementById('theme-toggle');
        assert.ok(toggleBtn, 'Theme toggle button should exist');
    });

    test('should display the Pokemon sprite', () => {
        const sprite = document.querySelector('.pokemon-sprite');
        assert.ok(sprite, 'Sprite should exist');
        assert.strictEqual(sprite.getAttribute('src'), 'assets/pokemon_sprite.png');
    });

    test('should have a link to the source code repo', () => {
        const menuBtns = document.querySelectorAll('.menu-btn');
        let foundSourceCodeLink = false;
        menuBtns.forEach(btn => {
            if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes('github.com/howlcipher/GoPokemon')) {
                foundSourceCodeLink = true;
            }
        });
        assert.ok(foundSourceCodeLink, 'Source code link should exist');
    });

    test('should have Gameboy controls (D-Pad and Action Buttons)', () => {
        const dpad = document.querySelector('.d-pad');
        const actionBtns = document.querySelector('.action-buttons');
        assert.ok(dpad, 'D-Pad should exist');
        assert.ok(actionBtns, 'Action buttons should exist');
    });
});
