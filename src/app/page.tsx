import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Bienvenue à la
            <span className="block text-blue-600">Nouvelle Cité de l'Espérance</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Une église où l'amour de Dieu transforme les vies et bâtit une communauté d'espérance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Nous Rejoindre</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/predications">Écouter les Prédications</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Verset du Jour */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Verset du Jour</h2>
          <blockquote className="text-xl md:text-2xl font-light italic mb-4">
            "Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance."
          </blockquote>
          <cite className="text-blue-200">— Jérémie 29:11</cite>
        </div>
      </section>

      {/* Message du Pasteur */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Message du Pasteur</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-600 mb-6">
                Chers frères et sœurs en Christ, bienvenue dans notre maison de prière. 
                Que ce lieu soit pour vous un refuge de paix, un endroit où votre foi grandit 
                et où vous trouvez l'espérance dont votre cœur a besoin.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nous sommes une famille unie par l'amour du Christ, déterminée à servir 
                notre communauté et à répandre la bonne nouvelle de l'Évangile.
              </p>
              <p className="font-semibold text-gray-800">
                Pasteur Jean-Baptiste MUKENDI
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dernières Publications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Dernières Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Prédications Récentes</CardTitle>
                <CardDescription>Écoutez les derniers messages inspirants</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Découvrez nos dernières prédications qui nourrissent l'âme et fortifient la foi.
                </p>
                <Button asChild className="w-full">
                  <Link href="/predications">Voir les Prédications</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Musiques du Chœur</CardTitle>
                <CardDescription>Louanges et adorations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Écoutez les belles mélodies de notre chœur qui élèvent nos cœurs vers Dieu.
                </p>
                <Button asChild className="w-full">
                  <Link href="/musiques">Écouter les Musiques</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Événements à Venir</CardTitle>
                <CardDescription>Rejoignez-nous pour nos prochains événements</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Consultez notre calendrier et participez à nos cultes et événements spéciaux.
                </p>
                <Button asChild className="w-full">
                  <Link href="/evenements">Voir les Événements</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Horaires des Cultes */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Horaires des Cultes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Culte Dominical</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-2">10h00 - 12h30</p>
                <p className="text-gray-600">Tous les dimanches</p>
                <p className="text-gray-600">Prédication, louanges et communion fraternelle</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Réunion de Prière</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 mb-2">19h00 - 21h00</p>
                <p className="text-gray-600">Tous les mercredis</p>
                <p className="text-gray-600">Temps de prière et d'intercession</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
