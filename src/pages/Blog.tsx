import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

// Automatizar la búsqueda de componentes en la carpeta 'posts'
const postFiles = require.context('../posts', true, /\.tsx$/);

const componentsMap: { [key: string]: React.FC } = postFiles.keys().reduce((map, path) => {
  const name = path.match(/\/([^/]+)\.tsx$/)?.[1]?.toLowerCase();
  if (name) {
    map[name] = postFiles(path).default;
  }
  return map;
}, {} as { [key: string]: React.FC });

const Blog = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop()?.toLowerCase();

  console.log("Path desde useLocation:", path);

  const PostComponent = path ? componentsMap[path] : null;

  console.log("PostComponent asignado:", PostComponent);

  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 bg-gray-200">
        <Sidebar />
      </div>
      <div className="flex-1 p-8">
        {PostComponent ? <PostComponent /> : <p>Selecciona un post del menú lateral.</p>}
      </div>
    </div>
  );
};

export default Blog;
