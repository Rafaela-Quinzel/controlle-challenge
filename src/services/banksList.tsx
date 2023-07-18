import axios from 'axios';

export const fetchBanks = async (setData: any) => {
    await axios.get('https://brasilapi.com.br/api/banks/v1')
        .then(response => {
            setData(response.data);
        }).catch(error => {
            console.log(error.message);
        });
}

// Dados mocados com alguns nomes de bancos brasileiros para testes.
export const mockListBank = [
    {
        value: "001",
        label: "Banco do Brasil"
    },
    {
        value: "104",
        label: "Caixa Econômica Federal"
    },
    {
        value: "237",
        label: "Banco Bradesco"
    },
    {
        value: "341",
        label: "Banco Itaú"
    },
    {
        value: "033",
        label: "Banco Santander"
    },
    {
        value: "422",
        label: "Banco Safra"
    },
    {
        value: "208",
        label: "Banco BTG Pactual"
    },
    {
        value: "212",
        label: "Banco Original"
    },
    {
        value: "077",
        label: "Banco Inter"
    },
    {
        value: "643",
        label: "Banco Pine"
    },
    {
        value: "623",
        label: "Banco Pan"
    },
    {
        value: "707",
        label: "Banco Daycoval"
    },
    {
        value: "655",
        label: "Banco Votorantim"
    },
    {
        value: "318",
        label: "Banco BMG"
    },
    {
        value: "633",
        label: "Banco Renner"
    },
    {
        value: "735",
        label: "Banco Neon"
    },
    {
        value: "336",
        label: "Banco C6 Bank"
    },
    {
        value: "746",
        label: "Banco Modal"
    },
    {
        value: "637",
        label: "Banco Sofisa"
    },
    {
        value: "246",
        label: "Banco ABC Brasil"
    }
];

