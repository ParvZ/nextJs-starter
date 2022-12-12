import Link from 'next/link'

type Props = {
    category: string,
    isActive: boolean
}

function NavLink({category, isActive}: Props) {

  return (
    <Link className={`navLink ${isActive && "underline underline-offset-4 decoration-orange-400"}`} href={`/news/${category}`}>
        {category}
    </Link>
  )
}

export default NavLink