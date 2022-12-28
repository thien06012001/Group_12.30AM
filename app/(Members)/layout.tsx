import Button from "../Component/Button"
import NavBar from "../Component/NavBar"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>HomePage</title>
      </head>
      <body className="bg-[rgb(36,36,36)] h-screen">
        <NavBar/>  
        {children}
        <Button/>
        <div className='w-full absolute z-0 top-[15%] bg-zinc-900/80 left-0 h-[500px] -skew-y-12 '/>
      </body>
    </html>
  )
}
