import { ProductList } from "@/components/products/ProductList";

const Produtos = () => {
	return (
		<div className="px-4 lg:px-24 mt-4">
			<ProductList title={"Produtos"} showAll={true} />
		</div>
	);
};

export default Produtos;
