export async function fetching(url){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${url}`);
        if (!response.ok){
            throw new Error(`Error, ${response.status}`)
        }
        const data = await response.json()
        return {
            id: crypto.randomUUID(),
            name: data.forms[0].name,
            img: data.sprites.front_default,
            hit: false
        }
    } catch(error) {
        console.log(error)
    }
}

export function shuffle(a){
    const array = a.slice()
    let current = array.length

    while (current != 0){
        let randomIndex = Math.floor(Math.random() * current)
        current--;

        [array[current], array[randomIndex]] = [array[randomIndex], array[current]]
    }
    return array;
}
