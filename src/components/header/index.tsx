import {tv} from 'tailwind-variants';
import Link from 'next/link';

const NavStyles = tv({
    base: 'flex flex-row justify-between items-center py-5',
    variants: {}
})

const Header = ({}) => {
    return (
        <header>
            <div className={NavStyles()}>
                <Link href={'/'}>
                    <h1 className='text-3xl'>0jo dev blog</h1>
                </Link>
                {/* <Navigation>
                        <Navigation.MenuList>
                            <Navigation.MenuItem href="/">Home</Navigation.MenuItem>
                            <Navigation.MenuItem href="/post">Post</Navigation.MenuItem>
                        </Navigation.MenuList>
                </Navigation> */}
            </div>
        </header>
    )
}

export default Header;
