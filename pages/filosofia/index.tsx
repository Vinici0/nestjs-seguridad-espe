import React, {
  RefObject,
  useState,
  useEffect,
  FC,
  useRef,
  PropsWithChildren,
  CSSProperties
} from "react";
import { Layout } from "../../components/layouts/Layout";
import {
  EyeIcon,
  FlagIcon
} from '@heroicons/react/24/outline';
import Image from "next/image";

function useElementOnScreen(ref: RefObject<Element>, rootMargin = "0px") {
  const [isIntersecting, setIsIntersecting] = useState(true);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
}

const AnimateIn: FC<PropsWithChildren<{ from: CSSProperties; to: CSSProperties, time: String }>> = ({ from, to, time, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles: CSSProperties = {
    transition: `${time} ease-in-out`
  };
  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
            ...defaultStyles,
            ...to
          }
          : {
            ...defaultStyles,
            ...from
          }
      }
    >
      {children}
    </div>
  );
};

const FadeIn: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    time="1500ms">
    {children}
  </AnimateIn>
);

const MoveIn: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ transform: "translateY(300px)" }}
    to={{ transform: "translateY(0px)" }}
    time="1000ms">
    {children}
  </AnimateIn>
);

const MoveRight: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ transform: "translateX(300px)" }}
    to={{ transform: "translateX(0px)" }}
    time="1000ms">
    {children}
  </AnimateIn>
);

const Animate = {
  FadeIn,
  MoveIn,
  MoveRight
};

const EquipoPage = () => {
  return (
    <>
      <Layout title="Filosofía">
        <section className="bg-color-white">
          <div className="pt-28">
            <div className="flex flex-col items-center px-6 fade-in relative">
              <Image width={500} height={500} className="object-contain move-in" src="/images/espe.png" alt="espe"/>
              <h1 className="title my-5 z-2">Universidad de las Fuerzas Armadas <span className="text-color-espe">ESPE</span></h1>
            </div>
            <div className="bg-color-lila container py-10 lg:px-32 fade-in">
              <h1 className="mb-4 text-3xl color-gray-light font-bold">
                Filosofía Institucional
              </h1>
              <div className="flex flex-col">
                <div className="text-start">
                  <p>
                    La institución se debe fundamentalmente a la sociedad y Fuerzas Armadas, a ellas orienta su esfuerzo, contribuyendo a la solución de sus necesidades de desarrollo, mediante la formación profesional, técnica y científica, la investigación, planteamiento e implementación de soluciones en el ámbito de sus dominios académicos. Con la búsqueda permanente de la excelencia como institución centenaria y referente en la sociedad, mediante la práctica de los principios: respeto por la dignidad humana, identidad ESPE, excelencia académica; y los valores: disciplina, integridad, liderazgo, creatividad, cohesión y efectividad, en todas sus actividades académicas y administrativas, aplicando métodos y herramientas efectivas para la integración de la docencia, investigación y vinculación con la sociedad.
                  </p>
                  <br />
                  <p>
                    La formación de profesionales se fundamenta en proyectos multidisciplinarios relacionados al paradigma “Smart University” que incluye el desarrollo de una universidad postmoderna con énfasis en la aplicación del gobierno electrónico (e-gobierno), internacionalización y modelo educativo innovador, tendiente a continuar como institución de educación superior de las Fuerzas Armadas, referente en el ámbito nacional e internacional.
                  </p>
                </div>
              </div>
              <h1 className="mt-10 mb-4 text-3xl color-gray-light font-bold">
                Misión
              </h1>
              <div className="flex flex-col">
                <div className="text-start">
                  <p>
                    La Universidad de las Fuerzas Armadas-ESPE forma personas en el campo científico y tecnológico bajo un marco de principios y valores; y, genera  conocimiento transferible para contribuir al progreso del país y Fuerzas Armadas, a través de la docencia, investigación y vinculación con la sociedad.
                  </p>
                </div>
              </div>
            </div>
            <div className="container py-10 lg:px-32 overflow-hidden">
              <h1 className="mb-4 text-3xl color-gray-light font-bold">
                Principios y valores
              </h1>
              <div className="flex justify-center">
                <Animate.FadeIn>
                  <img src="/images/PrincipiosYValoresESPE.png"/>
                </Animate.FadeIn>
              </div>
            </div>
            <div className="bg-gray-100 container py-10 lg:px-32">
              <h1 className="mb-6 text-3xl color-gray-light font-bold">
                Carrera de Ingeniería en tecnología de la información y comunicación
              </h1>
              <div className="flex flex-col lg:flex-row gap-0 lg:gap-10">
                <div className="w-full lg:w-1/2">
                  <Animate.FadeIn>
                    <img src="/images/DOCENTES ESPE.jpg" />
                  </Animate.FadeIn>
                </div>
                <div className="w-full lg:w-1/2">
                  <Animate.FadeIn>
                    <p className="mb-4">
                      El Departamento de Ciencias de la Computación de la Universidad de las Fuerzas Armadas ESPE, se enorgullece de ofrecer la carrera de Ingeniería en Tecnologías de la Información y Comunicación. Nuestra institución brinda una formación académica de excelencia en el ámbito de la tecnología y la informática. Contamos con un equipo docente altamente capacitado y comprometido, que proporciona a los estudiantes una educación integral, enfocada en el desarrollo de habilidades técnicas y analíticas necesarias para enfrentar los desafíos del mundo digital.
                    </p>
                    <p>
                      Mediante un plan de estudios actualizado y orientado a la práctica, los estudiantes de ITIN adquieren conocimientos en áreas fundamentales como programación, bases de datos, redes de comunicación, seguridad informática, inteligencia artificial y más. Fomentamos el espíritu emprendedor y la innovación, alentando la participación en proyectos de investigación y la colaboración con la industria.
                    </p>
                  </Animate.FadeIn>
                </div>
              </div>
            </div>
            <div className="bg-color-lila container py-10 lg:px-32 flex flex-col lg:flex-row gap-x-0 lg:gap-x-20">
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center">
                  <FlagIcon className="h-14 w-14 text-color-secundario mb-4" aria-hidden="true" />
                  <h1 className="mb-4 text-3xl color-gray-light font-bold">
                    Misión
                  </h1>
                </div>
                <div className="flex flex-col w-full">
                  <div className="text-justify">
                    <p>
                      Formar académicos, profesionales e investigadores de excelencia, creativos, humanistas, con capacidad de liderazgo, pensamiento crítico y alta conciencia ciudadana; generar, aplicar y difundir el conocimiento y, proporcionar e implementar alternativas de solución a los problemas del país, acordes con el plan Nacional de Desarrollo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center">
                  <EyeIcon className="h-14 w-14 text-color-secundario mb-4" aria-hidden="true" />
                  <h1 className="mt-10 mb-4 lg:mt-0 text-3xl color-gray-light font-bold">
                    Visión
                  </h1>
                </div>
                <div className="flex flex-col">
                  <div className="text-justify">
                    <p>
                      Líder en la gestión del conocimiento y de la tecnología en el Sistema Nacional de Educación Superior, con prestigio Internacional y referente de práctica de valores éticos, cívicos y de servicio a la sociedad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EquipoPage;

