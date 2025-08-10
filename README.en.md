# QQHKX Personal Homepage

English | [中文](./README.md)

A modern personal homepage project built with [Next.js](https://nextjs.org), pursuing "beautiful and stunning" visual and interactive experiences.

## ✨ Features

- 🎨 Modern design style with gradient and neumorphism
- 🎭 Smooth Framer Motion animations
- 📱 Fully responsive design, mobile-friendly
- ⚡ Based on Next.js 15 and Turbopack for lightning-fast development
- 🎯 Environment variable configuration, update content without code changes
- 🚀 One-click deployment to Vercel

## 🔧 Environment Configuration

This project supports dynamic configuration of personal information through environment variables:

1. Copy the environment variable template:
   ```bash
   cp .env.example .env.local
   ```

2. Edit the `.env.local` file and fill in your personal information

3. Restart the development server

For detailed configuration instructions, please refer to [ENV_CONFIG.md](./ENV_CONFIG.md).

## 🚀 Quick Start

1. **Clone the project**
   ```bash
   git clone https://github.com/qqhkx/qqhkx-homepage.git
   cd qqhkx-homepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local file and fill in your personal information
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   
   Open [http://localhost:3000](http://localhost:3000) to view the result.

## 📁 Project Structure

```
qqhkx-homepage/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   └── lib/                 # Utility functions and configurations
├── public/                  # Static assets
│   └── font/               # Local font files
├── .env.example            # Environment variable template
├── .env.local              # Local environment variables (create yourself)
├── ENV_CONFIG.md           # Environment configuration guide
└── README.en.md            # English documentation
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Font**: Pacifico (local font)
- **Dev Tools**: Turbopack
- **Deployment**: Vercel

## 📦 Build & Deploy

### Local Build
```bash
npm run build
npm start
```

### Deploy to Vercel

1. **One-click deployment**
   
   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/qqhkx/qqhkx-homepage)

2. **Manual deployment**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

3. **Environment variable configuration**
   
   Configure the required environment variables in Vercel Console > Settings > Environment Variables.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - CSS framework documentation
- [Framer Motion Documentation](https://www.framer.com/motion/) - Animation library documentation
- [Vercel Deployment Documentation](https://vercel.com/docs) - Deployment platform documentation

## 📈 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=qqhkx/qqhkx-homepage&type=Date)](https://star-history.com/#qqhkx/qqhkx-homepage&Date)

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 📄 License

[MIT License](LICENSE)

---

⭐ If this project helps you, please give it a Star!