export default function SearchBar() {

    const url = 'https://restcountries.eu/rest/v2/all\n'

    let data = ['The dog is black', "Sam is coming home", 'Some other species are missing', 'You should not be here', 'They are here', 'Please, go fast', 'He is absent']

    return (
        <div className={'py-10 mx-auto w-2/5'}>
            <div className={'search'}>
                <div className={'search__input-wrap shadow'}>
                    <input className={'search__input'} type="text"/>
                    <button className={'search__btn'}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="icon-search" viewBox="0 0 18 18" fill="none">
                            <path
                                d="M14.026 12.848l3.569 3.568-1.18 1.18-3.567-3.57a7.466 7.466 0 0 1-4.681 1.64c-4.14 0-7.5-3.36-7.5-7.5 0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5a7.467 7.467 0 0 1-1.641 4.682zm-1.672-.619A5.814 5.814 0 0 0 14 8.167a5.832 5.832 0 0 0-5.833-5.834 5.831 5.831 0 0 0-5.834 5.834A5.832 5.832 0 0 0 8.167 14a5.814 5.814 0 0 0 4.062-1.646l.125-.125z"
                                fill="currentColor"></path>
                        </svg>
                    </button>
                </div>
                <div className="search__result shadow">
                    <ul className={'search__list'}>
                        {data.map((item, index) => <li className={'search__item'} key={index}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}