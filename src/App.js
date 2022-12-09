import Box from './Box';
import './scss/style.scss';

function App() {
	return (
		<div className='wrap'>
			<Box bg={'aqua'} />
			<Box bg={'orange'} />
			<Box wid={200} ht={200} />
			<Box border={[4, 'solid', 'hotpink']} />
		</div>
	);
}

export default App;
