import { HiDownload } from 'react-icons/hi'

//Sessão Banner
export function Hero() { // Exporte com chaves
    return (
      <section className="bg-gradient-to-tr from-black to-gray-900 text-white ">
  
        <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row">
            <div className='basis-1/2'>
            <h1 className="mb-6 text-center md:text-left">
            <span className="font-handwriting block text-3xl text-center md:text-left">Olá, me chamo</span>
            <span className="font-headline text-5xl font-semibold" >Wellington </span>
            <span className="font-headline text-5xl font-light text-blue-400" >Rodrigues</span>
            </h1>
            <h2 className="font-semibold flex items-center gap-2 text-center md:text-left">
                <div className="h-1 w-12 rounded-full bg-blue-800 " />
                Consultor especialista em LGPD, Desenvolvedor (C#, React.js, Back-end, Front-end)
            </h2>

            <p className="text-gray-400  my-6 text-center md:text-left">
                Sou apaixonado pelo o que faço. Transformo idéias em sites e aplicações web com foco na privacidade de dados, de forma usual e preservando a experiência do meu cliente
            </p>

            <div className="flex items-center justify-center md:justify-start gap-2">
                <a href="#" className="underline font-bold text-white">Fale Comigo</a>
                <span className="italic text-gray-400"> ou</span>
                <a href="#" className="button text-gray-600 
                hover:text-gray-900 flex items-center gap-2">
                    <HiDownload />
                    Baixe meu CV</a>
            </div>
        </div>
        <div className='basis-1/2'></div>
                

        </div>
        
      </section>
    )
  }
  
  
  