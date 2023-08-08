import './styles.css';

export default function Card(props) {
    return <div className='card'>
        <img src="https://robohash.org/1?set=set2&size=180x180" alt="" />

        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>;
}