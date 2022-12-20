import '../styles/globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>Welcome Page</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
