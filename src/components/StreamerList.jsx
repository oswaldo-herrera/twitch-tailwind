import Streamer from "./Streamer"

const streamers = [
    {
        name:"ThePrimeagen",
        isLive:true,
        viewers:2,
        img:'https://static-cdn.jtvnw.net/jtv_user_pictures/51984fc0-a31a-413c-b1b8-3331bdf6d036-profile_image-70x70.png'
    },
    {
        name:"BaityBait",
        isLive:false,
        viewers:12,
        img:'https://static-cdn.jtvnw.net/jtv_user_pictures/574228be-01ef-4eab-bc0e-a4f6b68bedba-profile_image-70x70.png'
    },
    {
        name:"Jet",
        isLive:true,
        viewers:10,
        img:'https://static-cdn.jtvnw.net/jtv_user_pictures/32566eb9-5a4d-4993-b8c5-8232120701da-profile_image-70x70.png'
    },
    {
        name:"Lipson",
        isLive:false,
        viewers:9,
        img:'https://static-cdn.jtvnw.net/jtv_user_pictures/6db1417f-99a5-4fc3-9ead-55f3a0152e63-profile_image-70x70.png'
    }
]

export default function StreamerList(){
    return (
        <aside className="bg-[#1f2023] h-full flex flex-col gap-1">
            <h3 className="h-10 flex items-center px-3 uppercase text-sm ">Canales recomendados</h3>

            {
                streamers.map((streamer) =>{
                    return(
                        <Streamer  key={streamer.name} 
                            name={streamer.name}
                            isLive={streamer.isLive}
                            viewers={streamer.viewers}
                            img={streamer.img}
                        />


                        // <main key={`streamer-${streamer.name}`}>
                        //     <p>{streamer.name}</p>
                        //     <img src={streamer.img} alt="" />

                        // </main>
                        
                    )
                })
            }
            {/* <Streamer name='Ibai' img='https://static-cdn.jtvnw.net/jtv_user_pictures/51984fc0-a31a-413c-b1b8-3331bdf6d036-profile_image-70x70.png' isLive viewers={2}/>
            <Streamer name='Nelson' img= 'https://static-cdn.jtvnw.net/jtv_user_pictures/574228be-01ef-4eab-bc0e-a4f6b68bedba-profile_image-70x70.png'/>
            <Streamer name='Jet' img='https://static-cdn.jtvnw.net/jtv_user_pictures/32566eb9-5a4d-4993-b8c5-8232120701da-profile_image-70x70.png' isLive viewers={10}/>
            <Streamer name='Lipson' img='https://static-cdn.jtvnw.net/jtv_user_pictures/6db1417f-99a5-4fc3-9ead-55f3a0152e63-profile_image-70x70.png'/> */}
        </aside>
    )
}