import Head from 'next/head';
import AuthComponent from 'src/components/auth';

const Auth = () => {
	return (
		<>
			<Head>
				<title>Auth</title>
				<meta name='description' content='For watching movies you should sign to app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<AuthComponent />
		</>
	);
};

export default Auth;
