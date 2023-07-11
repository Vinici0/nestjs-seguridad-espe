import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-color-primario-dark shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row gap-6 lg:gap-0">
            <div className='flex gap-6'>             
              <Link href="https://espe.edu.ec" className="flex items-center sm:mb-0">
                <Image width={450} height={10} src="/images/ESPEtransp.png" className="mr-3" alt="ESPE Logo"/>
              </Link>
            </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            <Link href="/" className="flex items-center mb-4 sm:mb-0">
                <Image width={80} height={80} src="/images/SE SURVEY.svg" className="mr-5 rounded-full" alt="ESPE Logo" />
              </Link>
              <li>
                <Link href="/equipo" className="mr-4 hover:underline md:mr-6 ">Nuestro Equipo</Link>
              </li>
              <li>
                <Link href="/filosofia" className="mr-4 hover:underline md:mr-6">Filosofia</Link>
              </li>
              <li>
                <Link href="/reports" className="mr-4 hover:underline md:mr-6 ">Reportes</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contacto</Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-white sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <span className="text-sm text-white dark:text-gray-400">
                Vía Santo Domingo - Via Quevedo Km. 24
              </span>
              <span className="text-sm text-white dark:text-gray-400">
                Hda. Zoila Luz Avenida Quevedo 3-703-914, Santo Domingo 230153
              </span>
              <span className="text-sm text-white dark:text-gray-400">
                Santo Domingo - Ecuador
              </span>
              <span className="text-sm text-white dark:text-gray-400">
                (593)22722-246
              </span>
              <span className="text-sm text-white dark:text-gray-400">
                santodomingo@espe.edu.ec
              </span>
            </div>
            <div className='flex flex-col items-end justify-end'>
              <span className="block text-sm text-white dark:text-gray-400">María José Párraga Moreira y Vinicio Leonardo Borja Tapia</span>
              <span className="block text-sm text-white dark:text-gray-400">© 2023 Todos los derechos reservados.</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
