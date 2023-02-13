import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { TextField } from 'src/components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const Auth = () => {
	const [auth, setAuth] = useState<'signup' | 'signin'>('signin');

	const toggleAuth = (state: 'signup' | 'signin') => {
		setAuth(state);
	};

	const onSubmit = (formData: { email: string; password: string }) => {
		console.log(formData);
	};

	const validation = Yup.object({
		email: Yup.string().email('Enter valid email').required('Email is required'),
		password: Yup.string().min(4, '4 minimum character').required('Password is requried'),
	});

	return (
		<div className='relative flex h-screen w-screen flex-col md:items-center md:justify-center bg-black md:bg-transparent'>
			<Head>
				<title>Auth</title>
				<meta name='description' content='For watching movies you should sign to app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Image src={'https://rb.gy/p2hphi'} alt={'bg'} fill className='object-cover -z-10 !hidden sm:!inline opacity-60' />

			<Image
				src={'/logo.svg'}
				alt={'logo'}
				width={70}
				height={70}
				className={'absolute left-4 top-4 cursor-pointer object-contain'}
			/>

			<Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit} validationSchema={validation}>
				<Form className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-10'>
					<h1 className='text-4xl font-semibold'>{auth === 'signup' ? 'Sign up' : 'Sign In'}</h1>
					<div className='space-y-4'>
						<TextField name='email' placeholder='Email' type={'text'} />
						<TextField name='password' placeholder='Password' type={'password'} />
					</div>

					{auth === 'signin' ? (
						<button type='submit' className='w-full bg-[#E10856] py-3 mt-4 font-semibold'>
							Sign In
						</button>
					) : (
						<button type='submit' className='w-full bg-[#E10856] py-3 mt-4 font-semibold'>
							Sign Up
						</button>
					)}
					{auth === 'signin' ? (
						<div className='text-[gray]'>
							Not yet account?{' '}
							<button type='button' className='text-white hover:underline' onClick={() => toggleAuth('signup')}>
								Sign Up Now
							</button>
						</div>
					) : (
						<div className='text-[gray]'>
							Already have account?{' '}
							<button type='button' className='text-white hover:underline' onClick={() => toggleAuth('signin')}>
								Sign In
							</button>
						</div>
					)}
				</Form>
			</Formik>
		</div>
	);
};

export default Auth;
