import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Conheça as Naves do Universo de Star Wars</h1>

      <p>
        Projeto desenvolvido durante o Exercício 3 do módulo de Next.js da trilha de Frontend da OneBitCode.
      </p>
      <p>
        Tecnologias utilizadas
      </p>
      <ul>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>Vercel</li>
      </ul>
      <p>
        <Link className="btn" href={"/spaceships"}>Ver Todas</Link>
      </p>
    </main>
  );
}
