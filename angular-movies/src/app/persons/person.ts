import { Movie } from '../movies/movie';

export interface Person {
id: string;
name: string;
surname: string;
movies: Movie[];
}
