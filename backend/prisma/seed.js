const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    await prisma.product.createMany({
        data: [
            {
                name: "Camisa Slim",
                price: 59.9,
                imageUrl:
                    "https://http2.mlstatic.com/D_NQ_NP_2X_733607-MLB93873219604_102025-F-camisa-slim-fit-social-eterno-masculina-gola-padre-lisa.webp",
            },
            {
                name: "Chinelo Nuvem",
                price: 35.9,
                imageUrl:
                    "https://http2.mlstatic.com/D_NQ_NP_2X_808178-MLB49211847561_022022-F-chinelo-nuvem-ergonmico-unissex-slide-flexivel-conforto.webp",
            },
            {
                name: "Tenis Masculino",
                price: 199.9,
                imageUrl:
                    "https://http2.mlstatic.com/D_NQ_NP_2X_811957-MLB52365574939_112022-F-tenis-masculino-confortavelacademiacrossfit-relogio.webp",
            },
            {
                name: "Boné NY Yankees",
                price: 99.9,
                imageUrl:
                    "https://http2.mlstatic.com/D_NQ_NP_677587-MLB85252608017_052025-O-bone-ny-new-york-yankees-unissex-blogueira-fito-regulavel.webp",
            },
            {
                name: "Mochila Adventure",
                price: 149.9,
                imageUrl: "https://http2.mlstatic.com/D_Q_NP_879694-MLB93915373445_102025-B.webp",
            },
            {
                name: "Relógio Digital Sport",
                price: 229.9,
                imageUrl:
                    "https://http2.mlstatic.com/D_Q_NP_907810-MLB82838820225_032025-B-relogio-masculino-skmei-2396-prova-dagua-sport-digital-shock.webp",
            },
            {
                name: "Camiseta Casual",
                price: 49.9,
                imageUrl:
                    "https://http2.mlstatic.com/D_Q_NP_846863-MLB90750992200_082025-B-camiseta-masculina-basica-100-algodo-lisa-slim-fit-atacado.webp",
            },
            {
                name: "Jaqueta Impermeável",
                price: 299.9,
                imageUrl:
                    "https://http2.mlstatic.com/D_Q_NP_819476-MLB96066244541_102025-B-japona-termica-25-cmara-fria-verde-impermeavel-ca-43758.webp",
            },
            {
                name: "Calça Jeans",
                price: 119.9,
                imageUrl:
                    "https://http2.mlstatic.com/D_NQ_NP_2X_925439-MLB95522562902_102025-F-calca-masculina-sarja-premium-esporte-fino-bolso-faca-lycra.webp",
            },
            {
                name: "Óculos de Sol",
                price: 89.9,
                imageUrl:
                    "https://http2.mlstatic.com/D_Q_NP_705414-MLB93488150841_092025-B-oculos-de-sol-quadrado-preto-fosco-unissex-proteco-uv400.webp",
            },
            {
                name: "Meia Esportiva",
                price: 19.9,
                imageUrl:
                    "https://http2.mlstatic.com/D_Q_NP_679483-MLB78773753324_092024-B-meia-lupo-dry-fit-academia-corrida-cano-medio-poliamida-kit3.webp",
            },
            {
                name: "Tênis Feminino",
                price: 179.9,
                imageUrl:
                    "https://http2.mlstatic.com/D_Q_NP_978523-MLB82486799752_022025-B-tnis-casual-academia-feminino-e-masculino-skate-sneakers.webp",
            },
            {
                name: "Vestido Floral",
                price: 129.9,
                imageUrl:
                    "https://http2.mlstatic.com/D_Q_NP_880364-MLB89987981650_082025-B-vestido-midi-alcinha-amarraco-estilo-camponesa-floral-moda.webp",
            },
            {
                name: "Bolsa de Couro",
                price: 249.9,
                imageUrl:
                    "https://http2.mlstatic.com/D_Q_NP_899738-MLA95393464128_102025-B.webp",
            },
            {
                name: "Carteira William",
                price: 79.9,
                imageUrl:
                    "https://http2.mlstatic.com/D_Q_NP_678870-MLA95700033604_102025-B.webp",
            },
            {
                name: "Relógio Casio MTP-B145D-3A",
                price: 199.9,
                imageUrl:
                    "https://http2.mlstatic.com/D_NQ_NP_2X_946625-MLU77386295429_072024-F.webp",
            },
            {
                name: "Sandália Feminina",
                price: 59.9,
                imageUrl:
                    "https://http2.mlstatic.com/D_Q_NP_827843-MLB83711509811_042025-B-chinelo-sandalia-coca-cola-feminino-original-varios-modelos.webp",
            },
        ],
        skipDuplicates: true,
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
