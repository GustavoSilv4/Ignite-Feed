import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css'

// author: { avatar_url: string, name: string, role: string}
// publisheadAt: Date
// content: string

const post = [
  {
    id: 1,
    author: {
      avatar_url: 'https://github.com/gustavosilv4.png',
      name: 'Gustavo Silva',
      role: 'Frontend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design / doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/diegog3.png',
      name: 'Diego Fernandos',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design / doctorcare' },
    ],
    publishedAt: new Date('2022-06-23 21:00:00'),
  },
]

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