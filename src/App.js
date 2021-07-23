import Converter from './components/Converter';
import ConverterF from './components/ConverterF';

function App() {
	return (
		<>
			<h1 className='text-4xl font-bold text-center'>Temperature Converter</h1>
			<Converter />
			<hr className='shadow w-full text-gray-500 rounded' />
			<ConverterF />
		</>
	);
}

export default App;
