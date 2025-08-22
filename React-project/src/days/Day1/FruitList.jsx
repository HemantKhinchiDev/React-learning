export const FruitList=({fruits})=>{
    
    return (
        <>
            <ul>{fruits.map((fruit,index)=>{
                    return <li key={index}>{fruit}</li>
                })}
            </ul>
        </>
    )
}