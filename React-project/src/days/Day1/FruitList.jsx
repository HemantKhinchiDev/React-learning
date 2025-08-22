export const FruitList=()=>{
    const fruits = ["🍎Apple", "Banana", "Mango"];
    return (
        <>
            <ul>{fruits.map((fruit,index)=>{
                    return <li key={index}>{fruit}</li>
                })}
            </ul>
        </>
    )
}