import Link from 'next/link';
import Logo from './logo';

export default function NavBar() {
    return (
        <div className="w-full sticky top-0 py-4 px-48">
            <div className="flex justify-between items-center h-full">
                <Logo />
                <ul className="hidden md:flex gap-x-6 text-white">
                    <li>
                        <Link href="/about">
                            <p>About Us</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/services">
                            <p>Services</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts">
                            <p>Contacts</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
