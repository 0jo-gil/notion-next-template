
import {tv, type VariantProps} from 'tailwind-variants';
import Navigation from '../navigation';

const NavStyles = tv({
    base: 'container flex justify-between items-center',
    variants: {}
})

const Header = ({

}) => {
    return (
        <header >
            <div className={NavStyles()}>
                <div>
                    LOGO
                </div>
                <Navigation>
                        <Navigation.MenuList>
                            <Navigation.MenuItem href="/">Home</Navigation.MenuItem>
                            <Navigation.MenuItem href="/post">Post</Navigation.MenuItem>
                        </Navigation.MenuList>
                </Navigation>
            </div>
        </header>
    )
}

export default Header;