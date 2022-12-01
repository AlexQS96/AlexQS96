import { useContext } from 'react'
import { PorfolioContext } from '../context/AppContext';

export default function NotFound() {

    const {pageLanguage} = useContext(PorfolioContext);

    return (
        <div className='NotFound'>
            <p>Oops</p>
            <p>{pageLanguage.notFound}</p>
        </div>
    )
}