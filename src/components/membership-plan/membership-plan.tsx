import moment from 'moment';
import { useState } from 'react';
import { MembershipPlanProps } from './membership-plan.props';

const MembershipPlan = ({ subscription }: MembershipPlanProps) => {
	const [isLoading, setIsLoading] = useState(false);

	const openPortal = async () => {
		setIsLoading(true);
		const paylaod = { user_id: subscription.customer.metadata.user_id };

		const response = await fetch('/api/subscription/manage', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(paylaod),
		});

		const data = await response.json();
		window.open(data.portal);
		setIsLoading(false);
	};

	return (
		<div className='mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:bordder-x-0 md:border-t md:border-b-0 md:pb-0'>
			<div className='space-y-2 py-4'>
				<h4 className='text-lg text-[gray]'>Membership & Billing</h4>
				<button
					onClick={openPortal}
					className='h-10 w-3/5 transition-all whitespace-nowrap bg-gray-300 py-2 text-sm font-medium text-black shadow-md hover:bg-gray-200 md:w-4/5'
				>
					{isLoading ? 'Loading...' : 'Cancel Membership'}
				</button>
			</div>

			<div className='col-span-3'>
				<div className='flex flex-col justify-between border-b border-white/10 py-4 md:flex-row'>
					<div>
						<p className='font-medium'>{subscription.customer.email}</p>
						<p className='text-[gray]'>Password: ******</p>
					</div>
					<div className='md:text-right'>
						<p className={'membershipLink'}>Change email</p>
						<p className={'membershipLink'}>Change password</p>
					</div>
				</div>

				<div className='flex flex-col justify-between pt-4 pb-4 md:flex-row md:pb-0'>
					<div>
						<div className='flex items-center gap-2'>
							<span className='py-1 px-3 uppercase rounded bg-white/20'>
								{subscription.default_payment_method
									? subscription.default_payment_method.card.brand
									: subscription.customer.invoice_settings.default_payment_method.card.brand}
							</span>
							**** **** ****{' '}
							{subscription.default_payment_method
								? subscription.default_payment_method.card.last4
								: subscription.customer.invoice_settings.default_payment_method.card.last4}
						</div>
						<p className='mt-4'>
							Your next billing date is {moment(subscription.current_period_end * 1000).format('DD MMM, yyyy')}
						</p>
					</div>
					<div className='md:text-right'>
						{isLoading ? (
							'Loading....'
						) : (
							<>
								<p onClick={openPortal} className='membershipLink'>
									Manage payment info
								</p>
								<p onClick={openPortal} className='membershipLink'>
									Add backup payment method
								</p>
								<p onClick={openPortal} className='membershipLink'>
									Billing detail
								</p>
								<p onClick={openPortal} className='membershipLink'>
									Change billing day
								</p>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MembershipPlan;
