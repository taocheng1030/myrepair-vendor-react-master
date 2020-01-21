class Config {
    constructor() {
        this.config = {}
        this.configReady = false;
        this.BACKEND_API_URL = "HTTP://88.208.216.161:3031"
        this.BACKEND_FILE_URL = "HTTP://88.208.216.161:3032/"

        // this.BACKEND_API_URL = "HTTP://localhost:3031"
        // this.BACKEND_FILE_URL="HTTP://localhost:3032/"

        this.WS_CENTRIFUGO = "ws://192.168.1.14:9000/connection/websocket"
        this.TEXTLOCAL_SEND_API_URL = "https://api.txtlocal.com/send/"
        this.TEXTLOCAL_API_KEY = "i54HKCL6byU-nm22IdaiA8tya0HjbN3nhA6rZa18XP"
    }
}

export default (new Config);
