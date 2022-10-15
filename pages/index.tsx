import type { NextPage } from 'next'
import Head from 'next/head'
import { ReactElement } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { NextPageWithLayout } from '../types/page'

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <span>Fındıklar</span>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>{page}</Layout>
  )
}

export default Home
