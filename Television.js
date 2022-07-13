class Television{
    constructor(chanel,status,volume) {
        this.chanel = chanel;
        this.status = status;
        this.volume = volume;
    }
    getChanel(){
        return this.chanel;
    }
    setChanel(chanel){
        this.chanel = chanel;
    }
    getVolume(){
        return this.volume;
    }
    setVolume(volume){
        this.volume = volume;
    }
    getStatus(){
        return this.status;
    }
    setStatus(status){
        this.status = status;
    }

}