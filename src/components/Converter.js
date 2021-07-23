import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tempActions } from '../redux/slice/tempSlice';

const Converter = () => {
	const dispatch = useDispatch();
	const tempC = useSelector((state) => state.temp.C);
	const tempRef = useRef();
	return (
		<div className='flex flex-col gap-3 items-center p-4'>
			<form>
				<label htmlFor='celcius'></label>
				<input
					placeholder='Enter Temp in Celsius'
					id='celcius'
					name='celcius'
					type='number'
					step='0.1'
					className='rounded shadow'
					ref={tempRef}
					onChange={() =>
						dispatch(tempActions.celciusToFrenheit(tempRef.current.value))
					}
				/>
			</form>
			<p className='text-lg'>
				Output in Farenheit is{' '}
				<span className='font-medium'>{tempC}&#176;F</span>
			</p>
		</div>
	);
};

export default Converter;
