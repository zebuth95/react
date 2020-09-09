import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Grid from '@material-ui/core/Grid'

import ButtonAppBar from '../components/App-bar'
import ProductCard from '../components/Products'
import BannerExample from '../components/Carousel'

const CartPosts = [
  {
    titulo: 'Xhot tequila-Limon ',
    detalle: 
      'Deliciosa combinación entre esta bebida típica mexicana y el cítrico del limon, perfectamente equilibrado para los amantes de esta bebida ancestral.',
    image: '/tequila-l.jpg',
    key: 1,
  },
  {
    titulo: 'Xhot Vodka-Coco ',
    detalle: 
    'Exquisito sabor tropical que combina a la perfección, el dulce sabor del coco con El Fuerte pero delicioso sabor del vodka, creando sensaciones indescriptibles. ',
    image: '/vodka-c.jpg',
    key: 2,
  },
  {
    titulo: 'Xhot Whisky-Maracuya ',
    detalle: 
    'A quien no se le antoja un whisky en las rocas junto con el delicioso sabor del cítrico pero dulce maracuya. ',
    image: '/whiskey-m.jpg',
    key: 3,
  },
  {
    titulo: 'Xhot Coñac-Mora',
    detalle: 
    'Imagínate esta perfecta combinación en tu paladar, coñac de la más alta calidad con ese tan único sabor y deliciosa fragancia junto con una dulce y exquisita mora.',
    image: '/conac.jpg',
    key: 4,
  },
];

export default function Home({name}) {
  return (
    <>
    <ButtonAppBar/>
    <div className={styles.container}>
      <Head>
        <title>Xhot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        {name}
      <div>
        <BannerExample/>
        <br></br>
      </div>
      <div>
      <Grid container spacing={4}>
            {CartPosts.map((post) => (
              <ProductCard key={post.key} post={post} />
            ))}
      </Grid>
      </div>
      
      </main>

    </div>
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api/hello')
  const json = await res.json()
  return { name: json.name }
}
