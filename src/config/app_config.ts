interface IUrls {
}

class AppConfig {
    AuthToken: string;
    DOMAIN: string;
    API_URLS: IUrls;
    constructor() {
        this.DOMAIN = process.env.DOMAIN;
        this.API_URLS = {
        };
    }

    updateToken(token) {
        this.AuthToken = token;
    }
}

export const appConfig = new AppConfig();