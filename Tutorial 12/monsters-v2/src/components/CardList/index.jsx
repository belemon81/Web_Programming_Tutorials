import Card from "../Card";
import './styles.css';

export default function CardList(props) {
    return <div className='card-list'>
        {
            props.monsters.map(monster => <Card monster={monster} key={monster.email} />)
        }
    </div>;
}