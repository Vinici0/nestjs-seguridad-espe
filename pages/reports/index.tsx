import React, { useState } from "react";
import { Layout } from "../../components/layouts/Layout";
// import Image from "next/image";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

const ReportsPage = () => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <Layout title="Reportes">
        <div className="pt-28 pb-20 bg-white">
          <div className="text-center fade-in">
            <h1 className="title mb-4 text-3xl color-gray-light font-bold">
              Analitica de incidentes
            </h1>
          </div>
          <section className="bg-color-lila py-10 mb-10">
            <div className="container px-32">
              <p className="leading-relaxed text-center">
                Informe de incidentes de la parroquia Luz de América
              </p>
              <div className="flex mt-4 justify-center gap-6">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:scale-110 transition-all">
                  <span className="flex">
                    Descargar PDF
                    <DocumentArrowDownIcon className="h-5 w-5 ml-1 text-color-white" />
                  </span>
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:scale-110 transition-all">
                  <span className="flex">
                    Descargar CSV
                    <DocumentArrowDownIcon className="h-5 w-5 ml-1 text-color-white" />
                  </span>
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className="contianer px-32">
              <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                  <li className="mr-2">
                    <a
                      href="#"
                      className={"inline-block p-4 " + (openTab === 1 ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 active" : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")}
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                    >
                      Reporte 1
                    </a>
                  </li>
                  <li className="mr-2">
                    <a
                      href="#"
                      className={"inline-block p-4 " + (openTab === 2 ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 active" : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")} aria-current="page"
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                    >
                      Reporte 2
                    </a>
                  </li>
                  <li className="mr-2">
                    <a
                      href="#"
                      className={"inline-block p-4 " + (openTab === 3 ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 active" : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")}
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                    >
                      Reporte 3
                    </a>
                  </li>
                  <li className="mr-2">
                    <a
                      href="#"
                      className={"inline-block p-4 " + (openTab === 4 ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500 active" : "border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300")}
                      onClick={e => {
                        e.preventDefault();
                        setOpenTab(4);
                      }}
                    >
                      Reporte 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className={"flex justify-center p-2 " + (openTab === 1 ? "block" : "hidden")}>
                <img src="/images/1.png/" style={{ maxWidth: "550px" }} />
              </div>
              <div className={"flex justify-center p-2 " + (openTab === 2 ? "block" : "hidden")}>
                <img src="/images/2.png/" style={{ maxWidth: "550px" }} />
              </div>
              <div className={"flex justify-center p-2 " + (openTab === 3 ? "block" : "hidden")}>
                <img src="/images/3.png/" style={{ maxWidth: "550px" }} />
              </div>
              <div className={"flex justify-center p-2 " + (openTab === 4 ? "block" : "hidden")}>
                <img src="/images/4.png/" style={{ maxWidth: "550px" }} />
              </div>
            </div>

          </section>
        </div>
      </Layout>
    </>
  );
};

export default ReportsPage;
