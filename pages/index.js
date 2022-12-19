import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1>Next Js pre-rendering</h1>
      <Link href='/users'>Link</Link>
      <Link href='/posts'>Posts</Link>
    </>
  )
}
