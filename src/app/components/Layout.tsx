import Link from 'next/link'
import Logo from '../Component/Logo/Logo'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 ">
<header className="bg-transparent backdrop-filter backdrop-blur-lg p-4">
<nav className="container mx-auto">

            
    

<Link href="/"><Logo/></Link>


        
        </nav>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-purple-900 p-4 mt-8">
        <div className="container mx-auto text-center text-purple-300">
          © 2024-2025 Dynamic Blog. All rights reserved.<br/>
         <span className=" opacity-75">|| CREATION  BY ALI HAMZA ||</span>
        </div>
      </footer>
    </div>
  )
}

