import Image from "next/image";
import { JSX } from "react";

type LogoProps = {
    className?: string;
}

function Logo({ className }: LogoProps): JSX.Element {
    return <div className={`relative ${className} aspect-[2/1]`}>
        <Image
            src="/images/logo.avif"
            alt="López Ziga y Asociados"
            fill
            style={{ objectFit: "contain" }}
            priority
        />
    </div>
}

export default Logo;