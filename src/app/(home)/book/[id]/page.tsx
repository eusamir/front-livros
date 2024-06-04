'use client'
import axios from "axios"
import { ArrowLeft, EditIcon, Trash } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface ProductProps {
  params: {
    id: string
  }
}
export default function Books({params}:ProductProps){
  const [data, setData] = useState<any>([])
  const router = useRouter()


  console.log(data)
  useEffect(()=>{
    const fetchData = async()=>{
      await new Promise((resolve) => setTimeout(resolve, 2000))
      try{
        const response = await axios.get('https://crud-livros.onrender.com/livro/')
        setData(response.data)
      }catch(error){
        console.log(error)
      }
    }
    fetchData()
  },[]
)

const handleDelete = async()=>{
  try{
    await axios.delete(`https://crud-livros.onrender.com/livro/delete/${params.id}`)
    router.push("/")
  }catch(err){
    console.log("erro ao deletar" + err)
  }
}
  const book = data?.find((product: { id: any }) => product.id == params.id);

    return(
      <>
      <div className="flex gap-20 mt-10">
      <Image src={"/capa.png"} alt="/" height={200} width={200}/>
      
      <div className="flex flex-col gap-5">

      <h1 className="text-5xl font-bold">{book?.titulo}</h1>
      <strong className="text-2xl">{book?.autor}</strong>

      <div className="flex flex-col mt-5 gap-5">
        <h2 className="text-5xl font-bold">About</h2>
        {book?.description}
      </div>
      </div>
      </div>
      <div className="flex gap-7 mt-5">
      <div className="flex flex-col bg-zinc-700 text-center w-[200px] h-[100px] rounded-lg justify-center p-3 hover:bg-zinc-800 hover:cursor-pointer">
        <h2>Category</h2>
        <strong>{book?.category}</strong>
      </div>
      <div className="flex flex-col bg-zinc-700 text-center w-[200px] h-[100px] rounded-lg justify-center p-3 hover:bg-zinc-800 hover:cursor-pointer">
        <h2>Date of realease</h2>
        <strong>{book?.release}</strong>
      </div>
      <div className="flex flex-col bg-zinc-700 text-center w-[200px] h-[100px] rounded-lg justify-center p-3 hover:bg-zinc-800 hover:cursor-pointer">
        <h2>Pages</h2>
        <strong>{book?.pages}</strong>
      </div>
      </div>
      <Link href={"/"} className="absolute bottom-20 left-20 hover:cursor-pointer hover:text-gray-400">
        <ArrowLeft className="size-8"/>
      </Link>
      <Link href={`/book/editBook/${book?.id}`} className="absolute bottom-20 right-20 hover:cursor-pointer">
        <EditIcon className="size-5 hover:text-gray-400"/>
      </Link>
        <Trash className="absolute size-5 bottom-20 right-10 hover:cursor-pointer hover:text-red-600" onClick={handleDelete}/>
      </>
    )
}