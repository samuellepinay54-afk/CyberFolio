// Netlify Function to get projects
// This can be extended to fetch from a database or external API

export const handler = async (event, context) => {
  // Static projects data
  // In production, you can fetch from Netlify DB, external API, or CMS
  const projects = [
    {
      id: 1,
      title: '🔐 Audit de Sécurité – Site E-commerce Shopify',
      description:
        'Audit de sécurité non intrusif d\'un site e-commerce Shopify pour identifier les faiblesses de configuration et évaluer la surface d\'attaque exposée.',
      tags: ['Audit', 'OWASP', 'Shopify', 'Blue Team'],
      link: '#',
      github: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Machine HTB - [Nom de la machine]',
      description:
        'Machine résolue avec accès root. Write-up publié sur GitHub avec méthodologie détaillée.',
      tags: ['Pentest', 'HTB', 'Linux', 'PrivEsc'],
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'CTF Challenge - Web Exploitation',
      description:
        'Résolution de challenges CTF avec focus sur l\'exploitation web et les vulnérabilités OWASP Top 10.',
      tags: ['CTF', 'Web', 'OWASP', 'Exploitation'],
      link: '#',
      github: '#',
    },
  ]

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(projects),
  }
}

