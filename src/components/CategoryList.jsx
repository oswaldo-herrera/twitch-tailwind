import CategoryCard from "./CategoryCard"

const categories = [
    {
        img:"https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-188x250.jpg",
        name:"Rust",
        seg:"45.5 k"
    },
    {
        img:"https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg",
        name:"Fortnite",
        seg:"189.9 k"
    },
    {
        img:"https://static-cdn.jtvnw.net/ttv-boxart/1540019723_IGDB-188x250.jpg",
        name:"FNAF",
        seg:"589.9 k"
    },
    {
        img:"https://static-cdn.jtvnw.net/ttv-boxart/41917829_IGDB-188x250.jpg",
        name:"Avatar",
        seg:"2889.9 k"
    },
    {
        img:"https://static-cdn.jtvnw.net/ttv-boxart/1441208453_IGDB-188x250.jpg",
        name:"Human",
        seg:"1890.9 k"
    },
    {
        img:"https://static-cdn.jtvnw.net/ttv-boxart/23020_IGDB-285x380.jpg",
        name:"Roblox",
        seg:"358.9 k"
    },
    {
        img:"https://static-cdn.jtvnw.net/ttv-boxart/1068239917_IGDB-285x380.jpg",
        name:"Mario Party",
        seg:"958.0 k"
    }
]

export default function CategoryList() {
    return (
        <main className="bg-[#0e0e0f] grid grid-cols-2 p-5 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-7  ">

            {
                categories.map((categorie) => {
                    return(
                        <CategoryCard key={categorie.name} 
                            img={categorie.img}
                            name={categorie.name}
                            seg={categorie.seg}
                        />
                    )
                })
            }

            {/* <CategoryCard img='https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-188x250.jpg' name='Rust' seg='45.5 k'/>
            <CategoryCard img='https://static-cdn.jtvnw.net/ttv-boxart/33214-188x250.jpg' name='Fortnite' seg='189.9 k'/>
            <CategoryCard img='https://static-cdn.jtvnw.net/ttv-boxart/1540019723_IGDB-188x250.jpg' name='FNAF' seg='589.9 k'/>
            <CategoryCard img='https://static-cdn.jtvnw.net/ttv-boxart/41917829_IGDB-188x250.jpg' name='Avatar' seg='2889.9 k'/>
            <CategoryCard img='https://static-cdn.jtvnw.net/ttv-boxart/1441208453_IGDB-188x250.jpg' name='Human' seg='1890.9 k'/>
            <CategoryCard img='https://static-cdn.jtvnw.net/ttv-boxart/23020_IGDB-285x380.jpg' name='Roblox' seg='358.9 k'/>
            <CategoryCard img='https://static-cdn.jtvnw.net/ttv-boxart/1068239917_IGDB-285x380.jpg' name='Mario Party' seg='958.0 k'/> */}
        </main>
    )
}