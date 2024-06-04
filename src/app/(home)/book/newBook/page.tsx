'use client'
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";import { useRouter } from "next/navigation";
import axios from "axios";

export default function NewBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [pages, setPages] = useState("");
    const [category, setCategory] = useState("");
    const [release, setRelease] = useState("");
    const [description, setDescription] = useState("");


    const router = useRouter()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `https://crud-livros.onrender.com/livro/create`,
                {titulo:title, autor:author, pages:pages, category:category, release:release, description:description}
            );
            console.log("Livro criado com sucesso:", response.data);
            router.push(`/`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex h-[80vh] flex-col gap-5 justify-center items-center text-center">
                <input
                    type="text"
                    placeholder="Título"
                    required
                    className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Autor"
                    required
                    className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Páginas"
                    required
                    className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"
                    onChange={(e) => setPages(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Categoria"
                    required
                    className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"
                    onChange={(e) => setCategory(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Lançamento"
                    required
                    className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg"
                    onChange={(e) => setRelease(e.target.value)}
                />
                <textarea
                    placeholder="Descrição"
                    required
                    className="bg-zinc-800 text-white p-3 rounded-md w-[80%] max-w-lg h-32"
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
