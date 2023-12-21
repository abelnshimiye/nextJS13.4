import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import {Alert} from '@/components/bootstrap';

export const metadata = {
    title: 'Dynamic Fetching - NextJS 13.4 Image Gallery',
    
  }

// the bellow code turn the whole page dynamic, it enable the page to be cashed at all  
// export const revalidate = 0;

  
  async function Page() {

   
 // We can also set the dynamic on specific call
    const response =  await fetch("https://api.unsplash.com/photos/random?client_id="+ process.env.UNSPLASH_ACCESS_KEY,
    {
        // configuration to make this call dynamic redering
        // cache: "no-cache"
        // cache: "no-store"
        next: {revalidate: 0}

    }
    );
    
    
    const image: UnsplashImage = await response.json();
    // Resize Image dynamically
    const width = Math.min(500, image.width);
    const height =  (width / image.width) * image.height;





    return (
      <div className="d-flex flex-column align-items-center">
    
    <Alert>
        This page <strong> fetches  data dynamically. </strong> Every time you refresh the page, you get a new image from the Unsplash API. 
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
  
