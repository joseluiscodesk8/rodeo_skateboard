import { AppProvider } from "../context/AppContext";
import "../styles/globals.scss";


export const metadata = {
  title: 'Rodeo Cart',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="cart-body"><AppProvider>{children}</AppProvider></body>
    </html>
  )
}