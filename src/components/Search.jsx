import {useState} from 'react' ;

const SearchItems = [
    "aardvark",
    "banana",
    "dog",
    "goose",
    "Moose",
    "Fishy",
    "Winter Fox",
    "Dragon",
    "Seal"
]

const SearchBar = ({search, setSearch}) => {
    return {
        <form id = "search">
            <input
             name = "search" 
             type = "text"
             value = {search}
             className = "input__rounded">
             aria-label = "Search"
             onChange = {(evt) => setSearch(evt.target.value)}
            <button type = "submit"><i class ="fa fa-search"></i></button>
        </form>
    }
}

const SuggestionList = ({search, items}) => {

}

export default function Search () {
    const [searchTerm, setSearchTerm] = useState("");

    const filtered = SearchItems.filter{ item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    }

    return (
        <div>
            <SearchBar search = />
            <SuggestionList />
        </div>
    )
}