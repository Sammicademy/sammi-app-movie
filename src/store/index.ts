import { IMovie } from 'src/interfaces/app.interface';
import { create } from 'zustand';

interface InfoState {
	modal: boolean;
	movie: IMovie;
	setModal: (bool: boolean) => void;
	setMovie: (movie: IMovie) => void;
}

export const useInfoStore = create<InfoState>()(set => ({
	modal: false,
	movie: {} as IMovie,
	setModal: (bool: boolean) => set(state => ({ ...state, modal: bool })),
	setMovie: (movie: IMovie) => set(state => ({ ...state, movie: movie })),
}));
