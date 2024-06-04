'use client'

import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const otherProducts = [
  {
    "id": 1,
    "title": "Moletom Never Stop Learning",
    "slug": "moletom-never-stop-learning",
    "pages": 129,
    "image": "/capalivro.png",
    "description": "Moletom fabricado com 88% de algodão e 12% de poliéster.",
    "autor": "By Harper Lee",
    "release":"29/05/2015",
    "category":'teste',
  },
  {
    "id": 2,
    "title": "Moletom AI Side",
    "slug": "moletom-ai-side",
    "pages": 99,
    "image": "/capalivro.png",
    "description": "Moletom fabricado com 88% de algodão e 12% de poliéster.",
    "autor": "By Harper Lee",
    "release":"29/05/2015",
    "category":'teste',
  },
  {
    "id": 3,
    "title": "Camiseta DoWhile 2022",
    "slug": "camiseta-dowhile-2022",
    "pages": 69,
    "image": "/capalivro.png",
    "description": "Camiseta fabricada com 100% de algodão.",
    "autor": "By Harper Lee",
    "release":"29/05/2015",
    "category":'teste',
  }
];
export function addProduct(product: any) {
  otherProducts.push(product);
}

export function removeAccents(query: string) {
  return query.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export default function Home() {
  const searchParams = useSearchParams()

  const queryCourseURL = searchParams.get('book')
  const filteredCourse = queryCourseURL
    ? otherProducts.filter(c =>
        removeAccents(c.title.toLowerCase()).includes(
          removeAccents(queryCourseURL.toLowerCase())
        )
      )
    : otherProducts
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-5 gap-10 mt-10 text-center">
            {filteredCourse.length > 0 ? (
              <>
              {filteredCourse.map((product) => (
                  <Link key={product.id} href={`/book/${product.slug}`} className="p-3 bg-zinc-900 rounded-md hover:bg-zinc-800 cursor-pointer">
                      <div className="flex flex-col items-center mt-4">
                          <Image src="/capalivro.png" alt={product.title} height={200} width={200} />
                          <h1 className="font-medium text-center p-3">{product.title}</h1>
                          <p className="text-center font-light">{product.autor}</p>
                      </div>
                  </Link>
              ))}
              </>
            ) : (
              <p>Livro não encontrado.</p>
            )}
            </div>
            
            <Link href={"/book/newBook"} className="absolute bottom-20 right-20 hover:cursor-pointer hover:text-gray-400">
                <PlusIcon className="size-8"/>
            </Link>
        </div>
    )
}
