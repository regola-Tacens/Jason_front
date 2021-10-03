export const sanitizeArgonauteInput = (author) => {
    // on vérifie que le champ n'est pas vide ou ne contient pas que des espaces
    if (!author || !author.trim()) {
      alert("le champ doit être rempli");
      return;
    }

    // on retire les espaces blancs au début et à la fin du nom, et on rejette les chiffres
    const authorRegEx = author
      .trimStart()
      .trimEnd()
      .match(/[a-zA-Z'éèàêöï]+/g)
      .join(" ");

    // on limite l'envoi du formulaire à 30 caractères
    if (authorRegEx.length >= 30) {
      alert("le nom ne doit pas être plus long que 30 caractères");
      return;
    }
    return authorRegEx.slice(0, 30);
  };


