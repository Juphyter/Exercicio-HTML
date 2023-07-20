function Heroi (nome, anoDeInicio, poder, paisDeDefesa, orcamento) {
    this.nome = nome;
    this.anoDeInicio = anoDeInicio;
    this.poder = poder;
    this.paisDeDefesa = paisDeDefesa;
    let _orcamento = orcamento;

    this.getOrcamento = function() {
        return _orcamento;
    }
    this.setOrcamento = function(valor) {
        if (typeof valor === 'number') {
            _orcamento = valor;
        }
    }

    this.aumento = function() {
        const novoOrcamento = this.getOrcamento() * 1.15;
        this.setOrcamento(novoOrcamento);
    }
}

function HeroiClasseA (nome, anoDeInicio, poder, paisDeDefesa, orcamento) {
    Heroi.call(this, nome, anoDeInicio, poder, paisDeDefesa, orcamento)

    this.aumento = function() {
        const novoOrcamento = this.getOrcamento() * 1.3;
        this.setOrcamento(novoOrcamento);
    }
}

function HeroiClasseS (nome, anoDeInicio, poder, paisDeDefesa, orcamento) {
    Heroi.call(this, nome, anoDeInicio, poder, paisDeDefesa, orcamento)

    this.aumento = function() {
        const novoOrcamento = this.getOrcamento() * 1.8;
        this.setOrcamento(novoOrcamento);
    }
}

const heroi1 = new Heroi("Endeavor", 2018, "Fogo", "Brasil", 25000);
const heroiClasseA_1 = new HeroiClasseA ("All Might", 2022, "Vazio", "EUA", 40000);
const HeroiClasseS_1 = new HeroiClasseS ("Goku", 2015, "Força", "Japão", 90000);

heroi1.aumento();
console.log(`O heroi ${heroi1.nome} se alistou em ${heroi1.anoDeInicio} com o poder de ${heroi1.poder}, atualmente defende o ${heroi1.paisDeDefesa} com um orçamento de U$${heroi1.getOrcamento().toFixed(2)} dolares.`);

heroiClasseA_1.aumento();
console.log(`O heroi ${heroiClasseA_1.nome} se alistou em ${heroiClasseA_1.anoDeInicio} com o poder de ${heroiClasseA_1.poder}, atualmente defende o ${heroiClasseA_1.paisDeDefesa} com um orçamento de U$${heroiClasseA_1.getOrcamento().toFixed(2)} dolares.`)

HeroiClasseS_1.aumento();
console.log(`O heroi ${HeroiClasseS_1.nome} se alistou em ${HeroiClasseS_1.anoDeInicio} com o poder de ${HeroiClasseS_1.poder}, atualmente defende o ${HeroiClasseS_1.paisDeDefesa} com um orçamento de U$${HeroiClasseS_1.getOrcamento().toFixed(2)} dolares.`)