# Configuration de l'envoi d'emails avec FormSubmit

## Fonctionnement

Le formulaire de contact utilise maintenant **FormSubmit.co**, un service gratuit et simple qui envoie les emails directement sans configuration complexe.

## Comment ça marche

1. Lorsque vous soumettez le formulaire pour la **première fois**, FormSubmit vous enverra un email de confirmation à **bail.alexis052023@gmail.com**
2. **Cliquez sur le lien de confirmation** dans cet email
3. Après la confirmation, tous les futurs messages du formulaire seront automatiquement envoyés à cette adresse

## Avantages

✅ **Gratuit** - Pas de limite d'emails  
✅ **Sans inscription** - Pas besoin de créer un compte  
✅ **Immédiat** - Fonctionne dès la première utilisation (après confirmation)  
✅ **Sécurisé** - Protection anti-spam intégrée  

## Configuration actuelle

- **Email de destination:** bail.alexis052023@gmail.com
- **Sujet:** "Nouveau message depuis Fortnite Cup Assistant"
- **Format:** Tableau HTML élégant
- **CAPTCHA:** Désactivé pour une meilleure UX

## Pour tester

1. Remplissez le formulaire de contact sur votre site
2. Cliquez sur "Envoyer"
3. Si c'est la première fois, vérifiez vos emails et confirmez
4. Les prochains messages arriveront directement !

## Personnalisation

Si vous voulez ajouter une page de redirection après l'envoi, ajoutez cette ligne dans le formulaire HTML :
```html
<input type="hidden" name="_next" value="https://votre-site.com/merci.html">
```

## Support

Pour plus d'options : [https://formsubmit.co/](https://formsubmit.co/)
