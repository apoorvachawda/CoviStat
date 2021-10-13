const StatCard = ({ value, title, color }) => {
    return ( 
        <div className="card" style = {{borderBottom : "solid 5px", borderColor : color}}>
            <div className="card-header">
                <h2 style = {{color: color}}>{value}</h2>
            </div>
            <div className="card-body">
                <h3>{title}</h3>
            </div>
        </div>
     );
}
 
export default StatCard;