import './styles.css';

export default function SearchBox(props) {
    return <input 
        type="search" 
        className='search'
        {...props}
        />;
}