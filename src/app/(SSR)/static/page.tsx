import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import {Alert} from '@/components/bootstrap';

export const metadata = {
    title: 'Static Fetching - NextJS 13.4 Image Gallery',
    
  }
  

async function Page() {

    // It is safe to use ou UNSPLASH_ACCESS_KEY even if it is a sensentive data since we are uning it in a server componet 
    // A server component will only run on the server this will never be visible on the client and this additional security meseare
    // if we are use this UNSPLASH_ACCESS_KEY on client compoment it will be undefined
    // it will only have a value on the client it we prefix this with NEXT_PUBLIC_ like this NEXT_PUBLIC_UNSPLASH_ACCESS_KEY

    const response =  await fetch("https://api.unsplash.com/photos/random?client_id="+ process.env.UNSPLASH_ACCESS_KEY);
    const image: UnsplashImage = await response.json();

    // Resize Image dynamically
    const width = Math.min(500, image.width);
    const height =  (width / image.width) * image.height;


  return (
    <div className="d-flex flex-column align-items-center">

        <Alert>
            This page <strong> fetches and caches data at build time. </strong> Even though the Unsplash API always ruturns a new image, we see the same image after refreshing the page until we compile the project again.

        </Alert>


        <Image 
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.description}
        className="rounded shadow mw-100 h-100"
        />

        by <Link href={"/users/" + image.user.username}>{image.user.username}</Link>

        

    </div>
  )
}

export default Page