
const calculateAge = (birthdate: string) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  };
  
  // Exemplo de uso:
  const dateOfBirth = '1984-11-15'; // Substitua esta data pela data de nascimento desejada
  const age = calculateAge(dateOfBirth);
  console.log(`A idade é: ${age} anos`);

  
export function About(){
    
      
    return (
        
        <section className="container mx-auto my-4 max-w-5xl p-4">
            <div className="relative p-4 text-center">
                <h2 className="relative text-blue-900  font-bold z-10">
                    <span className="mr-2 font-headline text-3xl">Sobre</span>
                    <span className="font-handwriting text-4xl">Mim</span>
                </h2>
                <p className="relative text-sm text-gray-600">
                    Tenho mais de 5 mil horas em projetos de adequação a LGPD e 20 anos de experiência na área da de programação.
                </p>
                <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40"></div>
            </div>
            <div className="relative mx-auto mt-20 max-w-lg">
                <div className="relative w-full founded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48">
                    <div className="relative h-full - w-full rounded-lg bg-gray-50 p-4">
                        <p className="font-handwriting text-lg font-bold">Olá,</p>
                        <p>
                            <span className="mr-1">Meu nome é</span>
                            <span className="font-headline font-bold uppercase text-blue-900">Wellington</span>
                        </p>
                        <table className="mt-4 w-full text-sm">
                            <tbody>
                                <tr>
                                <td className="font-headline font-bold uppercase text-blue-900">
                                    Idade:
                                </td>
                                <td>{age}</td>
                                </tr>
                                <tr>
                                <td className="font-headline font-bold uppercase text-blue-900">
                                    Celular:
                                </td>
                                <td>
                                    <a
                                    href="tel:+5562994208742"
                                    className="underline hover:text-blue-800"
                                    >
                                    +55 62 9.9420-8742
                                    </a>
                                </td>
                                </tr>
                                <tr>
                                <td className="font-headline font-bold uppercase text-blue-900">
                                    Email:
                                </td>
                                <td>
                                    <a
                                    href="mailto:joao-test@testemail.com"
                                    className="underline hover:text-blue-800"
                                    >
                                    wrsilva.violao@gmail.com
                                    </a>
                                </td>
                                </tr>
                                <tr>
                                <td className="font-headline font-bold uppercase text-blue-900">
                                    Endereço:
                                </td>
                                <td>
                                    <a
                                    href="https://goo.gl/maps/vhSpH3RC2dBnYFMD6"
                                    target="_blank"
                                    className="underline hover:text-blue-800"
                                    >
                                    Goiânia - GO
                                    </a>
                                </td>
                                </tr>
                                <tr>
                                <td className="font-headline font-bold uppercase text-blue-900">
                                    Disponível:
                                </td>
                                <td>
                                    <span className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                    </span>
                                </td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                    <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url(https://inovalgpd.com.br/wp-content/uploads/2022/08/SocioJ.webp)] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56">

                        </div>
                    
                </div>
            </div>
        </section>
    )
}

