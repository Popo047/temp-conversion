import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tempActions } from '../redux/slice/tempSlice';

function ConverterF() {
	const dispatch = useDispatch();
	const tempF = useSelector((state) => state.temp.F);
	const tempRef = useRef();

	return (
		<div className='flex flex-col gap-3 items-center p-4'>
			<form>
				<label htmlFor='farenheit'></label>
				<input
					id='farenheit'
					name='farenheit'
					placeholder='Enter Temp in Farenheit'
					className='rounded shadow'
					type='number'
					step='0.1'
					ref={tempRef}
					onChange={() =>
						dispatch(tempActions.farenheitToCelcius(tempRef.current.value))
					}
				/>
			</form>
			<p className='text-lg'>
				Output in Celsius is <span className='font-medium'>{tempF}&#176;C</span>
			</p>
		</div>
	);
}

export default ConverterF;
