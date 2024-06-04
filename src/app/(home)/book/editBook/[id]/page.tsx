'use client'
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProductProps {
    params: {
      id: string
    }
  }
export default function EditBook({params}: ProductProps){
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [pages, setPages] = useState("")
    const [category, setCategory] = useState("")
    const [releaseDate, setReleaseDate] = useState("")
    const [description, setDescription] = useState("")


    const router = useRouter()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `https://crud-livros.onrender.com/livro/update/${params.id}`,
                {titulo:title, autor:author, pages:pages, category:category, release:releaseDate, description:description}
            );
            console.log("Livro atualizado com sucesso:", response.data);
            router.push(`/book/${params.id}`);
        } catch (err) {
            console.error(err);
        }
    };
    
    
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="flex h-[80vh] flex-col gap-5 justify-center items-center text-center">
                <input type="text" placeholder="Título" className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg" onChange={(e)=> setTitle(e.target.value)}/>
                <input type="text" placeholder="Autor" className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"  onChange={(e)=> setAuthor(e.target.value)}/>
                <input type="text" placeholder="Páginas" className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"  onChange={(e)=> setPages(e.target.value)}/>
                <input type="text" placeholder="Categoria" className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"  onChange={(e)=> setCategory(e.target.value)}/>
                <input type="text" placeholder="Lançamento" className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"onChange={(e)=> setReleaseDate(e.target.value)}/>
                <textarea placeholder="Descrição" className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg h-32"  onChange={(e)=> setDescription(e.target.value)}></textarea>
                <button type="submit" className="bg-blue-900 text-white p-3 rounded-md w-[80%] max-w-lg hover:bg-blue-700">Editar</button>
            </div>
            <Link href={`/book/${params.id}`} className="absolute bottom-20 left-20 hover:cursor-pointer hover:text-gray-400">
                <ArrowLeft className="size-8"/>
            </Link>
        </form>
        </>
    )
}