script const caixaPrincipal = document.querySelector(".caixa-principal"); 
const caixaPerguntas = document.querySelector(".caixa-perguntas"); 
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado"); 
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
  { 
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?", 
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
      },
      { texto: "Isso é maravilhoso!",
       afirmacao: "Quis saber como usar IA no seu dia a dia."
      }
    ]
  },
  {
    enunciado : "com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?", 
   alternativas: [
     {
       texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.", 
       afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
     },
     {
       texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.", 
       afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
     }
   ]
  },
  {
    enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?", 
    alternativas: [
      { 
        texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.", 
        afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
      },
      { 
        texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
        afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
      } 
    ] 
  }, 
  { 
    enunciado: "Ao final da discussão,você precisou criar
  
