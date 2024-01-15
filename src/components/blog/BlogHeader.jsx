import { useEffect, useRef } from 'react';
import articulo from '../../utils/articles';
import './blogStyle.css';

const BlogHeader = () => {
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
    <section className="dark:bg-[#FCFCFC] h-screen max-w-[350px] mx-auto sm:max-w-[700px]">
      {articulo.map((art) => (
        <div className="container">
          <a className="flex justify-between py-2" href="/">
            <div className="md:flex md:gap-8 md:py-3">
              <p className="text-[#A1A09A] font-medium md:w-40">
                {art.fechaCreacion}
              </p>
              <h2 className="text-[#EDEDEC] text-lg tracking-tight w-52 md:w-full font-semibold dark:text-[#1B1B18]">
                {art.titulo}
              </h2>
            </div>
            <div className="flex py-4 preview-container">
              <div
                className="aspect-square min-w-24 w-24 h-20 relative drop-shadow-sm"
                ref={(ref) => projectPreviewsRef.current.push(ref)}
              >
                <img className="w-full h-full object-cover rounded-lg" src={art.imagenURL} alt={art.titulo} />
              </div>
            </div>
          </a>
        </div>
      ))}
      <section className="mt-7 pb-14">
        <a
          className="text-[#EDEDEC] border-solid border-white border-b-2 font-semibold text-base dark:text-[#1B1B18] dark:border-[#1B1B19]"
          href="/Blog/"
        >
          See All
        </a>
      </section>
    </section>
  );
};

export default BlogHeader;
