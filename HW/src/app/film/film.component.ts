import { Component, OnInit } from '@angular/core';
import Film from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
  providers: [FilmService]
})
export class FilmComponent implements OnInit {
  filmHidden: boolean = true;
  film!: Film;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
  }

  searchFilm(): void {
    let input: HTMLElement | null = document.getElementById('filmTitle');
    if(input) {
      this.filmService.searchFilm((input as HTMLInputElement).value).subscribe(data => {
        this.film = data;
        this.showFilm();
      });
    }
  }

  showFilm(): void {
    this.filmHidden = false;
  }

}
