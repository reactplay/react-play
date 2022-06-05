export default function ItemDate(props){
    const month = props.itemDate.getMonth();
    const day = props.itemDate.toLocaleString("en-US", { day: "2-digit" });
    const year = props.itemDate.getFullYear();
    return(
        <div className='productitemDate'>
            {day}-{month}-{year}                               
        </div>
    );
}