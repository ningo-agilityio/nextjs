import Link from 'next/link'
import styles from './Layout.module.css'

const Layout = (props) => (
  <div>
    <header className={styles.mainHeader}>
      <ul className="inline">
        <li>
          <Link href="/">Home page</Link>
        </li>
        <li>
          <Link href="/new-meetup">Meetup page</Link>
        </li>
      </ul>
    </header>
    <main>{props.children}</main>
  </div>
)

export default Layout