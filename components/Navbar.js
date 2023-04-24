import Link from "next/link";

export default function Navbar() {
    return(
        <nav>
            <div>Jetsadakorn Shop</div>
            <Link href="/">หน้าแรก</Link>
            <Link href="/about">เกี่ยวกับเรา</Link>
            <Link href="/products">สินค้าทั้งหมด</Link>
        </nav>
        
    )
}