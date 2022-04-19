import Image from "next/image"
import Link from "next/link"
import Styles from './header.module.css'
import IconBookmark from "../../public/assets/icons/bookmark.svg"
import IconHome from "../../public/assets/icons/home.svg"

export function Header() {
    return (
        <header>
            <nav className={Styles.nav}>
                <div className={Styles.brand}>
                    <Link href="/">
                        <a>
                        <Image
                            src="/assets/images/logo.png"
                            width={45}
                            height={36}
                            alt="OnFood"
                        />
                        <span>OnFood</span>
                        </a>
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link href="/">
                        <a>
                            <IconHome />
                            Home
                        </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/favoritos">
                        <a>
                            <IconBookmark />
                            Favoritos
                        </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}