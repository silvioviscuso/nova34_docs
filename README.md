# Nova34 - Official Documentation  

Welcome to the official documentation of **Nova34**!  
This website is built using [Docusaurus](https://docusaurus.io/), a modern static site generator.  

## 🚀 Installation  

To install project dependencies, run:  

```bash
yarn
```

## 🔧 Local Development  

To start a local development server and preview changes in real-time:  

```bash
yarn start
```

This command will automatically open a browser window with the documentation.  

## 📦 Build  

To generate static files for deployment, run:  

```bash
yarn build
```

The static files will be generated in the `build` directory and can be hosted on any static content hosting service.  

## 🚀 Deployment  

If using SSH:  

```bash
USE_SSH=true yarn deploy
```

If not using SSH:  

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If hosting on GitHub Pages, this command will build the website and push it to the `gh-pages` branch.  

## 📄 License  

This project is licensed under the [MIT License](LICENSE).  

---

For more details, visit the [Nova34 repository](https://github.com/silvioviscuso/nova34).  
