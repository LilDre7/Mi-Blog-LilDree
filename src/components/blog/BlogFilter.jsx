import { useEffect, useRef, useState } from 'react';
import articulos from '../../utils/articles';
import './blogStyle.css';

const BlogFilter = () => {
  // ** Filtrado de los articulos
  const [isFilter, setFilter] = useState('');
  const [filteredArticulos, setFilteredArticulos] = useState(articulos);

  useEffect(() => {
    const tecnoFiltradas = articulos.filter((art) =>
      art.titulo.toLowerCase().includes(isFilter.toLowerCase()),
    );
    setFilteredArticulos(tecnoFiltradas);
  }, [isFilter]);

  //** Efecto de la vista previa del articulo
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
      {/* Barra de búsqueda */}
      <div className="my-10 mb-28 flex flex-col gap-2">
        <div className="flex items-center gap-2 rounded-full shadow-[#706f6c] shadow-sm bg-[#282828] w-fit dark:bg-[#ededed]">
          <label className="flex items-center pl-2.5" htmlFor="">
            <img className="w-5 h-5" src="/images/svgIcons/search.svg" alt="" />
          </label>
          <input
            className="h-10 pr-4 bg-transparent outline-none placeholder:text-[#706f6c] placeholder:font-medium placeholder:text-lg dark:text-black "
            type="text"
            placeholder="Buscar..."
            value={isFilter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>

      {/* Lista de artículos */}
      {filteredArticulos.length === 0 ? <p className='font-bold text-[#ff3232] tracking-wide' >No post found</p> : filteredArticulos.map((art) => (
        <div className="container" key={art.id}>
          <a className="flex items-center justify-between py-2" href="/">
            {/* Detalles del artículo */}
            <div className="md:flex-col md:gap-8 md:py-3">
              <p className="text-[#A1A09A] font-medium w-36">
                {art.fechaCreacion}
              </p>
              <h2 className="text-[#EDEDEC] text-lg tracking-tight w-52 sm:w-full font-semibold dark:text-[#1B1B18]">
                {art.titulo}
              </h2>
            </div>

            {/* Vista previa del artículo */}
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
