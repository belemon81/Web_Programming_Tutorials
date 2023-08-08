import { Link } from 'react-router-dom';
import './styles.css';

export default function Card(props) {
    const monster = props.monster;

    return <div className='card' key={monster.email}>
        <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="" />
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>

        <Link to={`/${monster.id}`}>Details</Link> | <Link to={`/${monster.id}/update`}>Update</Link>
    </div>;
}