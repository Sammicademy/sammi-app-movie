import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { auth } from 'src/firebase';

export const useAuth = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const [user, setUser] = useState<User | null>(null);

	const router = useRouter();

	const signUp = async (email: string, password: string) => {
		setIsLoading(true);

		await createUserWithEmailAndPassword(auth, email, password)
			.then(res => {
				setUser(res.user);
				router.push('/');
				setIsLoading(true);
			})
			.catch(error => setError(error.message))
			.finally(() => setIsLoading(false));
	};

	const signIn = async (email: string, password: string) => {
		setIsLoading(true);

		await signInWithEmailAndPassword(auth, email, password)
			.then(res => {
				setUser(res.user);
				router.push('/');
				setIsLoading(true);
			})
			.catch(error => setError(error.message))
			.finally(() => setIsLoading(false));
	};

	const logout = async () => {
		setIsLoading(true);

		signOut(auth)
			.then(() => setUser(null))
			.catch(error => setError(error.message))
			.finally(() => setIsLoading(false));
	};

	return { error, isLoading, user, signIn, signUp, logout, setUser, setIsLoading };
};
