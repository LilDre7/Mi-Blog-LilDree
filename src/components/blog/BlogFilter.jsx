import { useEffect, useRef, useState } from 'react';
import articulos from '../../utils/articles';
import './blogStyle.css';

const BlogFilter = () => {
  const projectPreviewsRef = useRef([]);
  const throttleTimerRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!throttleTimerRef.current) {
        throttleTimerRef.current = setTimeout(() => {
          projectPreviewsRef.current.forEach((projectPreview) => {
            const rect = projectPreview.getBoundingClientRect();
            const offsetX = e.clientX - rect.width / 2;
            const offsetY = e.clientY - rect.height / 2;

            projectPreview.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
          });

          throttleTimerRef.current = null;
        }, 20);
      }
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section className="dark:bg-[#FCFCFC] dark:z-50 mx-auto sm:max-w-[700px]">
      <div className='my-10'>
       <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Buscar"
        />
      </div>
      {articulos.map((art) => (
        <div className="container">
          <a className="flex justify-between py-2" href="/">
            <div className="md:flex md:gap-8 md:py-3">
              <p className="text-[#A1A09A] font-medium md:w-36">
                {art.fechaCreacion}
              </p>
              <h2 className="text-[#EDEDEC] text-lg tracking-tight w-52 sm:w-full font-semibold dark:text-[#1B1B18]">
                {art.titulo}
              </h2>
            </div>
            <div className="flex py-4 dark:z-50 preview-container">
              <div
                className="aspect-square min-w-24 w-24 h-20 relative drop-shadow-sm"
                ref={(ref) => projectPreviewsRef.current.push(ref)}
              >
                <img
                  className="w-full z-50 h-full object-cover rounded-lg"
                  src={art.imagenURL}
                  alt={art.titulo}
                />
              </div>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
};

export default BlogFilter;
