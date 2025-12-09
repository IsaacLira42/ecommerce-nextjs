import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full mt-20 bg-emerald-900 text-lime-200 py-8 md:py-12 rounded-t-2xl">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center space-y-6">
                    {/* Texto principal */}
                    <div className="text-center space-y-2">
                        <h3 className="text-xl font-bold tracking-tight">
                            Vamos conversar?
                        </h3>
                        <p className="text-lime-200/80 max-w-md">
                            Estou disponível para oportunidades e projetos interessantes.
                        </p>
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex space-x-6">
                        <Link
                            href="https://linkedin.com/in/IsaacLira42"
                            target="_blank"
                            className="bg-lime-200 text-emerald-900 hover:bg-lime-400 transition-colors p-3 rounded-full hover:scale-110 transform duration-200"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </Link>

                        <Link
                            href="https://github.com/IsaacLira42"
                            target="_blank"
                            className="bg-lime-200 text-emerald-900 hover:bg-lime-400 transition-colors p-3 rounded-full hover:scale-110 transform duration-200"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </Link>

                        <Link
                            href="mailto:isaaclira422@gmail.com"
                            className="bg-lime-200 text-emerald-900 hover:bg-lime-400 transition-colors p-3 rounded-full hover:scale-110 transform duration-200"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </Link>
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-lime-200/60 text-sm">
                        <p>© {new Date().getFullYear()} Isaac Lira. Desenvolvido para demonstração técnica.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}