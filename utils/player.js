class PlayerStats {
    constructor(hp,mp,str,sp,def){
        this.hp = hp
        this.mp = mp
        this.str = str
        this.sp = sp
        this.def = def
    }
}

export class Player {
    constructor(name,stats,friends){
        this.name = name
        this.level = 1
        this.stats = stats
        this.friends = friends
    }
    takeDamage(dmg){
        this.stats.hp -= (dmg - this.stats.def)
    }
    fireball(){
        return 15 + this.stats.str
    }
    
}
