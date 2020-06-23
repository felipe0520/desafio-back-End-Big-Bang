import SpotifyWebApi from "spotify-web-api-node";

export class SpotifyServices {
  private api: SpotifyWebApi;
  constructor() {
    this.api = new SpotifyWebApi({
      clientId: process.env.clientId,
      clientSecret: process.env.clientSecret,
    });
  }
  public async config() {
    const credential = await this.api.clientCredentialsGrant();
    this.api.setAccessToken(credential.body.access_token);
  }

  public async getMusic(name: string) {
    const response = await this.api.searchTracks(`'playlist : ${name}'`);
    const data = response.body.tracks?.items;

    const music = data?.map((el) => {
      return { name: el.name };
    });

    return music;
  }
}
