import React from 'react';
import { Github, Linkedin, Mail, User, Briefcase, GraduationCap, Code, FileText, Monitor, Server, Network, Database, MessageSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
            alt="Photo de profil"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-blue-500 shadow-xl hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-5xl font-bold mb-4 hover:text-blue-400 transition-colors">Nicolas Martinico</h1>
          <p className="text-xl text-blue-400 mb-8">Étudiant en BTS SIO SISR</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:N.Martinico@outlook.com" className="hover:text-blue-400 transition-colors transform hover:scale-110">
              <Mail className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors transform hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors transform hover:scale-110">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-black/85 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-8 py-4">
            <li><a href="#presentation" className="text-blue-400 hover:text-blue-300 transition-colors hover:scale-105 transform inline-block">Accueil</a></li>
            <li><a href="#formation" className="text-blue-400 hover:text-blue-300 transition-colors hover:scale-105 transform inline-block">BTS SIO</a></li>
            <li><a href="#veille-technologique" className="text-blue-400 hover:text-blue-300 transition-colors hover:scale-105 transform inline-block">Veille Technologique</a></li>
            <li><a href="#cv" className="text-blue-400 hover:text-blue-300 transition-colors hover:scale-105 transform inline-block">CV</a></li>
          </ul>
        </div>
      </nav>

      {/* À Propos */}
      <section id="presentation" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <User className="w-8 h-8 text-blue-400 mr-4" />
            <h2 className="text-3xl font-bold">Présentation</h2>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <p className="text-gray-300 leading-relaxed max-w-3xl">
              Je m'appelle Nicolas Martinico, né le 10 juillet 2004. Actuellement, je poursuis un BTS Services Informatiques aux Organisations (SIO), option Solutions d'Infrastructures, Systèmes et Réseaux (SISR). Je suis passionné par les nouvelles technologies et je m'intéresse tout particulièrement à l'administration des réseaux et à la sécurité informatique. Je compte poursuivre mes études en Licence et Master afin de développer mes connaissances en réseaux et sécurité.
            </p>
            <p className="text-gray-300 leading-relaxed max-w-3xl mt-4">
              Mon objectif à long terme est de créer ma propre entreprise spécialisée dans la gestion des parcs informatiques.
            </p>
          </div>
        </div>
      </section>

      {/* Veille Technologique */}
      <section id="veille-technologique" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Monitor className="w-8 h-8 text-blue-400 mr-4" />
            <h2 className="text-3xl font-bold">Veille technologique</h2>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
              <img 
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80"
                alt="AI in Automotive"
                className="w-full md:w-1/3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <p className="text-gray-300 leading-relaxed">
                Dans un domaine en constante évolution, il est essentiel de maintenir une veille technologique active. J'utilise des outils comme <strong>Feedly</strong>, <strong>Twitter</strong>, et des forums spécialisés pour rester informé. Mon sujet de veille technologique actuel porte sur Azure Active Directory (Azure AD, désormais appelé Entra ID) est le service cloud de gestion des identités et des accès de Microsoft. Il fournit une authentification unique et authentification multifactorielle pour aider les organisations à accéder en toute sécurité aux applications cloud et aux applications sur site.

Entra ID permet aux organisations de gérer les utilisateurs et les groupes. Il peut s'intégrer sur site Active Directory pour fournir une solution d’identité hybride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expérience */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <Briefcase className="w-8 h-8 text-blue-400 mr-4" />
            <h2 className="text-3xl font-bold">Expérience</h2>
          </div>
          <div className="space-y-12">
            <div className="border-l-4 border-blue-400 pl-6 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold mb-2">STELOGY</h3>
              <p className="text-gray-400 mb-4">2024-2025</p>
              <p className="text-gray-300">
                Alternance en tant que technicien support niveau 1 et 2 pour mon BTS SIO SISR
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-6 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold mb-2">VOIP-TELECOM</h3>
              <p className="text-gray-400 mb-4">2022-2024</p>
              <p className="text-gray-300">
                CDD en tant que technicien support niveau 1 et 2
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-6 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold mb-2">VOIP-TELECOM</h3>
              <p className="text-gray-400 mb-4">2021-2022</p>
              <p className="text-gray-300">
                Stages en administration système, gestion des droits NTFS, Active Directory, et maintenance du stock informatique
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-6 hover:border-blue-300 transition-colors">
              <h3 className="text-xl font-bold mb-2">Green Cube</h3>
              <p className="text-gray-400 mb-4">2020</p>
              <p className="text-gray-300">
                Stage en câblage réseau et gestion d'infrastructures physiques
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section id="formation" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <GraduationCap className="w-8 h-8 text-blue-400 mr-4" />
            <h2 className="text-3xl font-bold">Formation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">BTS SIO, option SISR</h3>
              <p className="text-gray-400">2023-2025 - En cours</p>
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
                alt="BTS SIO"
                className="w-full h-48 object-cover rounded-lg mt-4 hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-2">Bac Pro Systèmes Numériques</h3>
              <p className="text-gray-400">Lycée Robert Schuman, Dugny (2020-2023)</p>
              <p className="text-gray-300">Option RISC (Informatique)</p>
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
                alt="Bac Pro"
                className="w-full h-48 object-cover rounded-lg mt-4 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <Code className="w-8 h-8 text-blue-400 mr-4" />
            <h2 className="text-3xl font-bold">Compétences</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Cisco_logo_2016.svg"
                  alt="Cisco"
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-xl font-bold text-blue-400">Configuration réseau</h3>
              </div>
              <p className="text-gray-300">Configuration de switch et routeur Cisco et Netgear</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <Server className="w-12 h-12 text-blue-400 mr-4" />
                <h3 className="text-xl font-bold text-blue-400">Administration système</h3>
              </div>
              <p className="text-gray-300">Windows/Linux, Gestion des droits NTFS, Active Directory</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <Network className="w-12 h-12 text-blue-400 mr-4" />
                <h3 className="text-xl font-bold text-blue-400">Câblage réseau</h3>
              </div>
              <p className="text-gray-300">Installation complète de câblage réseau</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <Database className="w-12 h-12 text-blue-400 mr-4" />
                <h3 className="text-xl font-bold text-blue-400">Développement</h3>
              </div>
              <p className="text-gray-300">Python, MySQL - Scripts et gestion de base de données</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                  alt="Microsoft Intune"
                  className="w-12 h-12 mr-4"
                />
                <h3 className="text-xl font-bold text-blue-400">Intune</h3>
              </div>
              <p className="text-gray-300">Déploiement de logiciel et administration de conformité des postes</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-12 h-12 text-blue-400 mr-4" />
                <h3 className="text-xl font-bold text-blue-400">Communication</h3>
              </div>
              <p className="text-gray-300">Gestion client et compétences relationnelles</p>
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-12">
            <FileText className="w-8 h-8 text-blue-400 mr-4" />
            <h2 className="text-3xl font-bold">CV</h2>
          </div>
          <a 
            href="#" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Télécharger mon CV
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Nicolas Martinico. Tous droits réservés.</p>
          <p className="mt-2">
            <a href="mailto:N.Martinico@outlook.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              N.Martinico@outlook.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
