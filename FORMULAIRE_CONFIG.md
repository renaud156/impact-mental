# Configuration du formulaire de contact

## Service utilisé : Web3Forms (Gratuit)

Le formulaire utilise Web3Forms, un service gratuit qui envoie les messages vers votre email sans backend.

## Étapes de configuration :

### 1. Créer un compte Web3Forms

1. Allez sur https://web3forms.com
2. Cliquez sur "Get Started Free"
3. Entrez votre email : **renaud_olivier@hotmail.fr**
4. Vérifiez votre email et récupérez votre **Access Key**

### 2. Configurer le formulaire

Dans le fichier `src/app/App.tsx`, ligne ~700, remplacez :

```tsx
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
```

Par :

```tsx
<input type="hidden" name="access_key" value="VOTRE_CLE_ICI" />
```

### 3. C'est terminé !

Les messages du formulaire arriveront directement dans votre boîte mail **renaud_olivier@hotmail.fr**

## Fonctionnalités actuelles :

- ✅ Validation des champs obligatoires (nom, email, message)
- ✅ Message de confirmation après envoi
- ✅ Message d'erreur en cas de problème
- ✅ Bouton désactivé pendant l'envoi
- ✅ Réinitialisation automatique du formulaire après envoi
- ✅ Protection anti-spam intégrée par Web3Forms

## Alternative : EmailJS

Si vous préférez EmailJS :
1. Créez un compte sur https://emailjs.com
2. Suivez leur guide d'intégration React
3. Remplacez la fonction `handleSubmit` dans App.tsx

## Limites du plan gratuit Web3Forms :

- 250 soumissions/mois
- Tous les emails arrivent dans votre boîte
- Pas de dashboard avancé
- Parfait pour démarrer !
