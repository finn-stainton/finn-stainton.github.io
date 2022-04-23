import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            By Finn Stainton
          </h3>
          <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
            With a statically generated blog using{' '}
            <a
              href="https://nextjs.org/"
              className="underline hover:text-success duration-200 transition-colors"
            >
              Next.js
            </a>{' '}
            and Markdown.
              Work is licensed under a{' '}
            <a 
              href="http://creativecommons.org/licenses/by/4.0/" 
              className="underline hover:text-success duration-200 transition-colors"
            >
              Creative Commons Attribution 4.0 International License
            </a>
          </h4>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://www.linkedin.com/in/finn-stainton"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/finn-stainton"
              className="mx-3 font-bold hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
