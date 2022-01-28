class Anime{
    constructor(name,sub,feedback,episodes)
    {
        this.name=name;
        this.sub=sub;
        this.feedback=feedback;
        this.episodes=episodes; 
    }

    ani() {
        let subbed;
        if(this.sub)
        {
             subbed="subbed";
        }
        else {subbed="dubbed"};

        console.log( `${this.name} has ${this.episodes} no of episodes,  it is ${this.feedback} and surprise, it is ${subbed}`);   
    }
};


const attackOnTitan=new Anime("Attack on titan",true,"awesome",75);
console.log(attackOnTitan);
attackOnTitan.ani();