import { Player } from "./utils/player"

let player1 = new Player(
    "Jacques",
    {
        hp:100,
        mp:10,
        str:3,
        sp:4,
        def:10
    },
    []
)

let player2 = new Player(
    "Roneil",
    {
        hp:100,
        mp:10,
        str:3,
        sp:4,
        def:10
    },
    [player1]
)


let group = [player1,player2]

player1.takeDamage(player2.attack())

console.log(group)



