import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next"; // Importação necessária

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  details: string;
}

// Lista de projetos (simulação de banco de dados)
const projects: Project[] = [
  {
    id: 1,
    title: "DevBills-Controle Financeiro",
    description: "Ver no Netlify clique aqui no card.",
    imageUrl: "/assets/Controle-dev.png",
    link: "https://controles-financeiros-devbills.netlify.app/",
    details: "Detalhes de uma aplicação voltada para controle financeiro, que permite gerenciar receitas e despesas de forma organizada e intuitiva. Este projeto foi desenvolvido usando Backend: Node.js, Express, MongoDB Atlas e TypeScript, Frontend: React.js, Styled Components, Context API e TypeScript. O foco foi criar uma interface de usuário amigável e responsiva, proporcionando uma experiência de navegação intuitiva.",
  },
  {
    id: 2,
    title: "DevBurguer-Interface",
    description: "Descrição breve do Projeto 2.",
    imageUrl: "/assets/Capa-home-devburger.png",
    link: "https://github.com/alx-8914/devburger-interface",
    details: "Tratar-se de uma aplicação de uma Hamburgueria, onde o usuários comum se cadastra e faz seu login, mostrando os produtos em Home, Cardápio, de modo intuitivo escolhendo cada item em forma de carrossel e todo tipo de categorias entre as paginas",
  },
  {
    id: 3,
    title: "Clone Twitter",
    description: "Clone Twitter",
    imageUrl: "/assets/Clone tiwtter.png",
    link: "https://clone-tiwtters.netlify.app/",
    details: "Clone Twitter, uma rede social que permite aos usuários compartilhar pensamentos, ideias e experiências em formato de postagens curtas. Com uma interface intuitiva e recursos de interação, os usuários podem seguir outros usuários, curtir e comentar postagens, criando uma comunidade online dinâmica e colaborativa. Tecnologias Utilizadas Front-end: React.js, JSX, CSS Tailwind, Back-end: Javascript, Node.js @Vite; Outras Ferramentas: CryptoJS (para geração de hashes MD5), e Git/GitHub para versionamento do projeto.",
  },
  {
    id: 4,
    title: "Flappy-Bird",
    description: "Flappy-Bird-Game",
    imageUrl: "/assets/FlappyBirdGmae.png",
    link: "https://game-project-flappybird.netlify.app/",
    details: "Flappy Bird é um jogo clássico de arcade desenvolvido por Dong Nguyen em 2013. O objetivo do jogo é controlar um pássaro voando através de tubos verticais, evitando colidir com eles. O jogo é conhecido por sua simplicidade e jogabilidade desafiadora. Tecnologias Utilizadas: HTML5, CSS3, JavaScript.",

  },
  {
    id: 5,
    title: "Dev-Movies",
    description: "Dev-Movies-Interface",
    imageUrl: "/assets/Capa-dev-movies.png",
    link: "https://dev-movies-react.netlify.app/",
    details: "Dev-Movies-Interface, uma aplicação web que permite aos usuários explorar uma ampla variedade de filmes e séries. Com uma interface intuitiva e recursos de busca, os usuários podem pesquisar filmes por título, gênero ou ano de lançamento. Tecnologias Utilizadas: React.js, CSS3, JavaScript, API The Movie Database (TMDB).",
  },
  {
    id: 6,
    title: "Show-Cars",
    description: "Show-Cars-Interface",
    imageUrl: "/assets/Capa-ferrari.png",
    link: "https://fp-sellection-cars.netlify.app/",
    details: "Site com Aniamação de Carros, com uma seleção de carros de luxo, incluindo modelos de alta performance e design elegante. Tecnologias Utilizadas: HTML5, CSS3 e JavaScript.",
  },
];

// 🔹 Substitua as definições de tipo por:
type ParamsType = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ParamsType): Promise<Metadata>  {
  const project = projects.find((p) => p.id === Number(params.id));

  return {
    title: project?.title || "Projeto não encontrado",
    description: project?.details.substring(0, 160) || "Nenhum detalhe disponível.",
  };
}
export default function ProjectDetailsPage({ params }: ParamsType) {
  const projectId = Number(params.id);

  if (isNaN(projectId)) {
    return (
      <div className="bg-zinc-800 text-white min-h-screen flex items-center justify-center">
        <p>ID inválido</p>
      </div>
    );
  }

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="bg-zinc-800 text-white min-h-screen flex items-center justify-center">
        <p>Projeto não encontrado</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 text-white min-h-screen p-8">
      <div className="max-w-xl mx-auto">
        {/* Botão de voltar */}
        <Link
          href="/dashboard"
          className="inline-block mb-8 px-6 py-2 bg-gray-600 text-white rounded hover:bg-blue-500 transition-colors duration-200 hover:scale-105 transition-transform duration-500"
        >
          Voltar
        </Link>

        <h1 className="text-2xl mb-8 font-bold mt-5 ">
          Detalhes do <span className="text-blue-500">Projeto</span>
        </h1>

        {/* Imagem do projeto */}
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={900}
          height={900}
          className="w-full h-64 object-cover rounded-lg"
        />

        {/* Título do projeto */}
        <h1 className="text-2xl font-bold mt-8">{project.title}</h1>

        {/* Descrição detalhada do projeto */}
        <p className="text-gray-300 mt-4">{project.details}</p>

        {/* Botão para visitar o projeto */}
        <a
          href={project.link}
          className="inline-block mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-400 transition-colors duration-200 hover:bg-blue-400 hover:scale-105 transition-transform duration-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar Projeto
        </a>
      </div>
    </div>
  );
}

export type PageProps = ParamsType