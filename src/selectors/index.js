export const sanitizeArgonauteInput = (author) => {
  // on vérifie que le champ n'est pas vide ou ne contient pas que des espaces
  if (!author || !author.trim()) {
    alert("le champ doit être rempli");
    return;
  }

  // on retire les espaces blancs au début et à la fin du nom, et on rejette les chiffres
  let authorRegEx = author
    .trimStart()
    .trimEnd()
    .match(/[a-zA-Z'éèàêöï]+/g)

  // on verifie apres cette opération que la valuer du champ ne soit pas vide
  if (authorRegEx !==null) {
    authorRegEx = authorRegEx.join(' ')
  } else {
    return;
  }

  // on met une majuscule au début du nom si elle n'y est pas déjà
  authorRegEx = authorRegEx.charAt(0).toUpperCase() + authorRegEx.slice(1);

  // on limite l'envoi du formulaire à 30 caractères
  if (authorRegEx.length >= 30) {
    alert("le nom ne doit pas être plus long que 30 caractères");
    return;
  }
  return authorRegEx.slice(0, 30);
};

export const checkIfArgonauteExists = (newArgonaute, argonautes) => {
  const doesArgonauteExists = argonautes.find(
    (argonaute) => argonaute.username === newArgonaute
  );
  doesArgonauteExists && alert("cet Argonaute fait déjà partie de la quête !");
};
