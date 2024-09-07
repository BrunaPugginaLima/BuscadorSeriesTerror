let dados = [
  {
    titulo: "Dexter",
    descrição: "Dexter é um serial killer que trabalha em um departamento de polícia. Ele só mata outros assassinos, seguindo um código pessoal. A série explora a dualidade de sua personalidade: por um lado, um assassino frio e calculista; por outro, um homem que busca conexão humana.",
    link: "https://pt.wikipedia.org/wiki/Dexter_(s%C3%A9rie_de_televis%C3%A3o)",
    tags: "Terror, Serial Killer, Crime, Drama, Psicologia, Dexter"
  },
  {
    titulo: "Bates Motel",
    descrição: "Uma pré-sequela de Psicose, a série explora a complicada relação entre Norman Bates e sua mãe, Norma Bates, e os eventos que levaram aos acontecimentos do filme original.",
    link: "https://pt.wikipedia.org/wiki/Bates_Motel",
    tags: "Terror, Suspense, Psicose, Família, Relacionamento, Bates Motel"
  },
  {
    titulo: "Stranger Things",
    descrição: "Ambientada na década de 1980, a série segue um grupo de crianças que se deparam com fenômenos sobrenaturais e uma dimensão paralela após o desaparecimento de um amigo.",
    link: "https://pt.wikipedia.org/wiki/Stranger_Things",
    tags: "Terror, Sobrenatural, Ficção Científica, Mistério, Suspense, Stranger Things, Coisas Estranhas"
  },
  {
    titulo: "The Haunting of Hill House",
    descrição: "A série segue uma família que lida com os traumas de crescer em uma casa assombrada. É uma adaptação moderna do clássico romance de Shirley Jackson.",
    link: "https://pt.wikipedia.org/wiki/The_Haunting_of_Hill_House_(s%C3%A9rie_de_televis%C3%A3o)",
    tags: "Terror, Sobrenatural, Família, Mistério, Psicologia, The Haunting of Hill House, A Assombração da Casa da Colina"
  },
  {
    titulo: "American Horror Story",
    descrição: "Cada temporada da série é uma história independente de terror, com temas variados como casas assombradas, asilos, bruxas e circos macabros.",
    link: "https://pt.wikipedia.org/wiki/American_Horror_Story",
    tags: "Terror, Antologia, Sobrenatural, Suspense, Horror, American Horror Story, História de Terror Americana"
  },
  {
    titulo: "Marianne",
    descrição: "Uma autora de romances de terror descobre que os monstros de seus livros estão se manifestando na vida real e ameaçando sua cidade natal.",
    link: "https://pt.wikipedia.org/wiki/Marianne_(s%C3%A9rie_de_televis%C3%A3o)",
    tags: "Terror, Sobrenatural, Suspense, Psicológico, França, Marianne"
  },
  {
    titulo: "Castle Rock",
    descrição: "Baseada no universo de Stephen King, a série mistura elementos de terror e suspense, explorando histórias interconectadas na fictícia cidade de Castle Rock.",
    link: "https://pt.wikipedia.org/wiki/Castle_Rock_(s%C3%A9rie_de_televis%C3%A3o)",
    tags: "Terror, Suspense, Stephen King, Sobrenatural, Mistério, Castle Rock"
  },
  {
    titulo: "Penny Dreadful",
    descrição: "A série mistura personagens literários clássicos, como Drácula e Frankenstein, em uma história de terror gótico ambientada na Londres vitoriana.",
    link: "https://pt.wikipedia.org/wiki/Penny_Dreadful",
    tags: "Terror, Gótico, Sobrenatural, Londres Vitoriana, Literatura, Penny Dreadful"
  },
  {
    titulo: "The Terror",
    descrição: "Baseada em eventos históricos e ficcionais, a série explora a jornada aterrorizante de uma expedição do século XIX que enfrenta forças sobrenaturais no Ártico.",
    link: "https://pt.wikipedia.org/wiki/The_Terror_(s%C3%A9rie_de_televis%C3%A3o)",
    tags: "Terror, Histórico, Sobrenatural, Suspense, Mistério, The Terror"
  },
  {
    titulo: "The Outsider",
    descrição: "Baseada no romance de Stephen King, a série investiga o assassinato brutal de uma criança e os eventos sobrenaturais que seguem, revelando uma presença misteriosa.",
    link: "https://pt.wikipedia.org/wiki/The_Outsider_(s%C3%A9rie_de_televis%C3%A3o)",
    tags: "Terror, Suspense, Stephen King, Mistério, Sobrenatural, The Outsider"
  },
  {
    titulo: "Servant",
    descrição: "A série segue um casal que contrata uma babá para cuidar de um bebê depois de um evento traumático, mas coisas estranhas começam a acontecer na casa.",
    link: "https://pt.wikipedia.org/wiki/Servant_(s%C3%A9rie_de_televis%C3%A3o)",
    tags: "Terror, Sobrenatural, Suspense, Mistério, Psicologia, Servant"
  },
  {
    titulo: "Hannibal",
    descrição: "A série segue a relação entre o psiquiatra Hannibal Lecter e o agente do FBI Will Graham. Hannibal é um criminoso perigoso que, por trás de sua fachada de civilidade, é um assassino em série.",
    link: "https://pt.wikipedia.org/wiki/Hannibal_(s%C3%A9rie_de_televis%C3%A3o)",
    tags: "Terror, Suspense, Crime, Psicológico, Hannibal"
  },
  {
    titulo: "Scream",
    descrição: "Baseada na franquia de filmes homônima, a série segue um grupo de adolescentes que se tornam alvos de um assassino mascarado, explorando mistérios e segredos dentro de uma pequena comunidade.",
    link: "https://pt.wikipedia.org/wiki/Scream_(s%C3%A9rie_de_televis%C3%A3o)",
    tags: "Terror, Suspense, Slasher, Mistério, Scream"
  },
  {
    titulo: "A Origem",
    descrição: "A série segue um grupo de especialistas que utilizam tecnologias avançadas para entrar nos sonhos das pessoas e extrair ou implantar ideias. É uma adaptação para série baseada no conceito do filme homônimo.",
    link: "https://pt.wikipedia.org/wiki/Inception_(s%C3%A9rie_de_televis%C3%A3o)",
    tags: "Terror, Sci-Fi, Psicológico, Mistério, A Origem"
  },
  {
    titulo: "Pânico",
    descrição: "Pânico é uma série que gira em torno de uma onda de assassinatos em uma pequena cidade, inspirada na famosa franquia de filmes. Segue um grupo de amigos enquanto eles tentam resolver o mistério e enfrentar seus próprios medos.",
    link: "https://pt.wikipedia.org/wiki/P%C3%A2nico_(s%C3%A9rie_de_televis%C3%A3o)",
    tags: "Terror, Suspense, Slasher, Mistério, Pânico"
  },
  {
    titulo: "Mindhunter",
    descrição: "A série acompanha agentes do FBI que entrevistam serial killers para entender a mente criminosa, ajudando a resolver crimes em andamento.",
    link: "https://pt.wikipedia.org/wiki/Mindhunter",
    tags: "Terror, Suspense, Crime, Psicologia, Serial Killers, Mindhunter"
  },
  {
    titulo: "True Detective",
    descrição: "Cada temporada apresenta uma história independente envolvendo detetives que lidam com casos perturbadores, misturando mistério e elementos de terror psicológico.",
    link: "https://pt.wikipedia.org/wiki/True_Detective",
    tags: "Terror, Suspense, Crime, Psicologia, Detetives, True Detective"
  },
  {
    titulo: "The Walking Dead",
    descrição: "A série segue um grupo de sobreviventes em um mundo pós-apocalíptico invadido por zumbis, enquanto enfrentam também os desafios da natureza humana.",
    link: "https://pt.wikipedia.org/wiki/The_Walking_Dead",
    tags: "Terror, Zumbis, Apocalipse, Drama, The Walking Dead"
  },
  {
    titulo: "Black Mirror",
    descrição: "Cada episódio desta antologia explora o lado sombrio da tecnologia e da sociedade moderna, com uma abordagem muitas vezes perturbadora.",
    link: "https://pt.wikipedia.org/wiki/Black_Mirror",
    tags: "Terror, Suspense, Tecnologia, Sci-Fi, Psicologia, Black Mirror"
  },
  {
    titulo: "Lovecraft Country",
    descrição: "A série mistura elementos de terror cósmico e racismo na década de 1950, enquanto os personagens enfrentam monstros literais e figurativos.",
    link: "https://pt.wikipedia.org/wiki/Lovecraft_Country",
    tags: "Terror, Sobrenatural, Racismo, Mistério, Horror Cósmico, Lovecraft Country"
  },
  {
    titulo: "The Exorcist",
    descrição: "Uma continuação moderna do clássico filme de terror, a série segue dois padres que investigam e combatem posses demoníacas.",
    link: "https://pt.wikipedia.org/wiki/The_Exorcist_(s%C3%A9rie_de_televis%C3%A3o)",
    tags: "Terror, Sobrenatural, Demônios, Suspense, Exorcismo, The Exorcist, O Exorcista"
  }
];

dados.push(
  {
    titulo: "Twin Peaks",
    descrição: "A série segue um agente do FBI que investiga o assassinato da jovem Laura Palmer em uma pequena cidade, revelando segredos obscuros e eventos sobrenaturais.",
    link: "https://pt.wikipedia.org/wiki/Twin_Peaks",
    tags: "Terror, Suspense, Mistério, Sobrenatural, Psicologia, Twin Peaks"
  },
  {
    titulo: "Channel Zero",
    descrição: "Cada temporada desta série antológica é baseada em populares histórias de terror da internet conhecidas como creepypastas.",
    link: "https://pt.wikipedia.org/wiki/Channel_Zero",
    tags: "Terror, Sobrenatural, Suspense, Antologia, Creepy, Channel Zero"
  },
  {
    titulo: "Slasher",
    descrição: "Cada temporada desta série antológica segue um grupo de personagens que são perseguidos por um assassino misterioso, em cenários e situações diferentes.",
    link: "https://pt.wikipedia.org/wiki/Slasher_(s%C3%A9rie_de_TV)",
    tags: "Terror, Suspense, Slasher, Crime, Mistério, Slasher"
  },
  {
    titulo: "The Purge",
    descrição: "Baseada na franquia de filmes de mesmo nome, a série acompanha personagens que lutam para sobreviver em uma noite anual onde todos os crimes são permitidos.",
    link: "https://pt.wikipedia.org/wiki/The_Purge_(s%C3%A9rie_de_TV)",
    tags: "Terror, Suspense, Crime, Distopia, Ação, The Purge, Uma Noite de Crime"
  },
  {
    titulo: "The Mist",
    descrição: "Baseada na obra de Stephen King, a série segue uma pequena cidade que é envolta por uma névoa misteriosa que traz consigo criaturas mortais.",
    link: "https://pt.wikipedia.org/wiki/The_Mist_(s%C3%A9rie_de_televis%C3%A3o)",
    tags: "Terror, Suspense, Sobrenatural, Criaturas, Stephen King, The Mist, O Nevoeiro"
  },
  {
    titulo: "Lore",
    descrição: "Uma série antológica baseada no popular podcast de mesmo nome, que explora mitos e lendas de terror e suas raízes na história real.",
    link: "https://pt.wikipedia.org/wiki/Lore_(s%C3%A9rie_de_TV)",
    tags: "Terror, Suspense, Lendas, História, Sobrenatural, Lore"
  },
  {
    titulo: "Outcast",
    descrição: "A série segue Kyle Barnes, um homem que foi atormentado por possessões demoníacas ao longo de sua vida, enquanto ele tenta encontrar respostas.",
    link: "https://pt.wikipedia.org/wiki/Outcast_(s%C3%A9rie_de_TV)",
    tags: "Terror, Suspense, Sobrenatural, Demônios, Mistério, Outcast"
  },
  {
    titulo: "The Strain",
    descrição: "Uma epidemia viral transforma as pessoas em criaturas semelhantes a vampiros, enquanto um grupo de sobreviventes tenta conter o surto.",
    link: "https://pt.wikipedia.org/wiki/The_Strain",
    tags: "Terror, Vampiros, Apocalipse, Sobrenatural, Epidemia, The Strain"
  },
  {
    titulo: "Hemlock Grove",
    descrição: "Segredos obscuros e estranhos eventos cercam uma pequena cidade, onde crimes horríveis e seres sobrenaturais coexistem.",
    link: "https://pt.wikipedia.org/wiki/Hemlock_Grove",
    tags: "Terror, Sobrenatural, Mistério, Lobisomens, Vampiros, Hemlock Grove"
  },
  {
    titulo: "Midnight Mass",
    descrição: "A série acompanha os eventos sobrenaturais que ocorrem em uma pequena ilha isolada, após a chegada de um carismático padre.",
    link: "https://pt.wikipedia.org/wiki/Midnight_Mass",
    tags: "Terror, Sobrenatural, Religião, Mistério, Suspense, Midnight Mass"
  },
  {
    titulo: "Dracula",
    descrição: "Uma nova adaptação do clássico de Bram Stoker, que reimagina a história de Drácula enquanto ele lida com o caçador de vampiros Van Helsing.",
    link: "https://pt.wikipedia.org/wiki/Dracula_(s%C3%A9rie_de_TV)",
    tags: "Terror, Vampiros, Sobrenatural, Suspense, Drama, Dracula"
  },
  {
    titulo: "Ratched",
    descrição: "A série explora a origem da enfermeira Mildred Ratched, do romance Um Estranho no Ninho, revelando seu lado sombrio e perturbador.",
    link: "https://pt.wikipedia.org/wiki/Ratched_(s%C3%A9rie_de_TV)",
    tags: "Terror, Suspense, Psicologia, Drama, Crime, Ratched"
  },
  {
    titulo: "Evil",
    descrição: "Um psicólogo, um padre e um empreiteiro investigam eventos sobrenaturais e casos de possessão demoníaca, tentando distinguir entre o paranormal e o psicológico.",
    link: "https://pt.wikipedia.org/wiki/Evil_(s%C3%A9rie_de_TV)",
    tags: "Terror, Sobrenatural, Psicologia, Demônios, Mistério, Evil"
  },
  {
    titulo: "The Witcher",
    descrição: "A série segue Geralt de Rivia, um caçador de monstros em um mundo cheio de criaturas sobrenaturais, magia e intriga política.",
    link: "https://pt.wikipedia.org/wiki/The_Witcher_(s%C3%A9rie_de_TV)",
    tags: "Terror, Fantasia, Magia, Criaturas, Aventura, The Witcher"
  },
  {
    titulo: "Lovecraftian Horrors",
    descrição: "Esta série explora os horrores cósmicos inspirados nos trabalhos de H.P. Lovecraft, focando em temas como insanidade, criaturas e o desconhecido.",
    link: "#",
    tags: "Terror, Horror Cósmico, Sobrenatural, Criaturas, Insanidade, Lovecraft"
  },
  {
    titulo: "The Walking Dead",
    descrição: "Em um mundo pós-apocalíptico, um grupo de sobreviventes tenta encontrar segurança enquanto enfrenta hordas de zumbis e outros perigos.",
    link: "https://pt.wikipedia.org/wiki/The_Walking_Dead",
    tags: "Terror, Suspense, Zumbis, Apocalipse, Drama, The Walking Dead"
  },
  {
    titulo: "Fear the Walking Dead",
    descrição: "Prequel de The Walking Dead, a série segue o início do apocalipse zumbi e como as pessoas lutam para sobreviver.",
    link: "https://pt.wikipedia.org/wiki/Fear_the_Walking_Dead",
    tags: "Terror, Suspense, Zumbis, Apocalipse, Drama, Fear the Walking Dead"
  },
  {
    titulo: "The Stand",
    descrição: "Baseada no romance de Stephen King, a série acompanha os sobreviventes de uma praga global enquanto enfrentam forças do bem e do mal.",
    link: "https://pt.wikipedia.org/wiki/The_Stand",
    tags: "Terror, Suspense, Apocalipse, Stephen King, Sobrenatural, The Stand"
  },
  {
    titulo: "Black Summer",
    descrição: "No início de um apocalipse zumbi, um grupo de sobreviventes tenta se manter vivo enfrentando ameaças constantes.",
    link: "https://pt.wikipedia.org/wiki/Black_Summer",
    tags: "Terror, Suspense, Zumbis, Apocalipse, Drama, Black Summer"
  },
  {
    titulo: "Truth Seekers",
    descrição: "Investigadores paranormais amadores descobrem uma conspiração global enquanto investigam eventos sobrenaturais.",
    link: "https://pt.wikipedia.org/wiki/Truth_Seekers",
    tags: "Terror, Suspense, Sobrenatural, Comédia, Mistério, Truth Seekers"
  },
  {
    titulo: "Lovecraft Country",
    descrição: "Misturando terror sobrenatural e comentários sociais, a série acompanha uma família afro-americana enfrentando racismo e criaturas de pesadelo nos anos 1950.",
    link: "https://pt.wikipedia.org/wiki/Lovecraft_Country",
    tags: "Terror, Suspense, Sobrenatural, Racismo, Criaturas, Lovecraft Country"
  },
  {
    titulo: "The Twilight Zone",
    descrição: "Uma antologia que explora histórias de terror, ficção científica e suspense, cada episódio com uma narrativa independente.",
    link: "https://pt.wikipedia.org/wiki/The_Twilight_Zone",
    tags: "Terror, Suspense, Ficção Científica, Sobrenatural, Antologia, The Twilight Zone, Além da Imaginação"
  },
  {
    titulo: "The X-Files",
    descrição: "Os agentes do FBI Fox Mulder e Dana Scully investigam casos paranormais e conspirações do governo.",
    link: "https://pt.wikipedia.org/wiki/The_X-Files",
    tags: "Terror, Suspense, Sobrenatural, Mistério, Ficção Científica, The X-Files, Arquivo X"
  },
  {
    titulo: "Them",
    descrição: "Uma família negra se muda para um bairro branco na década de 1950, onde enfrentam eventos sobrenaturais e racismo extremo.",
    link: "https://pt.wikipedia.org/wiki/Them_(s%C3%A9rie_de_televis%C3%A3o)",
    tags: "Terror, Suspense, Sobrenatural, Racismo, Psicologia, Them"
  },
  {
    titulo: "Supernatural",
    descrição: "Os irmãos Winchester caçam criaturas sobrenaturais, demônios e fantasmas enquanto descobrem segredos sobre sua família.",
    link: "https://pt.wikipedia.org/wiki/Supernatural",
    tags: "Terror, Sobrenatural, Demônios, Fantasmas, Mistério, Supernatural"
  },
  {
    titulo: "Goosebumps",
    descrição: "Baseada na famosa série de livros de terror infantil, a série apresenta histórias assustadoras para jovens espectadores.",
    link: "https://pt.wikipedia.org/wiki/Goosebumps",
    tags: "Terror, Suspense, Sobrenatural, Infantil, Mistério, Goosebumps, Arrepios"
  },
  {
    titulo: "The Fear",
    descrição: "Uma série de terror psicológico que explora os medos mais profundos dos personagens enquanto eles enfrentam situações sinistras.",
    link: "#",
    tags: "Terror, Suspense, Psicologia, Sobrenatural, Mistério, The Fear"
  },
  {
    titulo: "Dead of Summer",
    descrição: "Em um acampamento de verão, eventos sobrenaturais e forças do mal começam a assombrar os campistas e conselheiros.",
    link: "https://pt.wikipedia.org/wiki/Dead_of_Summer",
    tags: "Terror, Suspense, Sobrenatural, Mistério, Verão, Dead of Summer"
  },
  {
    titulo: "Creepshow",
    descrição: "Uma antologia de terror baseada no filme de 1982, que apresenta histórias assustadoras e macabras.",
    link: "https://pt.wikipedia.org/wiki/Creepshow_(s%C3%A9rie_de_TV)",
    tags: "Terror, Suspense, Antologia, Sobrenatural, Mistério, Creepshow"
  },
  {
    titulo: "Into the Dark",
    descrição: "Uma série antológica de terror, onde cada episódio é inspirado em um feriado específico, abordando diferentes medos e terrores.",
    link: "https://pt.wikipedia.org/wiki/Into_the_Dark_(s%C3%A9rie_de_TV)",
    tags: "Terror, Suspense, Antologia, Sobrenatural, Festividades, Into the Dark"
  },
  {
    titulo: "Bly Manor",
    descrição: "Sequência de The Haunting of Hill House, a série segue a história de uma governanta que lida com eventos sobrenaturais em uma mansão assombrada.",
    link: "https://pt.wikipedia.org/wiki/The_Haunting_of_Bly_Manor",
    tags: "Terror, Sobrenatural, Fantasmas, Mansão, Psicologia, Bly Manor, A Maldição da Mansão Bly"
  },
  {
    titulo: "Bloodride",
    descrição: "Uma série de antologia norueguesa de terror que mistura elementos de horror e comédia sombria em histórias independentes.",
    link: "https://pt.wikipedia.org/wiki/Bloodride",
    tags: "Terror, Suspense, Antologia, Horror, Comédia, Bloodride"
  },
  {
    titulo: "Chilling Adventures of Sabrina",
    descrição: "Uma versão mais sombria de Sabrina, a Aprendiz de Feiticeira, com temas de terror e ocultismo.",
    link: "https://pt.wikipedia.org/wiki/Chilling_Adventures_of_Sabrina",
    tags: "Terror, Sobrenatural, Ocultismo, Magia, Feitiçaria, Sabrina"
  },
  {
    titulo: "The Order",
    descrição: "Um estudante universitário se junta a uma sociedade secreta e descobre um mundo de magia, lobisomens e forças sombrias.",
    link: "https://pt.wikipedia.org/wiki/The_Order_(s%C3%A9rie_de_TV)",
    tags: "Terror, Sobrenatural, Magia, Lobisomens, Mistério, The Order"
  },
  {
    titulo: "Constantine",
    descrição: "Baseada nos quadrinhos Hellblazer, a série segue John Constantine, um exorcista e detetive paranormal que luta contra forças demoníacas.",
    link: "https://pt.wikipedia.org/wiki/Constantine_(s%C3%A9rie_de_TV)",
    tags: "Terror, Sobrenatural, Demônios, Magia, Ocultismo, Constantine"
  },
  {
    titulo: "The Path",
    descrição: "Uma série sobre um grupo religioso que começa a mostrar elementos de culto, com temas de suspense psicológico e manipulação.",
    link: "https://pt.wikipedia.org/wiki/The_Path",
    tags: "Terror, Suspense, Psicologia, Culto, Religião, Drama, The Path"
  },
  {
    titulo: "Ghoul",
    descrição: "Uma série indiana de terror e ficção científica, onde um prisioneiro em um centro de detenção militar revela eventos sobrenaturais e assustadores.",
    link: "https://pt.wikipedia.org/wiki/Ghoul_(s%C3%A9rie_de_TV)",
    tags: "Terror, Sobrenatural, Ficção Científica, Suspense, Ghoul"
  },
  {
    titulo: "The River",
    descrição: "Uma equipe de resgate viaja pela Amazônia para encontrar um explorador desaparecido, apenas para encontrar horrores sobrenaturais.",
    link: "https://pt.wikipedia.org/wiki/The_River_(s%C3%A9rie_de_TV)",
    tags: "Terror, Suspense, Sobrenatural, Amazônia, Mistério, The River"
  }
);

