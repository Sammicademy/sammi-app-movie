import Image from 'next/image';
import Link from 'next/link';
import { BiErrorAlt } from 'react-icons/bi';

const Cancel = () => {
	return (
		<>
			<div className='flex justify-start py-2 px-4'>
				<Image src={'/logo.svg'} alt={'logo'} width={56} height={56} className={'cursor-pointer object-contain'} />
			</div>
			<div className='h-[90vh] flex flex-col justify-center items-center'>
				<BiErrorAlt className='w-20 h-20 text-red-500' />
				<h1 className='text-2xl md:text-5xl mt-4'>Canceled Subscription</h1>
				<Link href={'/'}>
					<button className='mt-4 bg-[#E10856] py-4 px-5 rounded'>Choose Plan</button>
				</Link>
			</div>
		</>
	);
};

export default Cancel;
