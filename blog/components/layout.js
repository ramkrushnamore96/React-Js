import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from './../styles/utils.module.css'
import Link from 'next/link'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample website' 

export default function Layout({ children, home }) {
    return(
        <section className={styles.container}>
            <Head>
                <link rel="icon" href="/images/favicon.ico" />
                <meta 
                    name='description'
                    content='Learn how to build a personal website using next.js'
                />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Link href='/'>
                            <Image 
                                src="/images/profile.png" 
                                width={144} 
                                height={144} 
                                alt='Portfolio'
                                className='utilStyles.borderCircle'
                            />
                        </Link>
                        <h1 className={utilStyles.heading2x1}>
                            <Link href="/" className='utilStyles.colorInherit'>
                                {name}
                            </Link>
                        </h1>
                    </>
                ):(
                    <>
                        <Link href='/'>
                            <Image 
                                src="/images/profile.png" 
                                width={108} 
                                height={108} 
                                alt='Portfolio'
                                className='utilStyles.borderCircle'
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className='utilStyles.colorInherit'>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <section className={styles.backToHome}>
                    <Link href='/'>Back to home</Link>
                </section>
            )}
        </section>
    )
}