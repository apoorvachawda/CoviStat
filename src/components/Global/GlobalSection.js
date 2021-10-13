import StatCard from "../UI/StatCard";

const GlobalSection = ({ confirmed, recovered, deaths, lastUpdate }) => {

    return ( 
        <div className = "global">
            <h2>Global data</h2>
            <div className="statcard-gallery">
                <StatCard value={confirmed} title="Confirmed" color="CornflowerBlue" />
                <StatCard value={recovered} title="Recovered" color="Limegreen"/>
                <StatCard value={deaths} title="Deaths" color="Tomato" />
            </div>
            <p>Last updated: {new Date(lastUpdate).toUTCString()}</p>
        </div>
     );
}
 
export default GlobalSection;