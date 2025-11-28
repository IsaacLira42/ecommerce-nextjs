import Link from "next/link";

export function Header() {
	return (
		<header className="p-4">
			<div className="max-w-screen-lg mx-auto flex justify-between items-center">
				<Link href="/" className="text-3xl text-lime-400 font-bold">
					Lira Shop
				</Link>
				<nav>
					<ul className="flex space-x-6 text-emerald-900">
						<li>
							<Link href="/" className="hover:text-lime-400 transition-colors">
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/products"
								className="hover:text-lime-400 transition-colors"
							>
								Produtos
							</Link>
						</li>
						<li>
							<Link
								href="/cart"
								className="hover:text-lime-400 transition-colors"
							>
								Carrinho
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
