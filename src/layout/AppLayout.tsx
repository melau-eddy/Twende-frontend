import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function AppLayout() {
  return (
    <div>
      <Header />
      <main className=" bg-zinc-50">
        <Outlet />
      </main>
    </div>
  );
}
