import Link from 'next/link'
import { HiPhone, HiLocationMarker, HiMail } from 'react-icons/hi'
import { FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Sorriso Dent</h3>
            <p className="text-gray-400 mb-4">
              Cabinet dentar premium în București, dedicat sănătății și frumuseții zâmbetului tău.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/sorrisodent"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-700 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Link-uri Rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/servicii" className="hover:text-primary-400 transition-colors">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/despre-noi" className="hover:text-primary-400 transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/programari" className="hover:text-primary-400 transition-colors">
                  Programări
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Servicii</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Implantologie</li>
              <li>Estetică Dentară</li>
              <li>Ortodonție</li>
              <li>Albire Dentară</li>
              <li>Tratamente Endodontice</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <HiPhone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a href="tel:0724481200" className="hover:text-primary-400 transition-colors">
                  0724 481 200
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <HiLocationMarker className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span>
                  Bloc 1, Bulevardul Camil Ressu nr.66<br />
                  București 031761
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <HiMail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@sorrisodent.ro"
                  className="hover:text-primary-400 transition-colors"
                >
                  contact@sorrisodent.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sorriso Dent. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}

