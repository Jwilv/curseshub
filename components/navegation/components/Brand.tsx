import Image from "next/image"


const Brand = () => {
    return (
        <Image
            src="/logo.svg"
            alt="logo"
            width={50}
            height={50}
        />
    )
}

export default Brand