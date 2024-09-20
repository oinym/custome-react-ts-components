import './App.css';
import IconInput from './components/IconInput';

function App() {
    return (
        <div className="App">
            <div className='main'>

                <IconInput icon='&#37;' class={'revert'} InputProps={{ type: "number", min: 0, max: 20, step: 0.01 }} />
            </div>
        </div>
    );
}

export default App;
