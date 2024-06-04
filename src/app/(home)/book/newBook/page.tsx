'use client'
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { addProduct } from "../../page";
import { useRouter } from "next/navigation";

export default function NewBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [pages, setPages] = useState("");
    const [category, setCategory] = useState("");
    const [release, setRelease] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter()

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const newProduct = {
            id: Math.random(),
            title,
            slug: title.toLowerCase().replace(/ /g, "-"),
            pages: pages,
            image: "/capalivro.png",
            description: description,
            autor: author,
            release: release,
            category:category
        };

        addProduct(newProduct);
        router.push("/")
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex h-[80vh] flex-col gap-5 justify-center items-center text-center">
                <input
                    type="text"
                    placeholder="Título"
                    required
                    className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Autor"
                    required
                    className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Páginas"
                    required
                    className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Categoria"
                    required
                    className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Lançamento"
                    required
                    className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"
                    value={release}
                    onChange={(e) => setRelease(e.target.value)}
                />
                <textarea
                    placeholder="Descrição"
                    required
                    className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg h-32"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-900 text-white p-3 rounded-md w-[80%] max-w-lg hover:bg-blue-700"
                >
                    Cadastrar
                </button>
            </div>
            <Link href={"/"} className="absolute bottom-20 left-20 hover:cursor-pointer hover:text-gray-400">
                <ArrowLeft className="w-8 h-8"/>
            </Link>
        </form>
    );
}
