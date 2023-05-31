import { SlArrowDown } from 'react-icons/sl'
import { AiFillLinkedin, AiFillGithub, AiFillFilePdf } from 'react-icons/ai'


import light from './img/pngegg.png'
import project1 from './img/4.jpeg'
import project2 from './img/ss.png'

function Home() {


  return (
    <>
    <title>Matheus Portfolio</title>
      <section className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 ">
        <div className='h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl  relative'>
          <div className='absolute -top-20 left-0 right-0 flex justify-center  text-gray-50' >
            <img src={light} width={200} />
          </div>
          <div className="w-full grid grid-cols-2">

            <div className="md:col-start-1 md:col-span-1 col-span-2">
              <p className="font-bold uppercase md:font-bold md:text-2xl md:text-gray-200">oi 👋 eu sou o <span className='text-blue-600'>matheus</span></p>
            </div>

            <div className="col-span-2 tracking-tighter">
              <div className='flex flex-row md:items-baseline'>
                <h1 className="font-black uppercase text-4xl md:text-9xl text-slate-950">REACT </h1>
                <div className='flex flex-row ml-2 md:space-x-3 space-x-1 md:w-72 w-28 text-blue-600'>
                  <a href='#' className='hover:bg-blue-100 hover:border-4 border-blue-300 rounded-xl'><AiFillLinkedin className='cursor-pointer hover:w-5/6 mx-auto ease-in-out duration-300' size={'100%'} /></a>
                  <a href='#' className='hover:bg-blue-100 hover:border-4 border-blue-300 rounded-xl'><AiFillGithub className='cursor-pointer hover:w-5/6 mx-auto ease-in-out duration-300' size={'100%'} /></a>
                  <a href='#' className='hover:bg-blue-100 hover:border-4 border-blue-300 rounded-xl'><AiFillFilePdf className='cursor-pointer hover:w-5/6 mx-auto ease-in-out duration-300' size={'100%'} /></a>
                </div>
              </div>
              <h1 className="font-black uppercase text-4xl md:text-9xl  text-slate-950">DEVELOPER </h1>
            </div>

            <div className=" col-start-2">
              <p className="font-semibold  text-xs md:text-lg text-start  text-slate-950">Tenho 20 anos, sou desenvolvedor fullstack com 1 ano de experiência trabalhando como freelancer.</p>
            </div>

          </div>
          <div className='absolute bottom-0 left-0 right-0 flex justify-center animate-bounce' >
            <SlArrowDown color='black' size={30} />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:pb-6">
          {/* Projeto 1 */}
          <div className=" rounded-lg p-4">
            <img
              src={project1}
              alt="Imagem do projeto"
              className="w-full h-60 object-cover rounded-2xl mb-4 object-top"
            />
            <h3 className="text-xl font-bold mb-2">App para organização de tarefas</h3>
            <p className="text-gray-600 text-sm">
              App com autenticação de usuários desenvolvido com <span className='font-medium'>React-Typescript, Expo, PostgreSQL</span>
            </p>
            <div className='mt-2  font-normal
               text-white justify-end flex flex-row '>
            <a href='#' className='bg-gray-700 px-4 py-2 rounded-xl '>Ver Repositório</a>
            </div>
          </div>

          {/* Projeto 2 */}
          <div className=" rounded-lg p-4">
            <img
              src={project2}
              alt="Imagem do projeto"
              className="w-full h-60 object-cover rounded-2xl mb-4 object-top"
            />
            <h3 className="text-xl font-bold mb-2">Plataforma de gerenciamento de simulador para empresa</h3>
            <p className="text-gray-600 text-sm">
              Website com criação de cookies e autenticação de usuários desenvolvido com <span className='font-medium'>React-Typescript, NEXT.js, PostgreSQL, Tailwind</span>
            </p>
            <div className='mt-2  font-normal
               text-white justify-end flex flex-row '>
            <a href='#' className='bg-gray-700 px-4 py-2 rounded-xl '>Ver Repositório</a>
            </div>
          </div>

          {/* Projeto 3 */}
          <div className=" rounded-lg p-4">
            <img
              src={project1}
              alt="Imagem do projeto"
              className="w-full h-60 object-cover object-top rounded-2xl mb-4"
            />
            <h3 className="text-xl font-bold mb-2">App para organização de tarefas</h3>
            <p className="text-gray-600 text-sm">
              App com login e autenticação de usuários desenvolvido com <span className='font-medium'>React-Typescript, Expo, PostgreSQL</span>
            </p>
            <div className='mt-2  font-normal
               text-white justify-end flex flex-row '>
            <a href='#' className='bg-gray-700 px-4 py-2 rounded-xl '>Ver Repositório</a>
            </div>
          </div>

          
        </div>
      </div>
      </section>

      


      <section className='bg-gray-800 text-white'>
        {/* https://formspree.io/forms/mwkjjdrj/integration */}
        <div className=' flex flex-col justify-center  min-h-screen'>
          <div className='flex-1 flex flex-col justify-center items-center'>
            <h2 className='text-2xl md:text-4xl font-bold'>Entrar em Contato</h2>
            <h4 className='text-xs md:text-sm font-light text-center'>Sinta-se a vontade para enviar uma mensagem 😁</h4>
            <form className='flex flex-col gap-4 mt-12 px-10 lg:mt-16 min-w-full lg:min-w-[500px]'>
              <input id='name' name='name' required maxLength={32} type='text' placeholder='Seu nome' className=' sm:text-sm border bg-gray-700 border-gray-600 rounded-lg placeholder-gray-400 text-gray-200 focus:ring-blue-500 focus:border-blue-500 px-3 py-3' />
              <input id='email' name='email' required maxLength={32} type='text' placeholder='Seu e-mail' className='sm:text-sm border bg-gray-700 border-gray-600 placeholder-gray-400 rounded-lg text-gray-200 focus:ring-blue-500 focus:border-blue-500  px-3 py-3' />
              <textarea id='message' name='message' required maxLength={256} placeholder='Mensagem' className=' sm:text-sm bg-gray-700 text-gray-200 border-gray-600 placeholder-gray-400  border rounded-3xl px-8 py-6 min-h-[16em]' />
              <div className='text-center mt-8'>
                <button type='submit' className='bg-white text-black rounded-3xl px-8 py-2'>Enviar</button>
              </div>
            </form>
          </div>
        </div>

      </section>

    </>
  );
}

export default Home;
