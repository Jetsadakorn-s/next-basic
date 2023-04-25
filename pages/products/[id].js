import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Detail.module.css"

export async function getStaticPaths() {
    const res = await fetch("https://dummyjson.com/product?limit=12")
    const data = await res.json()
    const paths = data.products.map((item)=>{
        return{
            params:{id:String(item.id)}
        }
    })
    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}) {
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/"+id)
    const data = await res.json()
    return{
        props:{product:data}
    }
}

export default function ProductDetail({product}) {
    return(
        <>
            <Head>
                <title>{product.title}</title>
            </Head>
            <div className={styles.container}>
                <div>
                    <Image src={product.thumbnail} width={300} height={300} alt={product.title}/>
                </div>
                <div className={styles.detail}>
                    <h1>{product.title}</h1>
                    <h3>แบรนด์ : {product.brand}</h3>
                    <h3>ราคา : {product.price} $</h3>
                    <h4>{product.description}</h4>
                    <h4>Rating : {product.rating}</h4>
                </div>
            </div>
        </>
    )
}