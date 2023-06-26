export class Game {
  id!: number;
  title!: string;
  thumbnail!: string;
  short_description!: string;
  game_url!: string;
  genre!: string;
  platform!: string;
  publisher!: string;
  developer!: string;
  release_date!: string;
  freetogame_profile_url!: string;

  constructor(
    title: string,
    thumbnail: string,
    short_description: string,
    game_url: string,
    genre: string,
    platform: string,
    publisher: string,
    developer: string,
    release_date: string,
    freetogame_profile_url: string
  ) {
    this.title = title;
    this.thumbnail = thumbnail;
    this.short_description = short_description;
    this.game_url = game_url;
    this.genre = genre;
    this.platform = platform;
    this.publisher = publisher;
    this.developer = developer;
    this.release_date = release_date;
    this.freetogame_profile_url = freetogame_profile_url;
  }
}
