import Image from 'next/image';
import Link from 'next/link';
import { AiFillCheckCircle } from 'react-icons/ai';

const Success = () => {
	return (
		<>
			<div className='flex justify-start py-2 px-4'>
				<Image src={'/logo.svg'} alt={'logo'} width={56} height={56} className={'cursor-pointer object-contain'} />
			</div>
			<div className='h-[90vh] flex flex-col justify-center items-center'>
				<AiFillCheckCircle className='w-20 h-20 text-green-500' />
				<h1 className='text-2xl md:text-5xl mt-4'>Subscription Completed</h1>
				<Link href={'/'}>
					<button className='mt-4 bg-green-500 py-4 px-5 rounded'>Dashboard</button>
				</Link>
			</div>
		</>
	);
};

export default Success;
