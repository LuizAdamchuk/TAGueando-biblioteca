export const testaCNPJ = cnpj => {
  cnpj = cnpj.replace(/[^\d]+/g, '');

  if (cnpj == '') return false;

  if (cnpj.length != 14) return false;

  // Elimina CNPJs invalidos conhecidos
  if (
    cnpj == '00000000000000' ||
    cnpj == '11111111111111' ||
    cnpj == '22222222222222' ||
    cnpj == '33333333333333' ||
    cnpj == '44444444444444' ||
    cnpj == '55555555555555' ||
    cnpj == '66666666666666' ||
    cnpj == '77777777777777' ||
    cnpj == '88888888888888' ||
    cnpj == '99999999999999'
  )
    return false;

  // Valida DVs
  tamanho = cnpj.length - 2;
  numeros = cnpj.substring(0, tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;

  return true;
};

export const testaCPF = cpf => {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf == '') {
    return false;
  }
  if (
    cpf.length != 11 ||
    cpf == '00000000000' ||
    cpf == '11111111111' ||
    cpf == '22222222222' ||
    cpf == '33333333333' ||
    cpf == '44444444444' ||
    cpf == '55555555555' ||
    cpf == '66666666666' ||
    cpf == '77777777777' ||
    cpf == '88888888888' ||
    cpf == '99999999999'
  ) {
    return false;
  }
  add = 0;
  for (i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(9))) {
    return false;
  }
  add = 0;
  for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(10))) {
    return false;
  }
  return true;
};

export const checkDates = date => {
  const today = new Date();
  const splitedDate = date.split('/');
  if (splitedDate.length !== 3) {
    return 'Data não informada';
  } else {
    const diaAtual = today.getDate();
    const mesAtual = today.getMonth() + 1;
    const anoAtual = today.getFullYear();
    const dia = parseInt(splitedDate[0]);
    const mes = parseInt(splitedDate[1]);
    const ano = parseInt(splitedDate[2]);
    if (dia < 1 || dia > 31) {
      return 'Data inválida';
    } else if (ano > anoAtual) {
      return 'Esse dia ainda não chegou :(';
    } else if (
      !(ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) &&
      dia === 29 &&
      mes === 2
    ) {
      return 'Esse ano não foi bissexto :(';
    } else if (dia > 29 && mes === 2) {
      return 'Data inválida';
    } else if (mes < 1 || mes > 12) {
      return 'Data inválida';
    } else if (ano < 1700 && ano > 3000) {
      return 'Data inválida';
    } else if (
      dia > 30 &&
      (mes === 2 || mes === 4 || mes === 6 || mes === 9 || mes === 11)
    ) {
      return 'Data inválida';
    } else if (ano > anoAtual) {
      return 'Esse dia ainda não chegou :(';
    } else if (ano === anoAtual && mes > mesAtual) {
      return 'Esse dia ainda não chegou :(';
    } else if (ano === anoAtual && mes === mesAtual && dia > diaAtual) {
      return 'Esse dia ainda não chegou :(';
    }
  }
  return;
};

export const getCardFlag = number => {
  let cardnumber = number.replace(/[^0-9]+/g, '');

  let cards = {
    Visa: /^4[0-9]{12}(?:[0-9]{3})/,
    Master: /^5[1-5][0-9]{14}/,
    Amex: /^3[47][0-9]{13}/,
    Elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
    Aura: /^(5078\d{2})(\d{2})(\d{11})$/,
    JCB: /^(?:2131|1800|35\d{3})\d{11}/,
    Diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
    Discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
    Hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
  };

  for (let flag in cards) {
    if (cards[flag].test(cardnumber)) {
      return flag;
    }
  }

  return false;
};

export const adjustDate = date => {
  date = date.split('/').reverse().join('-');

  return new Date(
    new Date(date).getTime() - new Date(date).getTimezoneOffset() * -60000,
  );
};

export const getLength = string => {
  if (string == null) return 0;
  else return string.trim().length;
};

export const testaUrl = url => {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + //port
    '(\\?[;&amp;a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  );
  return pattern.test(url);
};

export const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
