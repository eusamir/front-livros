'use client'
import { otherProducts } from "@/app/(home)/page";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ProductProps {
    params: {
      slug: string
    }
  }
export default function editBook({params}: ProductProps){
    const [books, setBooks] = useState(otherProducts)
    const selectedBook = books.filter(e=> e.slug === params.slug)
    const selectedBookArray = selectedBook[0]
    
    return(
        <>
        <form>
            <div className="flex h-[80vh] flex-col gap-5 justify-center items-center text-center">
                <input type="text" placeholder="Título" className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"/>
                <input type="text" placeholder="Autor" className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"/>
                <input type="text" placeholder="Páginas" className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"/>
                <input type="text" placeholder="Categoria" className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"/>
                <input type="text" placeholder="Lançamento" className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"/>
                <textarea placeholder="Descrição" className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg h-32"></textarea>
                <button type="submit" className="bg-blue-900 text-white p-3 rounded-md w-[80%] max-w-lg hover:bg-blue-700">Editar</button>
            </div>
            <Link href={`/book/${params.slug}`} className="absolute bottom-20 left-20 hover:cursor-pointer hover:text-gray-400">
                <ArrowLeft className="size-8"/>
            </Link>
        </form>
        </>
    )
}