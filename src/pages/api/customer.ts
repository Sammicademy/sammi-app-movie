import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string, {
	apiVersion: '2022-11-15',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const { method } = req;

	if (method === 'POST') {
		try {
			const { email, user_id } = req.body;
			await stripe.customers.create({ email, metadata: { user_id } });
			return res.status(200).json({ message: 'Success' });
		} catch (error) {
			const result = error as Error;
			return res.status(400).json({ message: result.message });
		}
	} else {
		return res.status(400).json({ message: 'Method not allowed' });
	}
}

interface Data {
	message?: string;
}
