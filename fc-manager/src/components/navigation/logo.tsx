import Image from 'next/image';

export default function Logo() {
    return (
        <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            rel="noopener noreferrer"
        >
            <Image
                src="/images/next.svg"
                alt="Free Company Manager Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
            />
        </a>
    );
}
