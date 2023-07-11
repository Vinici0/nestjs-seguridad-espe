import React from "react";
import { Layout } from "../../components/layouts/Layout";
import {
  EnvelopeOpenIcon,
  MapIcon,
  PaperAirplaneIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const EquipoPage = () => {
  return (
    <>
      <Layout title="Nuestro Equipo">
        <div className="pt-28 pb-20 bg-white">
          <div className="text-center fade-in">
            <h1 className="title mb-4 text-3xl color-gray-light font-bold">
              ¿Quiénes somos?
            </h1>
          </div>
          <section className="mb-10 fade-in">
            <div className="container px-32">
              <p className="leading-relaxed">
                La Universidad de las Fuerzas Armadas ESPE es una institución académica reconocida que se destaca por su excelencia educativa y compromiso con la formación integral de sus estudiantes. En el ámbito de la carrera de Ingeniería en Tecnologías de la Información y Comunicación (ITIN), dos tesistas altamente capacitados han desarrollado una aplicación innovadora para abordar el problema de la inseguridad en la parroquia Luz de América.
              </p>
            </div>
          </section>
          <section className="bg-color-lila py-10 mb-10 fade-in">
            <div className="container px-32 gap-x-0 lg:gap-x-20 flex flex-col lg:flex-row">
              <div className="mb-10 lg:w-1/2 w-full">
                <h2 className="mb-4 font-bold text-center">Nuestra aplicación</h2>
                <p className="leading-relaxed text-justify">
                  En respuesta a la creciente preocupación por la seguridad ciudadana en la parroquia Luz de América, nuestros tesistas de la carrera de ITIN han creado una aplicación diseñada para mejorar la calidad de vida y proporcionar soluciones efectivas. La aplicación aprovecha las últimas tecnologías y está enfocada en brindar un entorno seguro y protegido para los residentes de la comunidad.
                </p>
              </div>
              <div className="lg:w-1/2">
                <h2 className="mb-4 font-bold text-center">Nuestro compromiso</h2>
                <p className="leading-relaxed text-justify">
                  En la Universidad ESPE, como tesistas, nos enorgullece apoyar iniciativas como esta que buscan mejorar la calidad de vida de las comunidades. Hemos trabajado arduamente para desarrollar una aplicación efectiva que contribuya a la seguridad y protección de los residentes de la parroquia Luz de América.
                  ¡Estamos comprometidos en crear un entorno seguro y brindar soluciones innovadoras para enfrentar los desafíos de seguridad en la parroquia Luz de América!
                </p>
              </div>
            </div>
          </section>
          <div className="text-center fade-in">
            <h1 className="title mb-4 text-3xl color-gray-light font-bold">
              Desarrolladores
            </h1>
          </div>
          <section className="pt-10">
            <div className="container px-36 flex flex-col gap-6 lg:flex-row lg:gap-0 justify-center">
              <div className="lg:w-1/2 flex flex-col items-center justify-center">
                <div className="rounded-lg overflow-hidden bg-black shadow-lg" style={{ height: "500px", width: "400px" }}>
                  <img src="/images/majo.jpg" className="object-contain" />
                </div>
                <p className="mt-4">María José Párraga Moreira</p>
              </div>
              <div className="lg:w-1/2 flex flex-col items-center justify-center">
                <div className="rounded-lg overflow-hidden bg-black shadow-lg" style={{ height: "500px", width: "400px" }}>
                  <img src="/images/vinicio.png" className="object-contain" style={{ objectPosition: "50% 50%" }} />
                </div>
                <p className="mt-4">Vinicio Leonardo Borja Tapia</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default EquipoPage;
