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
      <body className="bg-black">
        {children}
      </body>
    </html>
  )
}
