# 🛡️ AuditCloud – Moteur Hybride d’Audit de Conformité Cloud ISO/RGPD

## 🎯 Objectif

Ce projet a pour but de concevoir et de développer une solution logicielle capable de **vérifier automatiquement la conformité d’une infrastructure Cloud** aux normes **ISO/IEC 27001** et **RGPD**.  
Il s’inscrit dans une démarche **DevSecOps**, où la sécurité est intégrée dès le début du cycle de développement.

---

## 📌 Contexte

L’utilisation croissante du Cloud dans les systèmes d'information modernes implique de nouveaux risques :
- Stockages non chiffrés
- Machines virtuelles exposées
- Configurations erronées

➡️ D’où la nécessité d’une **surveillance proactive, automatisée et intégrable dans une chaîne CI/CD**.

---

## ⚙️ Présentation de la solution

Le projet repose sur un moteur d’audit **hybride**, capable de faire deux types d’analyse :

- 🔍 **Audit statique** : avant déploiement, à partir de fichiers JSON (ex : Terraform)
- 🛰️ **Audit dynamique** : après déploiement, en interrogeant les ressources Azure via SDK

Les audits utilisent des **règles codifiées dans `rules.json`**, représentant les exigences ISO et RGPD.  
Le moteur renvoie :
- un score de conformité,
- une liste de violations,
- des recommandations.

---

## ✨ Fonctionnalités principales

- ✅ Analyse de fichiers IaC (Terraform JSON, etc.)
- 🧠 Application de règles de sécurité personnalisables
- 📊 Score de conformité + affichage des violations
- 🌐 Interface Web React
- 🖥️ Utilisation en ligne de commande (CLI)
- 🔁 Intégration possible dans une CI/CD DevSecOps

---

## 🔐 Aspects Sécurité Couverts

- 🔐 Chiffrement des données au repos
- 🔎 Contrôle des accès réseaux (NSG, ports exposés)
- 👮 Conformité aux bonnes pratiques ISO 27001 (Annexe A)
- 📋 Journalisation et accès
- ⚠️ Détection de violations RGPD (article 25, 32)

---

## ✅ Conclusion

Ce moteur constitue une **brique de sécurité DevSecOps** essentielle pour toute organisation utilisant le Cloud.  
Il permet d’**intégrer la conformité dès la phase de développement** et de **maintenir un niveau de sécurité élevé après déploiement**, grâce à une posture d’audit continue et automatisée.

---

📂 Ce dépôt contiendra :
- Le moteur d’audit (`auditEngine.js`, `scanLive.js`)
- Le frontend React
- Le fichier `rules.json` avec règles ISO/RGPD
- Des exemples de fichiers `infra.json`
- Un pipeline CI/CD (GitHub Actions)

