import Image from "next/image";
import React, {
  RefObject,
  useState,
  useEffect,
  FC,
  useRef,
  PropsWithChildren,
  CSSProperties
} from "react";
import {
  DocumentCheckIcon,
  UsersIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ChatBubbleBottomCenterIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import Link from "next/link";

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

const AnimateIn: FC<PropsWithChildren<{ from: CSSProperties; to: CSSProperties, time: Number }>> = ({ from, to, time, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles: CSSProperties = {
    transition: `${time}ms ease-in-out`
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
    time={1500}>
    {children}
  </AnimateIn>
);

const FadeUp: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}
    time={1500}
  >
    {children}
  </AnimateIn>
);

const ScaleIn: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn from={{ scale: "0" }} to={{ scale: "1" }} time={100}>
    {children}
  </AnimateIn>
);

const MoveIn: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ transform: "translateY(300px)" }}
    to={{ transform: "translateY(0px)" }}
    time={1000}>
    {children}
  </AnimateIn>
);

const MoveRight: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ transform: "translateX(300px)" }}
    to={{ transform: "translateX(0px)" }}
    time={1000}>
    {children}
  </AnimateIn>
);

const Animate = {
  FadeIn,
  FadeUp,
  ScaleIn,
  MoveIn,
  MoveRight
};

const HomePage = () => {
  return (
    <>
      <div className="flex h-full w-full flex-col">
        <section className="relative w-full h-2/3 bg-white flex justify-center align-middle">
          <div className="flex h-full w-full relative items-center mt-32 mb-16">
            <div className="container lg:px-32">
              <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="w-full lg:w-1/2 px-5 h-full">
                  <Animate.FadeUp>
                    <div className="bg-gray-100 rounded-lg p-8 w-full md:text-left md:pr-10 shadow-lg fade-in">
                      <h1 className="title mb-4 text-3xl color-gray-light font-bold" >
                        Por una comunidad segura
                      </h1>
                      <p className="leading-relaxed mb-6" style={{ textAlign: "justify" }}>
                        Donde las personas se protegen mutuamente, se apoyan y se preocupan por el bienestar de todos.
                        Únete a nuestra aplicación y forma parte de Seguridad ESPE. Juntos, construyamos una comunidad más segura.
                      </p>
                      <p className="leading-relaxed mb-10" style={{ textAlign: "center" }}>
                        !Descarga la aplicación!
                      </p>
                      <div className="flex flex-row justify-center items-center space-x-4 mt-4">
                        {/* agregar bordes al rededor */}
                        <Link
                          href={"#"}
                          className="flex flex-row justify-center items-center space-x-2   border-2 border-solid border-color-gray rounded-lg p-2 w-44 hover:border-color-secondary hover:scale-110  hover:bg-color-secondary hover:text-white duration-200 ease-in"
                        >
                          <div>
                            <Image
                              src="/images/google-play-logo.svg"
                              width={27}
                              height={27}
                              alt="hero"
                            />
                          </div>
                          <p className="text-sm font-bold">GOOGLE PLAY</p>
                        </Link>
                        <Link
                          href={"#"}
                          className="flex flex-row justify-center items-center space-x-2  border-2 border-solid border-color-gray rounded-lg p-2 w-44  hover:border-color-secondary hover:scale-110  hover:bg-color-secondary hover:text-white duration-200 ease-in"
                        >
                          <div>
                            <Image
                              src="/images/icons8-apple-logo.svg"
                              width={30}
                              height={30}
                              alt="hero"
                            />
                          </div>
                          <p className="text-sm font-bold">APP STORE</p>
                        </Link>
                      </div>
                    </div>
                  </Animate.FadeUp>
                </div>
                <div className="w-full lg:w-1/2 h-full overflow-hidden">
                  <Animate.MoveIn>
                    <div className="flex h-full justify-center">
                      <Image src="/images/phone2.png" width={500} height={500} className="object-contain move-in" alt="logo" />
                    </div>
                  </Animate.MoveIn>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-color-lila pt-16">
          <div className="flex flex-col w-full overflow-hidden">
            <Animate.FadeIn>
              <div className="text-center mb-12">
                <h1 className="text-center title">Tu solución para la protección ciudadana</h1>
              </div>
              <div className="container px-32 flex justify-center mb-12">
                <video controls style={{ maxWidth: "700px", height: "auto" }}>
                  <source src="/images/SeguridadESPE-03.mp4" type="video/mp4" />
                  Tu navegador no admite el elemento de video.
                </video>
              </div>
            </Animate.FadeIn>
            <Animate.FadeIn>
              <div className="text-center mb-10">
                <h1 className="text-center title mb-2">Empieza ya!</h1>
                <span className="text-center">Solo necesitas descargar la aplicación</span>
              </div>
            </Animate.FadeIn>
            <Animate.MoveIn>
              <div className="w-full flex flex-col justify-center gap-y-10 lg:gap-y-0 items-center lg:flex-row">
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end overflow-hidden">
                  <Image width={500} height={500} src="/images/phone3.png" className="move-in" alt="phone3" />
                </div>
                <div className="w-full lg:w-1/2 h-full flex items-center lg:items-end pb-16 overflow-hidden">
                  <div className="text-center h-full w-full lg:text-start move-in">
                    <h1 className="title mb-10">¿Cómo funciona?</h1>
                    <ul>
                      <li className="mb-8">
                        <span className="bg-gray-100 px-6 py-3 rounded-full mr-3 text-color-secundario font-bold text-2xl">1</span>
                        <span className="text-2xl">Descarga la aplicación Seguridad ESPE</span>
                      </li>
                      <li className="mb-8">
                        <span className="bg-gray-100 px-5 py-3 rounded-full mr-3 text-color-secundario font-bold text-2xl">2</span>
                        <span className="text-2xl">Realiza un reporte y publícalo</span>
                      </li>
                      <li className="mb-8">
                        <span className="bg-gray-100 px-5 py-3 rounded-full mr-3 text-color-secundario font-bold text-2xl">3</span>
                        <span className="text-2xl">Revisa el reporte publicado en noticias</span>
                      </li>
                      <li className="mb-8">
                        <span className="bg-gray-100 px-5 py-3 rounded-full mr-3 text-color-secundario font-bold text-2xl">4</span>
                        <span className="text-2xl">Crea grupos personalizados</span>
                      </li>
                      <li>
                        <span className="bg-gray-100 px-5 py-3 rounded-full mr-3 text-color-secundario font-bold text-2xl">5</span>
                        <span className="text-2xl">Agrega tus lugares más frecuentes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Animate.MoveIn>
          </div>
        </section>

        <section className="bg-color-primary">
          <div className="container px-32 py-20 text-center">
            <Animate.FadeIn>
              <div className="mb-16">
                <h1 className="mb-14 title">
                  Características aplicación móvil
                </h1>
                <div className="w-full flex flex-col gap-x-0 lg:flex-row lg:gap-x-10">
                  <div className="flex flex-col w-full lg:w-1/5">
                    <div className="mb-4 flex justify-center">
                      <DocumentCheckIcon className="h-14 w-14 text-color-secundario" aria-hidden="true" />
                    </div>
                    <div className="text-justify px-2">
                      <span>
                        Facilita la realización de reportes en tiempo real, adjuntando descripción, foto y ubicación del suceso.                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/5">
                    <div className="mb-4 flex justify-center">
                      <ExclamationTriangleIcon className="h-14 w-14 text-color-secundario" aria-hidden="true" />
                    </div>
                    <div className="text-justify px-2">
                      <span>
                        Incorpora un botón de enviar ayuda Send Out Soccour (SOS) en la interfaz principal.                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/5">
                    <div className="mb-4 flex justify-center">
                      <InformationCircleIcon className="h-14 w-14 text-color-secundario" aria-hidden="true" />
                    </div>
                    <div className="text-justify px-2">
                      <span>
                        Ofrece una sección de noticias que muestra las diferentes emergencias que ocurren a diario.
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/5">
                    <div className="mb-4 flex justify-center">
                      <ChatBubbleBottomCenterIcon className="h-14 w-14 text-color-secundario" aria-hidden="true" />
                    </div>
                    <div className="text-justify px-2">
                      <span>
                        Permite crear grupos personalizados para comunicarse mediante mensajes de texto.                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/5">
                    <div className="mb-4 flex justify-center">
                      <UsersIcon className="h-14 w-14 text-color-secundario" aria-hidden="true" />
                    </div>
                    <div className="text-justify px-2">
                      <span>
                        Permite añadir contactos de emergencia en caso de situaciones urgentes.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Animate.FadeIn>
            <Animate.FadeIn>
              <div>
                <h1 className="title mb-14">
                  Impactos esperados de la aplicación
                </h1>
                <div className="w-full flex flex-col lg:flex-row gap-x-0 lg:gap-x-10">
                  <div className="flex flex-col w-full lg:w-1/4">
                    <div className="mb-4 flex justify-center">
                      <InformationCircleIcon className="h-14 w-14 text-color-secundario" aria-hidden="true" />
                    </div>
                    <div className="text-justify px-2">
                      <span>
                        Lograr mantener a la comunidad informada a diario de los diferentes tipos de emergencias que ocurren regularmente.​                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/4">
                    <div className="mb-4 flex justify-center">
                      <ChartBarIcon className="h-14 w-14 text-color-secundario" aria-hidden="true" />
                    </div>
                    <div className="text-justify px-2">
                      <span>
                        Ser capaz de enviar a la comunidad reportes estadísticos de seguridad relevantes, que incluyen información sobre las emergencias más frecuentes y sectores con mayor incidencia.                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/4">
                    <div className="mb-4 flex justify-center">
                      <ChatBubbleBottomCenterIcon className="h-14 w-14 text-color-secundario" aria-hidden="true" />
                    </div>
                    <div className="text-justify px-2">
                      <span>
                        Facilitar la comunicación entre los miembros de la comunidad a través de un sistema de mensajería que permite comunicarse por medio de mensajes de texto.                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/4">
                    <div className="mb-4 flex justify-center">
                      <UsersIcon className="h-14 w-14 text-color-secundario" aria-hidden="true" />
                    </div>
                    <div className="text-justify px-2">
                      <span>
                        Capacidad para enviar notificaciones instantáneas al activar el SOS, asegurando una respuesta rápida y eficaz.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Animate.FadeIn>
          </div>
        </section>

        <section className="bg-gray-100">
          <div className="container py-20 px-32 relative">
            <h1 className="title mb-10 text-center">
              Funcionalidades
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 lg:gap-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
              <div className="text-center">
                <Animate.MoveIn>
                  <div className="flex flex-col justify-center">
                    <Image width={500} height={500} src="/images/mapa.jpg" className="object-fill rounded-lg shadow-lg" alt="mapa" />
                  </div>
                </Animate.MoveIn>
                <h3 className="mt-4 text-2xl">Mapa</h3>
              </div>
              <div className="text-center">
                <Animate.MoveIn>
                  <div className="flex flex-col justify-center">
                    <Image width={500} height={500} src="/images/noticias.png" className="object-fill rounded-lg shadow-lg" alt="noticias" />
                  </div>
                </Animate.MoveIn>
                <h3 className="mt-4 text-2xl">Noticias</h3>
              </div>
              <div className="text-center flex flex-col justify-center">
                <Animate.MoveIn>
                  <div className="flex flex-col justify-center">
                    <Image width={500} height={500} src="/images/grupos.jpg" className="object-fill rounded-lg shadow-lg" alt="grupos" />
                  </div>
                </Animate.MoveIn>
                <h3 className="mt-4 text-2xl">Grupos</h3>
              </div>
              <div className="text-center flex flex-col justify-center">
                <Animate.MoveIn>
                  <div className="flex flex-col justify-center">
                    <Image width={500} height={500} src="/images/lugares.jpg" className="object-fill rounded-lg shadow-lg" alt="lugares" />
                  </div>
                </Animate.MoveIn>
                <h3 className="mt-4 text-2xl">Lugares</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container relative py-20 px-32">
            <Animate.FadeIn>
              <h1 className="title mb-10 text-center">
                ¿De dónde nace?
              </h1>
            </Animate.FadeIn>
            <div className="flex flex-col lg:flex-row items-center justify-center md:flex-row">
              <div className="w-full lg:w-1/3 md:mr-10">
                <Animate.FadeIn>
                  <Image width={500} height={500} src="/images/menusession2.webp" className="object-contain" alt="profesores" />
                </Animate.FadeIn>
              </div>
              <div className="w-full lg:w-2/3 text-justify md:w-50 md:ml-12 relative flex justify-center items-center overflow-hidden">
                <Image width={500} height={500} src="/images/espe.png" className="absolute opacity-10" alt="profesor" />
                <Animate.MoveRight>
                  <div>
                    <p className="mb-6">
                      Seguridad ESPE nace a partir del proyecto de vinculación con la sociedad denominado &ldquo;Implementación de aplicaciones web y móvil para gestionar emergencias comunitarias en la provincia de Santo Domingo de los Tsáchilas&ldquo;, con el objetivo de aportar a la seguridad de la comunidad, con la comunicación, coordinación y respuesta ante situaciones de emergencia. La aplicación aprovecha el alto uso de dispositivos móviles e Internet para hacer frente a los desafíos de seguridad, brindando una solución innovadora en el campo de la protección ciudadana.
                    </p>
                    <p className="mb-6">
                      Utilizando como caso de estudio la parroquia Luz de América, se realizaron encuestas exhaustivas para determinar los tipos de incidentes más comunes en la parroquia. Estas encuestas identificaron diversas problemáticas de seguridad, tales como robos, vandalismo, desorden público, emergencias médicas, entre otros. La información recopilada se utilizó para desarrollar funcionalidades y servicios específicos en la aplicación móvil Seguridad ESPE, adaptándola a las necesidades de los residentes de la provincia Santo Domingo de los Tsáchilas.
                    </p>
                    <p>
                      La aplicación web por otra parte tiene como objetivo principal proporcionar reportes estadísticos detallados sobre diferentes tipos de emergencias comunitarias. Con la opción de filtrar las emergencias comunitarias según su ubicación, tipo de emergencia, hora de la emergencia, fecha de inicio y fin de la emergencia, se accede a datos específicos y relevantes para un análisis más preciso. Además, la plataforma permite a las entidades descargar los informes en formatos PDF o CSV, facilitando su análisis y utilización para la toma de decisiones en la comunidad.
                    </p>
                  </div>
                </Animate.MoveRight>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bg-color-lila">
          <Animate.FadeIn>
            <div className="container py-20 px-32 relative">
              <div className="text-center grid gap-4 md:text-left md:flex-1">
                <p className="leading-relaxed">
                  Por medio de la aplicación móvil se reportarán emergencias
                  comunitarias proporcionando detalles precisos del incidente y las
                  autoridades competentes podrán acudir en su ayuda. Además, cuenta
                  con un botón SOS para solicitar ayuda inmediata.
                </p>
                <p>
                  La aplicación web tiene como objetivo principal brindar reportes
                  estadísticos detallados sobre diversos tipos de incidentes en la
                  zona Luz de América. Cuenta con la opción de filtrar los incidentes
                  según su ubicación, tipo, fecha y hora, permitiéndote acceder a
                  datos específicos y relevantes para un determinado análisis.
                </p>
                <p>
                  La aplicación web complementa la aplicación móvil al proporcionar
                  reportes estadísticos detallados sobre los diversos tipos de
                  incidentes en la zona de Luz de América. A través de la plataforma,
                  las autoridades y responsables de la toma de decisiones pueden
                  acceder a informes que brindan una visión general de la situación
                  de seguridad en la comunidad.
                </p>
              </div>
            </div>
          </Animate.FadeIn>
        </section> */}
      </div >
    </>
  );
};

export default HomePage;
