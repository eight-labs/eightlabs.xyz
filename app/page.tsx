import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 w-full">
            <div>
                <Image
                    className="relative dark:invert"
                    src="/eightlabs.svg"
                    alt="Eight Labs Logo"
                    width={512}
                    height={37}
                    priority
                />
                <p className="font-space-grotesk leading-snug text-center -mr-20 dark:text-[#FFFFFF] text-[#000000] text-[20px]">
                    how hard can it be?
                </p>
            </div>
        </main>
    );
}
