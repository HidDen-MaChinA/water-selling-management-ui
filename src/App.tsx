import { RouterProvider } from 'react-router-dom';
import "./i18n";
import { BlazeBrowserRouter } from './BlazeRouter/BlazeBrowserRouter';

function App() {
  return <RouterProvider router={BlazeBrowserRouter} />;
}
export default App
