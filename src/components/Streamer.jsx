export default function Streamer(props){
    return (
        <div className="grid grid-cols-[2rem_auto_3rem] items-center gap-1 px-2 hover:bg-white/10 cursor-pointer py-1 " >
           
            <img className="h-[30px] m-auto rounded-full" src={props.img || 'https://api.dicebear.com/7.x/rings/png'}  alt="avatar" />
            
            

            <div className=" ">
                <p className="capitalize text-sm">{props.name || "desconocido"}</p>
                <p className="text-xs text-white/50 capitalize">{props.categoria || "just chatting"} </p>
            </div>
        {/* props.isLive === */}
            <div className="flex flex-row items-center justify-end gap-2 "> 
                {props.isLive === true ? (
                    <>
                        <figure className="bg-red-500 w-2 h-2 rounded-full"></figure>
                        <span>{props.viewers || 0}k</span>
                    </>
                ):(
                    <p className="text-white/30">offline</p>
                )}
            </div>

        </div>
        
    )
}

// que hace el figure y no afecta si ponemos px al momento de usar entre los corchetes para el responsive
//https://www.dicebear.com/styles/rings/