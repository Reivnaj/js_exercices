// 2.2. Opérations & boucles

  // 2.2.1 Calculs rapides
  function factoriel(){
    let result = 1
    for (let count = 1; count <= userNumber; count++) {
      result*=count;
    }
    return result;
  }
  let userNumber = prompt("De quel nombre veux-tu calculer la factorielle ?");
  console.log(`Le résultat est : ${factoriel(userNumber)}`);
