export default {
  name: 'CV',
  data () {
    return {
      jobLifeLine : [
        {
          order: 0,
          name: 'Expérience',
          items: [
            {
              type: 'event',
              name : 'Déploiement de l’application MoeCAT sur la tournée Calogero',
              date: 'mars. 2018',
              organisation: 'MECAoctet',
              description: 'Déploiement de l’application MoeCAT sur la tournée 2018 de Calogero. MoeCAT est une application industrielle de pilotage de moteurs asservis. L’application est dédiée au monde du spectacle.'
            },
            {
              type: 'event',
              name : 'Lancement de l’application TAD',
              date: 'sept. 2017',
              organisation: 'ProximCréation',
              description: 'Publication de l’appli mobile "TAD". Application d’aide au diagnostic pour les médecins urgentistes'
            },
            {
              date: 'depuis 2017',
              organisation: 'MECAoctet (SARL)',
              location: 'Pechbonnieu (31)',
              position: 'Gérant, Développeur IHM, Graphiste 2D/3D'
            },
            {
              date: 'depuis 2010',
              organisation: 'ProximCréation (SARL)',
              location: 'Pechbonnieu (31)',
              position: 'Gérant, Développeur web fullstack, Intégrateur, Graphiste 2D/3D'
            },
            {
              date: '2005-2010',
              organisation: 'Atos',
              location: 'Toulouse (31)',
              position: 'Développeur Java embarqué'
            }
          ]
        },
        {
          order: 1,
          name: 'Formation',
          items: [
            {
              date: '2002-2005',
              organisation: 'ENSEEIHT',
              location: 'Toulouse (31)',
              position: 'Diplôme d’Ingénieur en Informatique et Mathématiques appliquées - option Multimédia'
            },
            {
              date: '2000-2002',
              organisation: 'Lycée Potier',
              location: 'Orléans (45)',
              position: 'PCSI / PSI* / concours commun polytechnique'
            },
            {
              date: '2000',
              organisation: 'Lycée Claude de France',
              location: 'Romorantin (41)',
              position: 'Bac S, spécialité Mathématiques'
            }
          ],
        },
      ],
      hobbies: [
        {
          order: 0,
          name: 'Hobbies',
          items: [
            {
              date: 'depuis 2004',
              organisation: 'Association Tactikollectif',
              location: 'Toulouse (31)',
              position: 'Bénévole technique / montage de concerts / de festivals'
            },
            {
              date: 'depuis 2011',
              organisation: 'Gimmick Five Syndicate (Fanfare)',
              location: 'Toulouse (31)',
              position: 'Tromboniste'
            },
            {
              date: 'depuis 2015',
              organisation: 'APEEL (association  de parents d’élèves)',
              location: 'Labastide-saint-sernin (31)',
              position: 'Vice président / Responsable com’'
            }
          ]
        }
      ],
      skills: [
        {
          name: 'Domaines',
          items: [
            {name: 'Web design', n: 3},
            {name: 'Dév. web Frontend', n: 3},
            {name: 'Dév. web Backend', n: 2},
            {name: 'Conception base de données SQL / NOSQL', n: 2},
            {name: 'Dév. mobile hybride / apps. universelles', n: 2},
            {name: 'Gestion hébergement / configuration DNS', n: 2},
            {name: 'Gestion d’entreprise', n: 2}
          ]
        },
        {
          name: 'Langages / frameworks',
          items: [
            {name: 'Javascript', n: 3},
            {name: 'AngularJS', n: 3},
            {name: 'VueJS', n: 3},
            {name: 'Electron', n: 3},
            {name: 'D3.js', n: 2},
            {name: 'HTML5 / CSS3', n: 3},
            {name: 'Node.js', n: 2},
            {name: 'Feathers.js', n: 2},
            {name: 'Keystone.js', n: 3},
            {name: 'PHP', n: 2},
            {name: 'Joomla', n: 3},
            {name: 'Wordpress', n: 2},
            {name: 'Python', n: 2},
            {name: 'Bash', n: 2},
            {name: 'Java', n: 2},
            {name: 'Lua', n: 1},
            {name: 'C', n: 1},
          ]
        },
        {
          name: 'Logiciels',
          items: [
            {name: 'Inkscape', n: 3},
            {name: 'Gimp', n: 3},
            {name: 'Kdenlive', n: 3},
            {name: 'Blender', n: 3},
            {name: 'Natron', n: 1},
            {name: 'TileMill', n: 2},
          ]
        },
        {
          name: 'OS / plateformes',
          items: [
            {name: 'Linux', n: 3},
            {name: 'Windows', n: 3},
            {name: 'Raspberry pi', n: 3}
          ]
        },
      ]
    }
  },
  methods: {
  },
  created () {
  }
}