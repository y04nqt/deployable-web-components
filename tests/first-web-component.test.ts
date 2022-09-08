import { generateFirstWebComponent } from "../components/first-web-component"

/**
 * @jest-environment jsdom
 */
describe('my first test', () => {
    test('should render div with Hello, Universe.', () => {
        const component = generateFirstWebComponent();
        expect(component.tagName).toBe('DIV');
        expect(component.textContent).toBe('Hello, Universe.');
    })
})