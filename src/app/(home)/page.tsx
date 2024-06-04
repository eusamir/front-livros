'use client'

import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from 'axios'

function removeAccents(query: string) {
  return query.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export default function Home() {
  const [data, setData] = useState<any>([])
  const searchParams = useSearchParams()

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response = await axios.get('https://crud-livros.onrender.com/livro/')
        setData(response.data)
      }catch(error){
        console.log(error)
      }
    }
    fetchData()
  },[])

  const queryCourseURL = searchParams.get('book')
  const filteredCourse = queryCourseURL
    ? data?.filter((c: { titulo: string; }) =>
        removeAccents(c?.titulo?.toLowerCase()).includes(
          removeAccents(queryCourseURL.toLowerCase())
        )
      )
    : data
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-5 gap-10 mt-10 text-center">
            {filteredCourse.length > 0 ? (
              <>
              {filteredCourse.map((product:any) => (
                  <Link key={product.id} href={`/book/${product.id}`} className="p-3 bg-zinc-900 rounded-md hover:bg-zinc-800 cursor-pointer">
                      <div className="flex flex-col items-center mt-4">
                          <Image src="/capa.png" alt="/" height={200} width={200} />
                          <h1 className="font-medium text-center p-3">{product.titulo}</h1>
                          <p className="text-center font-light">{product.autor}</p>
                      </div>
                  </Link>
              ))}
              </>
            ) : (
              <p>Nenhum livro encontrado.</p>
            )}
            </div>
            
            <Link href={"/book/newBook"} className="absolute bottom-20 right-20 hover:cursor-pointer hover:text-gray-400">
                <PlusIcon className="size-8"/>
            </Link>
        </div>
    )
}
