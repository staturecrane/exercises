function Movie (director, screenwriter, actor, actress) {
    this.director = director;
    this.screenwriter = screenwriter;
    this.actor = actor;
    this.actress = actress;

    this.showWriter = function () {
        console.log("The screenwriter is " + this.screenwriter);
    }

    this.showActress = function () {
        this.actress.forEach(function (eachActress){
            console.log("Starring " + eachActress);
        });
    }
};

var silenceOfTheLambs = new Movie ("Jonathan Demme", "John Doe", "Anothony Hopkins", ["Jodie Foster", "Grace Kelly"]);

silenceOfTheLambs.showActress(); 