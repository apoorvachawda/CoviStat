import { Link } from "react-router-dom";
const CountryProfile = ({name, confirmed, recovered, deaths, slug}) => {

    return ( 
        <Link to = {`/countries/${slug}`}>
            <div className="country-card">
                <div className="card-header">
                    <h2 style={{ color: "orange" }}>{name}</h2>
                </div>
                <div className="card-body">
                    <p>Confirmed: {confirmed}</p>
                    <p>Recovered: {recovered}</p>
                    <p>Deaths: {deaths}</p>
                </div>
            </div>
        </Link>
        );
}
 
export default CountryProfile;