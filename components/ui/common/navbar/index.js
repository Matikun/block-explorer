import { Login } from '@components/ui/web3';
import Logo from '../logo';

const Navbar = () => {
	return (
		<div className='flex-center-container'>
			<div>
				<Logo
					src='/logo_ripio.svg'
					height={25}
					width={60}
					style={{ color: '#fff' }}
					className='filter-logo-ripio'
				/>
			</div>
			<div>
				<Login />
			</div>
		</div>
	);
};

export default Navbar;
