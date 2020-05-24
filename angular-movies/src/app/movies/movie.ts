import { Person } from '../persons/person';
import { Genere } from '../generes/genere';


export interface Movie {
id: string;
name: string;
premiere: number;
duration: number;
country: string;
description: string;
imageURL: string;
director: Person;
generes: Genere[];
}
