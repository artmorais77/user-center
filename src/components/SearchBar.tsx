interface ISearchBar {
  onSearch: (value: string) => void
}

export function SearchBar({onSearch}: ISearchBar) {
  return(
    <div className="flex justify-center items-center mt-2">
      <input 
        type="text" 
        placeholder="Buscar usuários por nome . . ."
        className="bg-gray-100 rounded-sm p-2 shadow-md focus:border-indigo-600 outline-none border border-transparent w-full"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  )
}