import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css'

// author: { avatar_url: string, name: string, role: string}
// publisheadAt: Date
// content: string

const posts = [
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
          {posts.map(post => {
            return <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          })

          }
        </main>
      </div>
    </div>
  )
}