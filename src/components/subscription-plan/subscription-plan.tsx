import Image from 'next/image';
import { useAuth } from 'src/hooks/useAuth';
import { RiVipCrown2Line } from 'react-icons/ri';
import { AiOutlineHourglass, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { SubscriptionPlanProps } from './subscription-plan-props';
import PlanCard from '../plan-card/plan-card';

const SubscriptionPlan = ({ products }: SubscriptionPlanProps) => {
	const { logout } = useAuth();

	return (
		<div className='min-h-screen'>
			<div className='border-b-2 border-gray-300/20 h-[10vh] flex justify-between items-center px-4 md:px-10'>
				<Image src={'/logo.svg'} alt={'logo'} width={56} height={56} className={'cursor-pointer object-contain'} />
				<div onClick={logout} className='cursor-pointer hover:underline'>
					Logout
				</div>
			</div>
			<div className='flex flex-col space-y-4 text-center pt-5'>
				<h1 className='text-2xl md:text-5xl text-shadow-sm'>Flexible pricing for teams of any size.</h1>
				<p className='text-xl text-shadow'>Relaxing with watchin your favourite movies and tv.</p>
			</div>
			<div className='flex justify-center items-center py-20'>
				<div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>
					{products.map(product => <PlanCard key={product.id} product={product} />).reverse()}
				</div>
			</div>
		</div>
	);
};

export default SubscriptionPlan;
