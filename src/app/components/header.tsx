import Link from 'next/link'
import { SearchBar } from './searchBar'



export function Header() {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          BookStore
        </Link>
        <SearchBar/>
      </div>
      
    </div>
  )
}