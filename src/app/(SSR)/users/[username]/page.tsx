import { Alert } from "@/components/bootstrap";
import { UnsplashUser } from "@/models/unsplash-user";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

interface PageProps {
    params: {username: string}
}

async function getUser(username: string): Promise<UnsplashUser>{
    const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
    if(response.status === 404)notFound();
   
    return await response.json();
}

// if we do not use fetch, means we are using axios or something else we will use another method of cashing the getUser fnction
// const getUserCached = cache(getUser)
// and use getUserCached

// put the name of the user in the navbar
export async function generateMetadata({params: {username}}: PageProps): Promise<Metadata>{

    const user = await getUser(username);

    return {
        title: ([user.first_name , user.last_name].filter(Boolean).join(" ") || user.username) + " - NextJS 13.4 Image Galley",
    }

}


async function Page({params: {username}}: PageProps) {

    const user: UnsplashUser = await getUser(username)

  return (
    <div>
    <Alert>
        This page uses <strong> generateMetadata </strong> to set the <strong>page title</strong> dynamically from the API response. 
    </Alert>
    
        <h1>{user.username}</h1>
        <p>First Name : {user.first_name}</p>
        <p>Last Name : {user.last_name}</p>

        <a href={"https://api.unsplash.com/" + user.username}>Unsplash profile</a>
        
    </div>
  )
}

export default Page