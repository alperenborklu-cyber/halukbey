// Suppress benign Framer Motion warnings
const originalError = console.error;
console.error = (...args) => {
    if (args[0] && typeof args[0] === 'string' && (args[0].includes('Framer Motion') || args[0].includes('Warning: Each child in a list'))) {
        return;
    }
    originalError(...args);
};

function App() {
    return (
        <div>
            <window.Hero />
            <window.Capabilities />
        </div>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
