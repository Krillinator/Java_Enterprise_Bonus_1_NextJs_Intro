import Link from "next/link"

export default function Page() {
  return (
    <main className="flex flex-col h-screen justify-center items-center">
      <h1>Welcome to Student Page</h1>
      <p>Did we navigate from home?</p>

      <Link href={"/"}>Navigate Home</Link>
    </main>
  )
}
