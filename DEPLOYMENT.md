# Deployment Guide

Ce document décrit les étapes pour déployer le site sur un nouveau serveur.

## Prérequis

- Serveur Ubuntu 22.04 / 24.04 avec Docker installé
- Traefik en cours d'exécution sur le réseau Docker `traefik-public`
- Accès SSH au serveur
- Accès admin au repo GitHub de l'organisation

---

## 1. Préparer le serveur

Se connecter en SSH et créer le dossier de l'application :

```bash
ssh -p <SSH_PORT> <USER>@<SERVER_IP>
sudo mkdir -p /opt/landing-page
sudo chown <USER>:<USER> /opt/landing-page
```

---

## 2. Configurer les secrets GitHub Actions

Aller dans **Settings → Secrets and variables → Actions** du repo et ajouter les secrets suivants :

| Secret | Description |
|--------|-------------|
| `SERVER_HOST` | IP publique du serveur |
| `SERVER_USER` | Utilisateur SSH sur le serveur |
| `SERVER_SSH_PORT` | Port SSH configuré lors du hardening |
| `SERVER_SSH_KEY` | Clé SSH privée dédiée CI/CD (voir ci-dessous) |

### Générer une clé SSH dédiée CI/CD

Ne pas réutiliser la clé personnelle. Générer une clé dédiée :

```bash
# Générer la clé
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/deploy_ci -N ""

# Autoriser la clé sur le serveur
ssh-copy-id -i ~/.ssh/deploy_ci.pub -p <SSH_PORT> <USER>@<SERVER_IP>

# Afficher la clé privée à coller dans SERVER_SSH_KEY
cat ~/.ssh/deploy_ci
```

Copier le contenu complet (de `-----BEGIN OPENSSH PRIVATE KEY-----` jusqu'à `-----END OPENSSH PRIVATE KEY-----`) dans le secret `SERVER_SSH_KEY`.

---

## 3. Configurer les DNS

Ajouter les entrées DNS chez votre registrar :

| Type | Nom | Valeur |
|------|-----|--------|
| `A` | `votre-domaine.com` | IP du serveur |
| `CNAME` | `www.votre-domaine.com` | `votre-domaine.com` |

> La propagation DNS peut prendre jusqu'à 24h. Traefik émettra automatiquement le certificat Let's Encrypt une fois le DNS résolu.

---

## 4. Déployer

Le déploiement est **automatique** à chaque push sur la branche `main`.

```
Push sur main
    ↓
GitHub Actions
    1. Build de l'image Docker (npm ci + vite build + nginx:alpine)
    2. Push de l'image sur ghcr.io/<org>/<repo>:latest
    3. Connexion SSH au serveur
    4. docker compose pull + docker compose up -d
    ↓
Site disponible sur https://votre-domaine.com
```

Pour déclencher un déploiement manuellement sans modifier le code :

```bash
git commit --allow-empty -m "chore: redeploy"
git push
```

---

## 5. Vérifier le déploiement

Depuis le serveur :

```bash
# Vérifier que le container tourne
docker ps | grep landing-page

# Voir les logs
docker logs landing-page --tail 50

# Vérifier que Traefik route correctement
docker exec traefik traefik healthcheck
```

Depuis un navigateur :

- `https://votre-domaine.com` — doit afficher le site
- `https://www.votre-domaine.com` — doit rediriger vers `https://votre-domaine.com`

---

## Structure des fichiers de déploiement

```
landing-page/
├── Dockerfile                        # Build multi-stage (node + nginx)
├── nginx.conf                        # Config nginx (SPA fallback + gzip + cache)
├── docker-compose.yml                # Labels Traefik + réseau
└── .github/workflows/deploy.yml      # Pipeline GitHub Actions
```

---

## Dépannage

**Le container ne démarre pas**

```bash
docker logs landing-page
```

**Traefik ne route pas vers le site**

```bash
docker logs traefik | grep landing
```

**Le certificat SSL n'est pas émis**

```bash
# Vérifier que les DNS pointent bien vers le serveur
dig votre-domaine.com

# Vérifier les logs Traefik pour Let's Encrypt
docker logs traefik | grep -i "acme\|certificate\|votre-domaine"
```

**Forcer un redéploiement sans modifier le code**

```bash
git commit --allow-empty -m "chore: redeploy"
git push
```
