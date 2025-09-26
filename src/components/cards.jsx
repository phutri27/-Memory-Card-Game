import { fetching, shuffle } from "../utils/fetchAPI"
import { useEffect, useState } from "react";
export function Cards({onScore}){
    const [cards, setCards] = useState([]);
    const [lose, setLose] = useState(false);

    useEffect(() => {
        async function loadCards() {
            const promises = [];
            for (let i = 1; i <= 12; i++) {
                promises.push(fetching(i));
            }
            const results = await Promise.all(promises);
            setCards(results); 
        }
        loadCards();
        return 
    }, []);

    function setRandom(id){
        const idx = cards.findIndex(card => card.id === id);
        const click = cards[idx]
        if (click.hit){
            onScore(0)
            const arr = shuffle(cards)
            arr.map(card => card.hit = false)
            setCards(arr)
            setLose(true)
            setTimeout(() => setLose(false), 2000)
        }
        else{
            onScore(s => s + 1)
            const arr = shuffle(cards)
            setCards(arr.map(card => 
                (card.id === id ? {...card, hit: true} : card)
            ))
        }
    }

    return(
        <div>
            {lose ? (<div className="game-over">Game Over</div>) : null}
            <div className="cards">
                {cards.map(card => 
                <div className="card" key={card.id} onClick={() => setRandom(card.id)}>
                    <img src={card.img} alt={card.name} />
                    <p>{card.name.toUpperCase()}</p>
                </div>
                )}
            </div>
        </div>
    )
}   