'use client'
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const bookFilterSchema = z.object({
    book: z.string()
  })
  
  type BookFilterSchema = z.infer<typeof bookFilterSchema>
export function SearchBar(){
    const router = useRouter()
    const searchParams = useSearchParams()

    const querybookURL = searchParams.get('book')
    const { register, handleSubmit } = useForm<BookFilterSchema>({
    values: {
      book: querybookURL ?? ''
    }
  })


    function handlerFilterBooks({ book }: BookFilterSchema){
        if(book){
            router.push(`?book=${book}`)
        } else{
            router.push('/')
        }
    }
    return (
        <form onSubmit={handleSubmit(handlerFilterBooks)} className="flex w-[1200px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zing-700">
          <Search className="w-5 h-5 text-zinc-500" />
          <input
            placeholder="Buscar produtos..."
            {...register('book')}
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
            
          />
        </form>
    )
}