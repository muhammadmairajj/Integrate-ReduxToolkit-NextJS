import Posts from "./posts/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl">Redux Toolkit Integrate with NextJS 13</h1>
      <Posts />
    </main>
  )
}
