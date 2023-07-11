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
  EnvelopeOpenIcon,
  MapIcon,
  PaperAirplaneIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

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

const FadeUp: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0, translate: "0 2rem" }}
    to={{ opacity: 1, translate: "none" }}
    time="1500ms"
  >
    {children}
  </AnimateIn>
);

const ScaleIn: FC<PropsWithChildren> = ({ children }) => (
  <AnimateIn from={{ scale: "0" }} to={{ scale: "1" }} time="1000ms">
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
  FadeUp,
  ScaleIn,
  MoveIn,
  MoveRight
};

const ContactPage = () => {
  return (
    <>
      <Layout title="Contacto">
        <div className="pt-28 pb-20 bg-white">
          <div className="text-center fade-in">
            <h1 className="title mb-4 text-3xl color-gray-light font-bold">
              Hablemos de lo que necesitas y cómo te podemos ayudar
            </h1>
          </div>
          <section id="contact-form" className="bg-white mb-10 fade-in">
            <div className="container px-32">
              <div className="flex flex-col justify-center items-center">
                <p className="mb-4 text-center text-color-primary-light">
                  Si prefieres enviarnos un mensaje directamente, por favor
                  completa el siguiente formulario y nos pondremos en contacto
                  contigo a la brevedad:
                </p>
                <div className="bg-gray-100 shadow-lg rounded-lg p-10">
                  <form className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                        >
                          Nombres
                        </label>
                        <input
                          className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="Escriba su nombre"
                        />
                        <p className="text-red-500 text-xs italic">
                          {/* Por favor complete este campo. */}
                        </p>
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-last-name"
                        >
                          Telefono
                        </label>
                        <input
                          className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                          id="grid-last-name"
                          type="text"
                          placeholder="Escriba teléfono"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-email"
                          type="email"
                          placeholder="example@mail.com"
                        />
                        <p className="text-gray-600 text-xs italic">
                          {/* Por favor complete este campo. */}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Mensaje
                        </label>
                        <textarea
                          className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-email"
                          placeholder="Nuevo mensaje..."
                        >
                        </textarea>
                        <p className="text-gray-600 text-xs italic">
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                      <button type="submit" className="button bg-blue-500 text-white py-2 px-4 rounded inline-flex items-center">
                        <span className="flex">
                          Enviar
                          <PaperAirplaneIcon className="h-5 w-5 ml-1 text-color-white" />
                        </span>
                      </button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-color-lila py-10">
            <div className="container mb-8 px-32">
              <p className="leading-relaxed mb-4 text-center">
                Si tienes alguna consulta o necesitas más información sobre la aplicación Seguridad ESPE, estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros.
              </p>
            </div>
            <Animate.FadeIn>
              <div className="w-full flex flex-col lg:flex-row justify-center container lg:px-32 lg:gap-12 gap-6">
                <div className="flex flex-col lg:w-1/3 items-center">
                  <div className="mb-4">
                    <MapIcon className="h-14 w-14 text-color-secundario" aria-hidden="true" />
                  </div>
                  <div className="text-center">
                    <p>
                      Director del proyecto
                      <br />
                      Ing. Luis Castillo, Mgtr.
                      <br />
                      Implementación de aplicaciones web y móvil para gestionar emergencias comunitarias en la provincia de Santo Domingo de los Tsáchilas
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:w-1/3 items-center">
                  <div className="mb-4">
                    <PhoneIcon className="h-14 w-14 text-color-secundario" aria-hidden="true" />
                  </div>
                  <div className="text-center">
                    <p>
                      Teléfono convencional
                      <br />
                      (02) 272-2246
                      <br />
                      ESPE sede Santo Domingo
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:w-1/3 items-center">
                  <div className="mb-4">
                    <EnvelopeOpenIcon className="h-14 w-14 text-color-secundario" aria-hidden="true" />
                  </div>
                  <div className="text-center">
                    <p>
                      Correo electrónico
                      <br />
                      lacastillo12@esp.edu.ec
                    </p>
                  </div>
                </div>
              </div>
            </Animate.FadeIn>
          </section>

          <section className="py-10">
            <Animate.FadeIn>
              <div className="text-center fade-in">
                <h1 className="title mb-4 text-3xl color-gray-light font-bold">
                  También puedes visitarnos en nuestra sede
                </h1>
              </div>
              <div className="container px-32 flex justify-center text-black " style={{ height: '400px' }}>
                <iframe className="mt-5 mb-5 rounded-lg shadow-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14362.34376615065!2d-79.3174620878782!3d-0.41326645086554714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d53237044f39bb%3A0x24ed753bfe34c98b!2sUniversidad%20de%20las%20Fuerzas%20Armadas%20-%20ESPE%20-%20Santo%20Domingo!5e0!3m2!1sen!2sec!4v1688466546265!5m2!1sen!2sec"
                  width="900" height="400" loading="lazy" ></iframe>
              </div>
            </Animate.FadeIn>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default ContactPage;
