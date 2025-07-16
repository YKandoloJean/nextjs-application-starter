import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function PredicationsPage() {
  const predications = [
    {
      id: 1,
      titre: "La Foi qui Déplace les Montagnes",
      date: "15 Décembre 2024",
      pasteur: "Pasteur Jean-Baptiste MUKENDI",
      description: "Une prédication puissante sur la foi et sa capacité à transformer nos vies.",
      duree: "45 min",
      type: "Audio + Vidéo",
      lienTelecharger: "#",
      disponible: true
    },
    {
      id: 2,
      titre: "L'Amour de Dieu Sans Limites",
      date: "8 Décembre 2024",
      pasteur: "Pasteur Jean-Baptiste MUKENDI",
      description: "Découvrez la profondeur de l'amour inconditionnel de Dieu pour nous.",
      duree: "52 min",
      type: "Audio + Vidéo",
      lienTelecharger: "#",
      disponible: true
    },
    {
      id: 3,
      titre: "Marcher dans la Lumière",
      date: "1 Décembre 2024",
      pasteur: "Pasteur Jean-Baptiste MUKENDI",
      description: "Comment vivre une vie qui honore Dieu dans un monde de ténèbres.",
      duree: "38 min",
      type: "Audio + Vidéo",
      lienTelecharger: "#",
      disponible: true
    },
    {
      id: 4,
      titre: "La Puissance de la Prière",
      date: "24 Novembre 2024",
      pasteur: "Pasteur Jean-Baptiste MUKENDI",
      description: "Comprendre l'importance et l'efficacité de la prière dans notre vie chrétienne.",
      duree: "41 min",
      type: "Audio + Vidéo",
      lienTelecharger: "#",
      disponible: true
    },
    {
      id: 5,
      titre: "Servir avec un Cœur Joyeux",
      date: "17 Novembre 2024",
      pasteur: "Pasteur Jean-Baptiste MUKENDI",
      description: "L'importance du service dans l'église et comment servir avec joie.",
      duree: "47 min",
      type: "Audio + Vidéo",
      lienTelecharger: "#",
      disponible: true
    },
    {
      id: 6,
      titre: "Les Promesses de Dieu",
      date: "10 Novembre 2024",
      pasteur: "Pasteur Jean-Baptiste MUKENDI",
      description: "Méditation sur les promesses fidèles de Dieu dans nos vies.",
      duree: "44 min",
      type: "Audio + Vidéo",
      lienTelecharger: "#",
      disponible: true
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Prédications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Écoutez et téléchargez nos prédications inspirantes qui nourrissent l'âme et fortifient la foi.
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Comment télécharger ?</h2>
          <p className="text-blue-800">
            Cliquez sur "Télécharger ZIP" pour accéder au lien de téléchargement. 
            Chaque fichier ZIP contient la prédication en format audio et vidéo haute qualité.
          </p>
        </div>

        {/* Liste des Prédications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {predications.map((predication) => (
            <Card key={predication.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{predication.type}</Badge>
                  <span className="text-sm text-gray-500">{predication.duree}</span>
                </div>
                <CardTitle className="text-lg">{predication.titre}</CardTitle>
                <CardDescription>
                  <div className="space-y-1">
                    <p className="font-medium">{predication.pasteur}</p>
                    <p className="text-sm">{predication.date}</p>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-gray-600 mb-4 flex-1">
                  {predication.description}
                </p>
                
                {/* Lecteur Audio Simulé */}
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Aperçu Audio</span>
                    <span className="text-xs text-gray-500">0:00 / {predication.duree}</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-0"></div>
                  </div>
                  <div className="flex justify-center mt-2">
                    <Button variant="ghost" size="sm" disabled>
                      ▶ Écouter l'aperçu
                    </Button>
                  </div>
                </div>

                {predication.disponible ? (
                  <Button className="w-full" asChild>
                    <a href={predication.lienTelecharger} target="_blank" rel="noopener noreferrer">
                      Télécharger ZIP
                    </a>
                  </Button>
                ) : (
                  <Button disabled className="w-full">
                    Bientôt Disponible
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section d'abonnement */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ne Manquez Aucune Prédication</h2>
          <p className="text-blue-100 mb-6">
            Abonnez-vous à notre chaîne YouTube pour être notifié de nos nouvelles prédications.
          </p>
          <Button variant="secondary" size="lg">
            S'abonner sur YouTube
          </Button>
        </div>
      </div>
    </div>
  )
}
