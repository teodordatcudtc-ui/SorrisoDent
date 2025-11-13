'use client'

import { useState } from 'react'
import Image from 'next/image'
import { HiFlag, HiSparkles, HiStar, HiOfficeBuilding, HiShieldCheck, HiEmojiHappy } from 'react-icons/hi'

export default function DespreNoi() {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({})
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-aqua-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-gray-900">
                Despre Sorriso Dent
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                La Sorriso Dent, ne dedicăm să oferim servicii dentare de cea mai înaltă calitate,
                într-un mediu modern, confortabil și prietenos.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Cu o experiență de peste 15 ani în domeniul stomatologiei, echipa noastră de
                profesioniști este dedicată să vă ofere cele mai bune tratamente dentare, folosind
                tehnologii de ultimă generație și materiale premium.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-slide-in-right">
              {imageErrors['about-hero'] ? (
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-aqua-400"></div>
              ) : (
                <Image
                  src="/images/about-hero.jpg"
                  alt="Sorriso Dent - Experiență"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={() => setImageErrors(prev => ({ ...prev, 'about-hero': true }))}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/80 to-aqua-400/80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-serif font-bold mb-2">15+</div>
                  <div className="text-xl">Ani de experiență</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-primary-50 to-transparent hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiFlag className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Misiunea Noastră</h3>
              <p className="text-gray-600">
                Să oferim servicii dentare de excelentă, într-un mediu sigur și confortabil,
                punând sănătatea și satisfacția pacienților noștri pe primul loc.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-aqua-50 to-transparent hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-aqua-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HiSparkles className="w-8 h-8 text-aqua-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Valorile Noastre</h3>
              <p className="text-gray-600">
                Profesionalism, integritate, inovație și dedicare sunt valorile care ne ghidează
                în fiecare zi și în fiecare tratament.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-accent-gold-light/30 to-transparent hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                <HiStar className="w-8 h-8 text-accent-gold-dark" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">Viziunea Noastră</h3>
              <p className="text-gray-600">
                Să devenim referința în domeniul stomatologiei din București, prin servicii
                premium și experiențe memorabile pentru pacienții noștri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gradient-to-b from-white to-primary-50/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Echipa Noastră
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O echipă de profesioniști dedicați, cu experiență vastă în domeniul stomatologiei
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Maria Popescu',
                role: 'Medic Stomatolog Principal',
                description: 'Specializată în implantologie și estetică dentară, cu peste 15 ani de experiență.',
              },
              {
                name: 'Dr. Alexandru Ionescu',
                role: 'Medic Stomatolog',
                description: 'Specialist în ortodonție și protetică dentară, cu abordare modernă și eficientă.',
              },
              {
                name: 'Dr. Elena Georgescu',
                role: 'Medic Stomatolog',
                description: 'Expertă în endodonție și tratamente conservatoare, dedicată sănătății dentare.',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-400 to-aqua-400 flex items-center justify-center text-4xl text-white font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-serif font-bold text-center mb-2 text-gray-900">
                  {member.name}
                </h3>
                <p className="text-primary-600 text-center font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
              Cabinetul Nostru
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un spațiu modern, echipat cu tehnologie de ultimă generație
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <HiOfficeBuilding className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-gray-900">
                    Echipament Modern
                  </h3>
                  <p className="text-gray-600">
                    Cabinetul nostru este dotat cu echipamente de ultimă generație pentru tratamente
                    precise și confortabile.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-aqua-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <HiShieldCheck className="w-6 h-6 text-aqua-600" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-gray-900">
                    Standarde de Igienă
                  </h3>
                  <p className="text-gray-600">
                    Respectăm cele mai stricte standarde de igienă și sterilizare pentru siguranța
                    pacienților noștri.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-gold-light rounded-full flex items-center justify-center flex-shrink-0">
                  <HiEmojiHappy className="w-6 h-6 text-accent-gold-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-gray-900">
                    Mediu Confortabil
                  </h3>
                  <p className="text-gray-600">
                    Am creat un mediu relaxant și prietenos, unde vă puteți simți confortabil
                    în timpul tratamentelor.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              {imageErrors['cabinet'] ? (
                <div className="w-full h-full bg-gradient-to-br from-primary-300 to-aqua-300"></div>
              ) : (
                <Image
                  src="/images/cabinet.jpg"
                  alt="Cabinet Sorriso Dent"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={() => setImageErrors(prev => ({ ...prev, 'cabinet': true }))}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-300/40 to-aqua-300/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <HiSparkles className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-2xl font-serif font-bold">Spațiu Premium</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

