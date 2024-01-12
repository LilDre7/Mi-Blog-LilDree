import { useState } from 'react';
import "./blog.css"

const BlogHeader = () => {
  const [hoveredArticle, setHoveredArticle] = useState(null);

  const onMouseMove = (e) => {
    if (hoveredArticle !== null) {
      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = e.clientX - rect.width / 2;
      const offsetY = e.clientY - rect.height / 2;
      setHoveredArticle({
        ...hoveredArticle,
        transform: `translate(${offsetX}px, ${offsetY}px)`,
      });
    }
  };

  const onMouseLeave = () => {
    setHoveredArticle(null);
  };

  return (
    <>
      <section>
        <div className="container">
          <a href="" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
            <h2>Cats That Trade VHS Tapes</h2>
            <div className="preview-container" style={hoveredArticle}>
              <div className="image-container square">
                <img
                  src="https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?q=80&w=640"
                  width="640"
                  height="640"
                  alt="Cat pretending it does not have a copy of Videodrome"
                />
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default BlogHeader;
