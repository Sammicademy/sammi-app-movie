export interface IMovie {
	adult: boolean;
	backdrop_path: string;
	id: number;
	title: string;
	original_language: string;
	original_title: string;
	overview: string;
	poster_path: string;
	media_type: string;
	genre_ids: number[];
	popularity: number;
	release_date: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	name: string;
	original_name: string;
}

export interface Element {
	type: 'Trailer' | 'Clip' | 'Opening Credits' | 'Behind the Scenes';
}
