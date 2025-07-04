import Layout from '../components/layout'
import { useState } from 'react'

const stages = [
  { key: 'infancy', label: 'Infância (0-12)' },
  { key: 'adolescence', label: 'Adolescência (13-19)' },
  { key: 'youth', label: 'Juventude (20-29)' },
  { key: 'maturity', label: 'Maturidade (30-49)' },
  { key: 'present', label: 'Atualidade (50+)' },
]

export default function BiographyPage() {
  const [stage, setStage] = useState('infancy')
  const [filtersOpen, setFiltersOpen] = useState(false)

  return (
    <Layout>
      <div className="w-full max-w-2xl mx-auto">
        {/* Filter buttons: top right if open, center otherwise */}
        {filtersOpen ? (
          <div className="fixed top-6 right-8 z-50 flex items-center space-x-2 animate-fade-in">
            {stages.map(({ key, label }) => (
              <button
                key={key}
                className={`px-4 py-2 rounded-full border text-xs font-semibold transition-colors duration-200 focus:outline-none ${stage === key ? 'bg-lightBlue-600 text-white dark:bg-pink-500' : 'bg-white dark:bg-blueGray-800 border-gray-300 dark:border-white text-gray-800 dark:text-white hover:bg-lightBlue-100 dark:hover:bg-pink-600'}`}
                onClick={() => setStage(key)}
              >
                {label}
              </button>
            ))}
            {/* Close button */}
            <button
              className="w-8 h-8 flex items-center justify-center text-xl border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500 ml-2"
              onClick={() => setFiltersOpen(false)}
              aria-label="Close filter menu"
            >
              ×
            </button>
          </div>
        ) : (
          <div className="flex justify-center mb-8 space-x-2">
            {stages.map(({ key, label }) => (
              <button
                key={key}
                className={`px-4 py-2 rounded-full border text-xs font-semibold transition-colors duration-200 focus:outline-none ${stage === key ? 'bg-lightBlue-600 text-white dark:bg-pink-500' : 'bg-white dark:bg-blueGray-800 border-gray-300 dark:border-white text-gray-800 dark:text-white hover:bg-lightBlue-100 dark:hover:bg-pink-600'}`}
                onClick={() => setStage(key)}
              >
                {label}
              </button>
            ))}
            {/* Open filter menu button */}
            <button
              className="w-8 h-8 flex items-center justify-center text-xl border border-gray-300 rounded-full dark:hover:border-pink-500 dark:border-white focus:outline-none hover:text-lightBlue-600 hover:border-lightBlue-600 dark:hover:text-pink-500 ml-2"
              onClick={() => setFiltersOpen(true)}
              aria-label="Open filter menu"
            >
              +
            </button>
          </div>
        )}
        {/* Content for each stage */}
        <div className="bg-white dark:bg-blueGray-800 rounded-xl shadow p-6 min-h-[200px] border border-gray-200 dark:border-blueGray-600">
          {stage === 'infancy' && (
            <div>
              <h2 className="text-lg font-bold mb-2">Infância</h2>
              <p className="text-gray-700 dark:text-gray-200">Conte aqui sobre sua infância, família, primeiras experiências e aprendizados.</p>
            </div>
          )}
          {stage === 'adolescence' && (
            <div>
              <h2 className="text-lg font-bold mb-2">Adolescência</h2>
              <p className="text-gray-700 dark:text-gray-200">Conte sobre sua adolescência, escola, amizades, descobertas e desafios.</p>
            </div>
          )}
          {stage === 'youth' && (
            <div>
              <h2 className="text-lg font-bold mb-2">Juventude</h2>
              <p className="text-gray-700 dark:text-gray-200">Compartilhe sua juventude, início da carreira, estudos, viagens e conquistas.</p>
            </div>
          )}
          {stage === 'maturity' && (
            <div>
              <h2 className="text-lg font-bold mb-2">Maturidade</h2>
              <p className="text-gray-700 dark:text-gray-200">Fale sobre sua maturidade, grandes projetos, família, aprendizados e evolução.</p>
            </div>
          )}
          {stage === 'present' && (
            <div>
              <h2 className="text-lg font-bold mb-2">Atualidade</h2>
              <p className="text-gray-700 dark:text-gray-200">Descreva sua fase atual, visão de futuro, valores e o que te motiva hoje.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
} 