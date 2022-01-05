import { Link } from "react-router-dom"


export const TableItem = ({id, name, price}) => {
    return <tr>
        <td style={{border: "1px solid black"}}>{name}</td>
        <td style={{border: "1px solid black"}}>{price}</td>
        <td style={{border: "1px solid black"}}><Link to={`/products/${id}`}>More Details</Link></td>
    </tr>
}