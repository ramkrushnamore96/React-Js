import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from './../components/layout';
import utilStyles from './../styles/utils.module.css'
import { getSortedPostsData } from './../lib/posts';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a Full stack developer. I do web application. I am stay in Pune, Maharashtra.</p>
        <p>
          This is a sample website. And if you want to learn more, you can visit <a href='https://nextjs.org/learn'>Nextjs tutorials</a> 
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1x}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title})=>{
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br/>
              <small className={utilStyles.listItem}>
                <Date dateString={date} />
              </small>
            </li>
          })}
        </ul>
      </section>
    </Layout>
  )
}