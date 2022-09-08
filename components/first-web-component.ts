import '../styles/tw-import.css';
import '../styles/web-component.css';

export const generateFirstWebComponent = () => {
    const myDiv = document.createElement('div');
    myDiv.textContent = "Hello, Universe.";
    return myDiv;
}

const initialize = () => {
    document.body.appendChild(generateFirstWebComponent());
}

const script = document.getElementById('my-script-tag');

if (script) {
    initialize();
}