import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Gustavo S." content="sed autem quia Beatae sequi esse aut. Quia libero ipsam quia rerum. Tempora et quia dolorem accusantium est omnis voluptatum sit autem." />
          <Post author="OLiver B." content="Harum qui expedita qui consequatur facere sed. Deleniti ipsum voluptatem consequuntur error corrupti voluptas. Et quia eum sunt odio aspernatur." />
        </main>
      </div>
    </div>
  )
}