# 🔐 Backend – Moteur d’Audit de Conformité Cloud (ISO 27001 / RGPD)

Ce backend constitue le cœur d’un système d’audit automatisé permettant de vérifier la conformité d’une infrastructure Cloud (Terraform ou Azure) aux exigences de sécurité des normes **ISO 27001** et **RGPD**.

---

## 🎯 Objectifs

- ✅ Audit **statique** des fichiers Terraform (`.tf.json`)
- ✅ Audit **dynamique** des ressources Azure en ligne via SDK
- ✅ Application automatique des règles de conformité ISO/RGPD
- ✅ Génération de **rapports détaillés** (PASS / FAIL)
- ✅ Calcul d’un **score de conformité**
- ✅ API REST extensible
- ✅ Architecture modulaire facilitant l’ajout de nouvelles règles

---

## 📂 Structure du projet (`/src`)

| Dossier/Fichier               | Description |
|-------------------------------|-------------|
| `app.js`                      | Point d’entrée de l’application Express |
| `api/`                        | Routes, contrôleurs et middlewares de l’API |
| `config/`                     | Configuration générale et Azure (`azure.config.js`) |
| `core/`                       | **Cœur du moteur d’audit** |
| ├── `auditEngine.js`          | Orchestrateur : lance les audits statique et dynamique |
| ├── `staticAudit.js`          | Audit basé sur les fichiers Terraform |
| ├── `dynamicAudit.js`         | Audit en direct via SDK Azure |
| ├── `ruleEngine.js`           | Applique les règles aux ressources |
| └── `rules/`                  | Contient les règles de conformité (`.js`) |
| `data/`                       | Fichiers de données, ex. : `rules.json` |
| `models/`                     | Modèles de données (résultats d’audit, etc.) |
| `services/`                   | Services liés à Azure, aux fichiers ou au scoring |
| `utils/`                      | Utilitaires (logger, validation, etc.) |
| `tests/`                      | Tests unitaires du moteur (`auditEngine.test.js`) |

---

## 🔁 Fonctionnement global

1. L’utilisateur fournit :
    - Un fichier Terraform converti en `.json`
    - Ou déclenche un audit en direct sur Azure

2. Le backend :
    - Charge les ressources à auditer
    - Applique les **règles de conformité** à chaque type de ressource
    - Génère un **rapport détaillé** de conformité
    - Calcule un **score global pondéré**

3. Les résultats sont accessibles via l’API REST et peuvent être intégrés dans une CI/CD.

---

## 📊 Exemple de résultat JSON

```json
[
  {
     "resource": "examplestorage",
     "rule": "Chiffrement au repos",
     "status": "PASS",
     "message": "Blobs chiffrés et HTTPS activé.",
     "severity": "high"
  },
  {
     "resource": "open-nsg",
     "rule": "Pas d’accès public sur les ports critiques",
     "status": "FAIL",
     "message": "Ports exposés : 22",
     "severity": "critical"
  }
]
```

