export class Program {
 
    id: number;
    title: string;
    language: string;
	overview: string;
	originCountry: string;
    releaseDate: number;
	runtime: number;
	seansons: number;
    genres: string;
 
    constructor(title) {
      this.title = title;
	}
 
}