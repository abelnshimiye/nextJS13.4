

async function  Page() {

await new Promise((resolve) =>setTimeout(resolve, 10000))

// throw Error("error")
  return (
    <div>Hello, NextJS 13.4.7</div>
  )
}

export default Page