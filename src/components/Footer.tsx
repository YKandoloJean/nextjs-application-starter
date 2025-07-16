import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Nouvelle Cité de l'Espérance</h3>
            <p className="text-gray-300 mb-4">
              Une église où l'amour de Dieu transforme les vies et bâtit une communauté d'espérance.
            </p>
            <p className="text-sm text-gray-400">
              "Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance." - Jérémie 29:11
            </p>
          </div>

          {/* Navigation Rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/predications" className="text-gray-300 hover:text-white transition-colors">Prédications</Link></li>
              <li><Link href="/musiques" className="text-gray-300 hover:text-white transition-colors">Musiques</Link></li>
              <li><Link href="/evenements" className="text-gray-300 hover:text-white transition-colors">Événements</Link></li>
              <li><Link href="/a-propos" className="text-gray-300 hover:text-white transition-colors">À Propos</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: contact@nouvellecitefoi.org</p>
              <p>WhatsApp: +33 6 12 34 56 78</p>
              <div className="mt-4">
                <h5 className="font-medium mb-2">Suivez-nous</h5>
                <div className="space-y-1">
                  <p>Facebook: Nouvelle Cité de l'Espérance</p>
                  <p>YouTube: NCE Officiel</p>
                  <p>Instagram: @nouvellecitefoi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Nouvelle Cité de l'Espérance. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
