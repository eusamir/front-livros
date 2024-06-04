'use client'
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const courseFilterSchema = z.object({
    course: z.string()
  })
  
  type CourseFilterSchema = z.infer<typeof courseFilterSchema>
export function SearchBar(){
    const router = useRouter()
    const searchParams = useSearchParams()

    const queryCourseURL = searchParams.get('book')
    const { register, handleSubmit } = useForm<CourseFilterSchema>({
    values: {
      course: queryCourseURL ?? ''
    }
  })


    function handlerFilterBooks({ course }: CourseFilterSchema){
        if(course){
            router.push(`?book=${course}`)
        } else{
            router.push('/')
        }
    }
    return (
        <form onSubmit={handleSubmit(handlerFilterBooks)} className="flex w-[1200px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zing-700">
          <Search className="w-5 h-5 text-zinc-500" />
          <input
            placeholder="Buscar produtos..."
            {...register('course')}
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
            
          />
        </form>
    )
}