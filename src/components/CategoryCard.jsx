export default function CategoryCard(props){
    return(
        <article className="">
            <div className="hover: cursor-pointer ">
                <img className="w-full" src={props.img} alt="" />
                <p className="text-sm font-bold hover:text-purple-400 ">{props.name}</p>
                <p className="text-xs hover:text-purple-400 ">{props.seg} espectadores</p>
            </div>
            
        </article>
    )
}