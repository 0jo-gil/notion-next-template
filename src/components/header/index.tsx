
import {tv, type VariantProps} from 'tailwind-variants';
import Navigation from '../navigation';

const NavStyles = tv({
    base: 'flex justify-between items-center',
    variants: {}
})

const Header = ({

}) => {
    return (
        <header className={NavStyles()}>
            <Navigation>
                    <Navigation.MenuList>
                        <Navigation.MenuItem href="/">Home</Navigation.MenuItem>
                        <Navigation.MenuItem href="/post">Post</Navigation.MenuItem>
                    </Navigation.MenuList>
            </Navigation>
        </header>
    )
}

export default Header;